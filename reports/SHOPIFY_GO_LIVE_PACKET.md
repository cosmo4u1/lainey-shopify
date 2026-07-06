# Lainey Website Lane Packet

Active website path: Builder-rendering headless Lainey support app with explicit static fallback.

Old Shopify themes: deprecated and reference-only.
Shopify: future backend connection only.
Zine: separate future build.

## Built

- Next.js support app
- Builder model and content payload examples
- route-based Builder page lookup
- polished Lainey homepage fallback
- pages: Home, Essays, Reading Lists, About, Contact
- touchless ops docs
- QA scope script

## Runtime truth

- Implemented: Builder SDK initialization, route-based Builder lookup, Builder rendering when key and content exist, static fallback when they do not.
- Not implemented in-session: Builder Space setup, Builder content creation, Builder preview URL setup, deployment auth.

## Remaining owner authorizations

1. Connect the Builder Space to the GitHub repo.
2. Add Builder public API key to the environment.
3. Choose deployment host authorization.
4. Add Shopify Storefront API token later only if commerce routing is needed.

## Launch boundary

Do not involve products in this website build.
