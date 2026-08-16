# Website design notes

- Keep the home page type-led and very small.
- Use warm white, near-black, and one blue link color.
- Do not add cards, icons, illustrations, gradients, shadows, or long marketing
  sections.
- Keep RoTile, contact, support, privacy, and terms easy to find.
- Use plain language and a responsive layout.
- Do not use em dashes.
- Keep motion restrained and respect reduced-motion preferences.

# Engineering rules

- Use strict TypeScript for project code and configuration.
- Use Tailwind utilities in components.
- Keep `src/styles/global.css` for Tailwind theme tokens, base rules, and named
  keyframes only.
- Do not add inline styles to Astro templates.
- Use a React island for browser interaction. Do not add manual DOM queries or browser
  event listeners to Astro pages.
- Keep client JavaScript out of legal and information pages.
- Do not use `any`, `@ts-ignore`, or `@ts-nocheck`.
- Use Oxlint as the linter.
- Use Oxfmt for supported files.
- Use Prettier only for Astro templates until Oxfmt supports them.
- Run `npm run check` before each handoff or commit.
- Do not add an automated test suite unless the owner asks for one.
- Do not deploy the website.
