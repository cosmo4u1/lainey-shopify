# Deployment

## Current stable lane: GitHub Pages

The public preview is GitHub Pages: https://cosmo4u1.github.io/lainey-shopify/

- Served from the `gh-pages` branch (`index.html`, `styles.css`, `.nojekyll`).
- The `gh-pages` branch is updated only from the verified `prototype/` static output on `main`.
- No build step, no environment variables, no external services required.

`prototype/` is the current public source. Builder, Netlify, and Vercel are not active launch paths — do not chase them.

## Commerce path: Shopify

Shopify is the required future checkout/order path. The Lainey Shopify store domain is https://1ev11w-fu.myshopify.com/ — cart, checkout, payments, and orders all live there, never on GitHub Pages.

- No live purchasing exists on the GitHub Pages site yet.
- The Shop page is preview-safe: "Coming soon" placeholders only.
- Shop buttons should only point to verified Shopify collection/product URLs once the store is ready.

## Future lanes (not current)

Node-capable hosts can serve the Next.js app later, once auth is clean.

Implemented:

- Deterministic package versions
- Checked-in TypeScript config
- Builder render path with static fallback

Required before live Builder rendering works in deployment:

- `BUILDER_PUBLIC_API_KEY`
- matching Builder `page` entries for the Lainey routes

Optional server-side expansion:

- `BUILDER_PRIVATE_KEY` for private-model preview or Admin API automation

Shopify is not required to deploy the site shell.
