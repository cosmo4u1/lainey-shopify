# Deployment

Default deployment targets: Vercel, Netlify, Cloudflare Pages, or another Node-capable host.

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
