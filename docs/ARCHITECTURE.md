# Architecture

Chosen lane: Builder page rendering through a Next.js support app.

Implemented in code:

- Builder SDK initialization through environment variables
- Route-based Builder page lookup for `/`, `/essays`, `/reading-lists`, `/about`, and `/contact`
- Static fallback rendering when Builder keys or matching content are absent
- Preview-request detection with explicit fallback notice

Still account-dependent:

- Builder Space setup
- Builder page entries for the five routes
- Preview URL setup
- Any private-key-backed Builder automation

GitHub stores the code and setup docs. Shopify remains a future backend connection only.
