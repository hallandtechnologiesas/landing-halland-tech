import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const sourceRoots = [join(projectRoot, "scripts"), join(projectRoot, "src")];
const rootFiles = [
  ".oxfmtrc.json",
  ".oxlintrc.json",
  ".prettierrc.json",
  "AGENTS.md",
  "Makefile",
  "README.md",
  "astro.config.ts",
  "design-qa.md",
  "package.json",
  "tsconfig.json",
].map((path) => join(projectRoot, path));
const failures = [];

interface SourceCheck {
  appliesTo: (path: string) => boolean;
  message: string;
  name: string;
  pattern: RegExp;
}

const checks: SourceCheck[] = [
  {
    appliesTo: () => true,
    name: "em dash",
    pattern: /\u2014/u,
    message: "Use a shorter sentence or another punctuation mark.",
  },
  {
    appliesTo: (path) => [".astro", ".ts", ".tsx"].includes(extname(path)),
    name: "unsafe TypeScript escape",
    pattern: /\b(?:as\s+any|@ts-ignore|@ts-nocheck)\b/u,
    message: "Fix the type instead of bypassing the type system.",
  },
  {
    appliesTo: (path) => extname(path) === ".astro",
    name: "arbitrary Tailwind utility",
    pattern: /class(?:=|:list)\s*["'{][^"'}]*\[/u,
    message: "Use a named Tailwind utility.",
  },
  {
    appliesTo: (path) => extname(path) === ".astro",
    name: "inline style",
    pattern: /\sstyle\s*=/u,
    message: "Use a Tailwind utility or a named theme token.",
  },
];

async function collectFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(path) : [path];
    }),
  );

  return paths.flat();
}

const nestedFiles = (await Promise.all(sourceRoots.map(collectFiles))).flat();
const sourceFiles = [...nestedFiles, ...rootFiles];

const sources = await Promise.all(
  sourceFiles.map(async (path) => ({
    content: await readFile(path, "utf8"),
    path,
  })),
);

for (const { content, path } of sources) {
  if (
    relative(projectRoot, path) === "src/styles/global.css" &&
    content.trim() !== '@import "tailwindcss";'
  ) {
    failures.push(
      "src/styles/global.css:1: custom CSS. Keep only the Tailwind import.",
    );
  }

  for (const check of checks.filter(({ appliesTo }) => appliesTo(path))) {
    const match = check.pattern.exec(content);

    if (match) {
      const line = content.slice(0, match.index).split("\n").length;
      failures.push(
        `${relative(projectRoot, path)}:${line}: ${check.name}. ${check.message}`,
      );
    }
  }
}

if (failures.length > 0) {
  process.stderr.write(`${failures.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`Source guardrails passed for ${sourceFiles.length} files.\n`);
}
