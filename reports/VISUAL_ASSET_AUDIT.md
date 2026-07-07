# VISUAL ASSET AUDIT

Audit date: 2026-07-07

Scope inspected:

- Prior live GitHub Pages source from `gh-pages`
- Current editable public source in `prototype/index.html`
- Current editable public source in `prototype/shop.html`
- Current editable public source in `prototype/styles.css`

## 1. Why the site still looked weak before the rebuild

Three verified problems were doing most of the damage:

1. The prior live design relied on fake object stand-ins.
   - Proof: the live `gh-pages` source used `.art-coffee`, `.art-paper`, `.art-fabric`, blob stacks, and decorative panels instead of real imagery.

2. Navigation implied routes that did not exist in the static site.
   - Proof: `About` and `Contact` were present in nav but were plain text, not real links.

3. The shop language behaved like pre-commerce theater.
   - Proof: the old shop preview used lane art, teaser cards, and shop-promising copy without verified safe storefront routes.

## 2. Which fake images or CSS art were hurting it

These were the main offenders in the prior public source:

- `.stack` with `.blob-1`, `.blob-2`, `.blob-3`
- `.art-coffee`
- `.art-paper`
- `.art-fabric`
- `.art-shelf`
- `.art-light`
- shop preview image blocks and lane art panels

Why they hurt:

- They read as substitute photography, not a deliberate editorial system.
- They made the site feel like a demo instead of a finished reading-world brand.
- They were weakest on the shop page, where they created product-adjacent expectations without real store proof.

## 3. What should be removed

Removed in the current rebuild:

- blob image stack
- CSS object stand-ins
- dropdown nav behavior for static content routing
- pseudo-store teaser treatment that felt more commercial than truthful
- dead nav items

## 4. What should be kept

Kept or strengthened:

- the Lainey name and quiet editorial tone
- large serif-led typography
- restrained announcement bar
- two-page public structure (`index.html` and `shop.html`)
- explicit shop-hold language
- slow-reading positioning

## 5. Are there any real usable images

Inside the tracked public source: no.

Verified:

- No image assets were present under tracked repo files outside build/vendor folders.
- `prototype/` contained no image files.

Related but not safe for public use:

- Shopify products have media, but the read-only Shopify audit also showed placeholder images and cross-brand catalog state.
- Those store images were not safe to pull into the public site as-is.

## 6. Can the current GitHub Pages site visually land with better design and no new platform

Yes.

Why:

- The site did not fail because static HTML/CSS is incapable.
- It failed because the previous visual system tried to simulate imagery and commerce instead of owning an editorial preview state.
- The rebuild fixes that by making type, spacing, note cards, and launch-state honesty do the work.

## 7. Is real imagery the blocker

For the home/editorial page: not completely.

- The home page can land as an editorial reading-room preview without photography.

For the shop page: yes.

- Real imagery is still the blocker for any convincing public shop presentation beyond category direction and launch criteria.
- Better CSS alone will not make the shop feel launchable.

## 8. Is a platform move necessary for visual quality

No.

The prior weakness was not caused by GitHub Pages itself.

The verified improvement path was:

- remove fake image theater
- make navigation truthful
- make the shop page explicitly non-commercial
- use editorial structure instead of pseudo-product decoration

## Current visual action taken

The editable public source was rebuilt toward:

- real anchor-based nav
- large-type editorial hero
- note-card system instead of fake object art
- honest shop-hold messaging
- mobile-safe layout verified at a narrow viewport without horizontal overflow
