# Halland Technologies

The public website for Halland Technologies AS.

## Stack

- Astro 7 with static output.
- Tailwind CSS 4 through its official Vite plugin.
- Strict TypeScript for project code and configuration.
- Oxlint with type-aware TypeScript and import rules.
- Oxfmt for TypeScript, CSS, JSON, and Markdown.
- Prettier only for Astro templates because Oxfmt does not support `.astro` formatting
  yet.

The site is generated as static HTML and has no client JavaScript. The stylesheet
contains only the Tailwind import. Components use named Tailwind utilities and the
standard Tailwind palette.

## Requirements

- Node.js.
- pnpm.

## Local development

Install exact locked dependencies:

```sh
pnpm install --frozen-lockfile
```

Start the local development server:

```sh
pnpm dev
```

## Quality checks

Run the complete local quality gate:

```sh
pnpm check
```

This command checks formatting, runs type-aware linting, checks Astro and TypeScript,
and creates a production build.

Use these focused commands when required:

```sh
pnpm format
pnpm lint
pnpm typecheck
pnpm build
```

There is no automated test suite.

## Production build

```sh
pnpm build
pnpm preview
```

Pushes to `main` deploy the static build to Cloudflare Workers after all checks pass.
Pull requests run the same checks without deploying.

The GitHub `production` environment requires these secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Create the token from Cloudflare's **Edit Cloudflare Workers** template. Limit it to the
Halland Technologies account and the `halland.tech` zone.
