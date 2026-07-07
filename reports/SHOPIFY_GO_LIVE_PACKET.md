# Lainey Website Lane Packet

Current truth as of 2026-07-06:

- GitHub Pages is the current public Lainey website: https://cosmo4u1.github.io/lainey-shopify/
- `prototype/` is the current public source; `gh-pages` is updated only from verified `prototype/` output.
- Shopify is the required future checkout/order path. Store domain: https://1ev11w-fu.myshopify.com/
- No live purchasing exists on the GitHub Pages site yet.
- Builder, Netlify, and Vercel are not active launch paths.

Old Shopify themes: deprecated and reference-only.
Zine: excluded.

## Live public pages

- Home: controlled wordmark hero, nav (Home, Essays, Reading Lists, Shop, About, Contact)
- Shop (`shop.html`): three lanes — Lainey Wear, Writings, Things — with "Coming soon" placeholders and no prices, cart, or product links.

## Commerce boundary

- All purchases route through Shopify: product pages, cart, checkout, payments, orders.
- The GitHub Pages site is the front door only. It never hosts checkout or cart logic.
- Shop buttons should only point to verified Shopify collection/product URLs once the store is ready. Until then, placeholders stay.
- Product creation and the app connected behind Shopify stay outside this repo (see `docs/MYDESIGNS_PRODUCT_BOUNDARY.md`).

## Go-live steps remaining (owner-side, outside this repo)

1. Create/verify the actual Shopify collection and product URLs in the store.
2. Hand only verified URLs to this repo; wire them into the Shop page lanes.
3. Update `gh-pages` from the verified `prototype/` output.

## Launch boundary

Do not involve product creation in this website build. Do not add product links before verified Shopify URLs exist.
