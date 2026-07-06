# Touchless Operations

Builder edits pages once the Builder Space, route entries, and keys are connected. Codex maintains the rendering app, QA, deployment glue, and repo docs.

GitHub stores source. Deployment runs from the repo. Secrets stay only in the deployment provider or local secret manager, never in Git.

Owner only authorizes account connections once:

- Builder
- GitHub
- deployment host
- future Shopify storefront token
