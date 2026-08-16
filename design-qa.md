# Design QA

## Evidence

- Source visual truth: `/tmp/halland-site-concepts-simple/simple-type-led.png`
- Final implementation screenshot: `.qa/astro-home-desktop.png`
- Side-by-side comparison: `.qa/astro-home-comparison.png`
- Mobile implementation screenshot: `.qa/astro-home-mobile.png`
- Reduced-motion screenshot: `.qa/astro-home-reduced-motion.png`
- Company information screenshot: `.qa/company-information-desktop.png`
- Privacy desktop screenshot: `.qa/privacy-desktop.png`
- Privacy mobile screenshot: `.qa/privacy-mobile-final.png`
- Desktop viewport: `1536 x 1024` CSS pixels
- Mobile viewport: `390 x 844` CSS pixels
- Source pixels: `1536 x 1024`
- Desktop implementation pixels: `1536 x 1024`
- Mobile implementation pixels: `390 x 844`
- Device scale factor: `1`
- Density normalization: None was needed. The source and desktop capture use the same pixel size and density.
- State: Home page, default light appearance, no hover or focus state.

## Full-view comparison

The final home page keeps the source structure and hierarchy, with two later
changes requested by the owner:

- The wordmark is at the top left.
- RoTile and Contact are at the top right.
- The large statement is left aligned in the upper-middle area.
- The description follows the statement. The two links below it were removed.
- A thin rule, compact company identity, and four small links form the footer.
- Full contact and registration details are on the directly linked Company
  information page.
- The page uses warm white, near-black, and blue.
- The layout has no cards, icons, images, gradients, shadows, or extra sections.
- The Astro SSR migration does not change the selected visual direction.
- Motion adds short entrance and link-hover effects without changing the final
  resting layout.

The final side-by-side comparison shows the selected base direction. The removed
main links and expanded legal footer are intentional owner-directed changes.
They do not create an actionable P0, P1, or P2 issue.

## Focused-region comparison

A separate crop was not necessary. The page is sparse, and all important details are clear in the full-size side-by-side comparison. The navigation, statement, copy, links, rule, and footer can all be read and compared at the full-view size.

## Required fidelity surfaces

- Fonts and typography: The implementation uses a system sans-serif stack with a weight, size, line height, tracking, and wrapping close to the source. The display statement has the same two-line desktop structure. Font rasterization is slightly different from the generated source image, but this is a P3 difference.
- Spacing and layout rhythm: Header, statement, supporting copy, links, footer rule, and footer links align closely with the source. Desktop and mobile layouts have no clipping or horizontal overflow.
- Colors and visual tokens: The warm-white background, near-black text, gray rule, and blue links match the source direction and have sufficient contrast.
- Image quality and asset fidelity: The selected source contains no image or icon assets. The implementation does not add placeholders or code-drawn assets.
- Copy and content: The main statement and description match the selected source.
  The two links below the description were intentionally removed. The footer now
  contains the legal name and organization number with MVA suffix. The Company
  information page contains the geographic address, email, phone, VAT status,
  legal form, and register status. Support, Privacy, and Terms contain
  product-specific RoTile content and use the same visual system.

## Interaction and accessibility checks

- RoTile links point to the current App Store listing.
- Contact links use `mailto:oscar@halland.tech`.
- Company information, Support, Privacy, and Terms open their SSR routes.
- The Privacy footer link was tested through browser navigation.
- All five content routes returned HTTP 200 and the correct document title.
- An unknown route returned HTTP 404 and the correct not-found title.
- The server response contains the complete page content before client
  JavaScript runs.
- Browser console: no application errors.
- Browser page errors: none.
- Motion link hover was verified with a live opacity change.
- Reduced-motion mode was verified with header opacity `1` and hero transform
  `none`.
- WCAG A and AA automated checks:
  - Home desktop: 0 violations.
  - Home mobile: 0 violations.
  - Privacy mobile: 0 violations.
  - Support mobile: 0 violations.
  - Terms mobile: 0 violations.
  - Astro home desktop: 0 violations.
  - Astro company information: 0 violations.
  - Astro support: 0 violations.
  - Astro privacy: 0 violations.
  - Astro terms: 0 violations.

## Comparison history

### Iteration 1

- Evidence: `.qa/home-desktop-v1.png`
- Finding: P2. The statement and footer were lower than the source.
- Fix: Changed the main area to use an explicit top position and increased the page bottom padding.
- Post-fix evidence: `.qa/home-desktop-v2.png`

### Iteration 2

- Evidence: `.qa/home-desktop-v2.png`
- Finding: P2. The display type was slightly too large and tall.
- Fix: Reduced the responsive display size and tightened its line height.
- Post-fix evidence: `.qa/home-desktop-final.png` and `.qa/home-comparison-final.png`

### Iteration 3

- Evidence: `.qa/home-desktop-final.png` and `.qa/home-mobile-final.png`
- Finding: Owner request. Remove the two links under the main description and add
  required Norwegian company information.
- Fix: Removed the two main links. Added the legal name, organization number with
  MVA suffix, Foretaksregisteret status, business address, and email to the footer.
- Post-fix evidence: `.qa/home-company-footer-desktop.png` and
  `.qa/home-company-footer-mobile.png`

### Iteration 4

- Evidence: `.qa/home-company-footer-desktop.png`
- Finding: Owner request. Make the legal footer smaller and confirm whether the
  full address must remain visible in the footer.
- Fix: Kept the legal name and organization number in the footer. Moved the full
  contact and registration record to a directly linked Company information page.
- Post-fix evidence: `.qa/home-compact-footer-desktop.png`,
  `.qa/home-compact-footer-mobile.png`, and `.qa/company-information-desktop.png`

### Iteration 5

- Evidence: `.qa/home-compact-footer-desktop.png`
- Finding: Owner request. Replace the React client application with the
  strongest current SSR framework for this content-led site, add Motion, and
  remove all em dashes.
- Fix: Migrated the site to Astro 7 SSR with the official standalone Node
  adapter. Rebuilt every route as server-rendered Astro pages. Added Motion
  entrance and hover effects with reduced-motion support. Removed React, the
  Vite React plugin, and all em dashes.
- Post-fix evidence: `.qa/astro-home-desktop.png`,
  `.qa/astro-home-mobile.png`, `.qa/astro-home-reduced-motion.png`, and
  `.qa/astro-home-comparison.png`

## Follow-up polish

- P3. Font rasterization can vary by operating system because the page uses a native system font stack. This is acceptable for the selected minimal design.

final result: passed
