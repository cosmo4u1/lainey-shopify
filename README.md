# Lainey Headless Website

This repo is a Builder-rendering support app for Lainey. It contains route-based Builder page lookup for the five Lainey routes and an explicit static fallback when Builder keys or matching Builder content are missing.

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
