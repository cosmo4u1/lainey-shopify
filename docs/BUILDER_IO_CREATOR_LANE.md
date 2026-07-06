# Builder Creator Lane

This package contains a real Builder render path, but Builder content still requires Builder keys and Builder-side setup.

Required one-time setup:

1. Create or open the Builder Space for Lainey.
2. Connect the GitHub repo to Builder Projects if that workflow is available.
3. Add `BUILDER_PUBLIC_API_KEY` to the local or deployment environment.
4. Add `BUILDER_PRIVATE_KEY` only to server-side secrets if private-model preview or Admin API automation is needed.
5. Create or import the page, section, and data models from `src/builder/model-payloads` and `src/builder/content-payloads`.
