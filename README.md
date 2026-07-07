# Lainey Headless Website

This repo is a Builder-rendering support app for Lainey. It contains route-based Builder page lookup for the five Lainey routes and an explicit static fallback when Builder keys or matching Builder content are missing.

## Current status

- **GitHub Pages is the current public Lainey website**: https://cosmo4u1.github.io/lainey-shopify/ (served from the `gh-pages` branch, built only from the verified `prototype/` static output).
- **`prototype/` is the current public source.** The Shop page (`prototype/shop.html`) is preview-safe: no live purchasing exists on the GitHub Pages site yet.
- **Shopify is the required future checkout/order path.** All purchases will route through the Lainey Shopify store: https://1ev11w-fu.myshopify.com/ (cart, checkout, payments, orders). Shop buttons should only point to verified Shopify collection/product URLs once the store is ready — no product links before that.
- **Builder, Netlify, and Vercel are not active launch paths.**
- **MyDesigns owns all product work.** This repo never touches products (see `docs/MYDESIGNS_PRODUCT_BOUNDARY.md`).
- **Zine Collective is excluded** from this repo and the public site (see `docs/ZINE_EXCLUSION.md`).
- **Old Shopify themes are deprecated** (see `docs/OLD_SHOPIFY_THEME_DEPRECATION.md`).

## Scope

- Brand and content website for Lainey
- Builder page rendering for `/`, `/essays`, `/reading-lists`, `/about`, and `/contact`
- Static fallback for those same routes
- Future Shopify backend boundary only

## Run locally

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Open `http://localhost:3000`.

## QA

```bash
npm run qa:scope
npm run build
```

## Runtime truth

- Implemented: Builder SDK initialization, route-based Builder lookup, Builder page rendering, static fallback rendering.
- Requires Builder key and content: live Builder content on the page routes.
- Requires Builder account auth: model creation, content creation, preview URL setup, and any private-key-backed automation.
- Lint gate: not included in v3. The broken lint script was removed instead of being left as a false claim.
