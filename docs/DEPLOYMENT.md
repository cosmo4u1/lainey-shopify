# Deployment

## Current stable lane: GitHub Pages

The public preview is GitHub Pages: https://cosmo4u1.github.io/lainey-shopify/

- Served from the `gh-pages` branch (`index.html`, `styles.css`, `.nojekyll`).
- The `gh-pages` branch is updated only from the verified `prototype/` static output on `main`.
- No build step, no environment variables, no external services required.

Do not chase blocked services: Netlify is not retried, Builder.io is not forced, Vercel OAuth is not forced. These are optional future lanes, not launch-blocking.

## Future lanes (not current)

Node-capable hosts (Vercel, Cloudflare Pages, etc.) can serve the Next.js app later, once auth is clean.

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
