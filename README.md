# Halland Technologies

The public website for Halland Technologies AS.

## Stack

- Astro 7 with server-side rendering and the official Node adapter.
- Tailwind CSS 4 through its official Vite plugin.
- Strict TypeScript for project code and configuration.
- Oxlint with type-aware TypeScript and import rules.
- Oxfmt for TypeScript, CSS, JSON, and Markdown.
- Prettier only for Astro templates because Oxfmt does not support `.astro` formatting
  yet.

The full site is server-rendered and has no client JavaScript. The stylesheet contains
only the Tailwind import. Components use named Tailwind utilities and the standard
Tailwind palette.

## Requirements

- Node.js 22.12 or newer.
- npm 11 or newer.

## Local development

Install exact locked dependencies:

```sh
make install
```

Start the local development server:

```sh
make dev
```

## Quality checks

Run the complete local quality gate:

```sh
make check
```

This command checks formatting, runs type-aware linting, checks Astro and TypeScript,
runs project source guardrails, and creates a production build.

Use these focused commands when required:

```sh
make format
make lint
make typecheck
make build
```

There is no automated test suite. Browser QA is done against the local production build
when visual or interaction code changes.

## Production build

```sh
make build
make start
```

Deployment is not part of this repository workflow.
