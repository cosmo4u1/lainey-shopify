# CODEX CONDUCTOR DECISION

Chosen path: `A. Keep GitHub Pages live and visually rebuild current static site.`

Reason:

GitHub Pages is the only verified live publish path from this audit, and the visible weakness was caused by the prior visual system, not by the hosting platform. Shopify access is real but not public-safe yet. Builder remains non-essential to the visible fix and was not re-verified as a dependable publish path in this audit.

## Evidence from inventory

- Local repo is writable and buildable now.
- GitHub repo plugin access is verified now.
- `gh-pages` is the verified live public branch now.
- No repo-local real imagery exists.
- Figma, Canva, and Adobe design surfaces were not connected to real project files in this audit.

## Evidence from visual audit

- The prior live site looked weak because it depended on fake object art, dead nav, and pseudo-commerce signaling.
- The static site can improve materially without a platform move by switching to an editorial layout and explicit launch-state honesty.
- Real imagery is still the blocker for a convincing shop, but not for a stronger editorial home page.

## Evidence from Shopify audit

- Shopify reads work.
- The store contains mixed-brand collections and placeholder asset signals.
- Exact public category lanes (`Lainey Wear`, `Writings`, `Things`) were not verified as clean store collections.
- Linking the public site into the current store would risk exposing unfinished or cross-brand state.

## Tools used now

- local shell
- local git
- GitHub repo plugin
- Shopify read-only connector
- in-app browser for visual verification
- local Next build and scope QA

## Tools not used

- Builder remote publish path
- Shopify writes
- Figma
- Canva
- Adobe Express
- Netlify
- Vercel

## Why not

- Builder was not needed to improve the visible public result.
- Shopify writes would move the task from website polish into store-state risk.
- Figma/Canva/Adobe had no verified project assets to act on.
- Netlify/Vercel were not required because GitHub Pages already serves the live site.

## Owner approval needed

No new approval beyond the existing instruction to execute the chosen website path and deploy the verified static site.

## Exact next execution steps

1. Keep `prototype/` as the public source of truth.
2. Replace the fake image/blob system with an editorial note-card layout.
3. Convert dead nav into real anchors.
4. Keep the shop page non-commercial and explicit about what is still blocked.
5. Run `npm install`, `npm run build`, `npm run qa:scope`, and forbidden-term grep.
6. Commit only intended source files on `main`.
7. Publish only the verified static files to `gh-pages`.
8. Record live URL, commit SHA, and remaining blocker in the final release report.
