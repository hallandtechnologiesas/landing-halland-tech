# Website design notes

- Keep the home page type-led and very small.
- Use warm white, near-black, and one orange accent color.
- Do not add cards, icons, illustrations, gradients, shadows, or long marketing
  sections.
- Keep RoTile, contact, support, privacy, and terms easy to find.
- Use plain language and a responsive layout.
- Do not use em dashes.
- Do not add animation without clear owner approval.

# Engineering rules

- Use strict TypeScript for project code and configuration.
- Use Tailwind utilities in components.
- Keep `src/styles/global.css` limited to `@import "tailwindcss";`.
- Use named Tailwind utilities and the standard Tailwind palette.
- Do not use arbitrary Tailwind values or arbitrary variants.
- Do not add inline styles to Astro templates.
- Do not add React or Motion.
- Do not add client JavaScript without clear owner approval.
- Do not use `any`, `@ts-ignore`, or `@ts-nocheck`.
- Use Oxlint as the linter.
- Use Oxfmt for supported files.
- Use Prettier only for Astro templates until Oxfmt supports them.
- Run `npm run check` before each handoff or commit.
- Do not add an automated test suite unless the owner asks for one.
- Do not deploy the website.
