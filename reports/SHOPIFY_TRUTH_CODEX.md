# SHOPIFY TRUTH CODEX

Audit date: 2026-07-07

Audit mode: read-only

## Store identity

Verified through Shopify connector:

- Store name: `Cold Coffee Book Club`
- Store domain: `1ev11w-fu.myshopify.com`
- Plan: `Basic`
- Currency: `USD`
- Country: `United States`

## Theme truth

Verified through Admin GraphQL read:

- `Horizon` - role `UNPUBLISHED`
- `Horizon Homepage Shell Draft` - role `MAIN`

Implication:

- There is at least one real unpublished theme surface available in the store.
- No theme write was executed in this audit.

## Product truth

Verified product reads worked.

Latest product scan returned:

- multiple draft Lainey-adjacent items with vendor `Zine Collective`
- one archived probe product
- multiple active products under vendor `My Store 3`

Verified Lainey-tagged or Lainey-titled products found:

- `Notes From Cold Coffee` - `DRAFT`
- `Ten Books for a Rainy Table` - `DRAFT`

Problems visible from the read:

- Lainey-linked items are mixed into a broader store state
- draft items include `staging-placeholder-asset` tags
- vendor values are not cleanly isolated to a Lainey-only public storefront lane

## Collection truth

Verified collection reads worked.

Recent collection scan showed:

- `New Arrivals`
- `Physical Goods`
- several `Zine Collective ...` collections
- `Lainey Reading Lists / Guides`

Targeted Lainey collection search showed:

- `Lainey Ebooks`
- `Lainey Reading Lists / Guides`
- `Lainey Goods`

Exact verified collection titles not found in this audit:

- `Lainey Wear`
- `Writings`
- `Things`

Conclusion:

- The exact public category structure requested by the static shop page is not yet cleanly represented in verified store collections.

## Real images and media

Verified truth:

- Product media exists on some items.
- Some Lainey-linked draft items point at staging placeholder files.
- Some active items have real images, but they belong to a mixed store state that is not cleanly isolated to Lainey.

Conclusion:

- The store has media.
- The store does not yet provide a clean owner-safe image pool for the public Lainey site.

## Product and collection URLs

Technically available from product and collection handles: yes.

Publicly safe to use from this audit: no.

Reason:

- The surrounding catalog/theme state is mixed.
- Linking into the current store would risk exposing unfinished, cross-brand, or staging material.

## Theme editing

Verified:

- Theme reads work.
- An unpublished theme exists.

Not verified:

- Draft theme file writes.

Reason:

- This audit stayed read-only by instruction.
- The connector surface exposes GraphQL mutation capability, but no write was executed.

## Media upload

Verified:

- The callable tool surface includes Shopify image upload capability.

Not executed:

- No media upload was performed in this read-only audit.

## Shopify access verdict

Shopify access is not blocked in Codex.

The blocker is not access. The blocker is store truth:

- mixed-brand collections
- placeholder asset signals
- Lainey content living inside a broader store state that is not yet owner-safe for public linking

That is why this run did not choose a Shopify storefront path for the public website outcome.
