# CODEX TOOL STACK INVENTORY

Audit date: 2026-07-07

## 1. Repo and local access

- Classification: `USE NOW`
- Actual local path used: `C:\ZINE_FACTORY\github\lainey-shopify`
- Current branch during audit: `main`
- Local-only stale branch present: `local-stale-worktree-2026-07-06`
- Remote: `https://github.com/cosmo4u1/lainey-shopify.git`
- `git status` at audit start: clean on `main`
- Build commands verified from `package.json`:
  - `npm install`
  - `npm run build`
  - `npm run qa:scope`
  - `npm run dev`
  - `npm run typecheck`
- Public source folder: `prototype/`
- Deployment mechanism verified: `gh-pages` branch serving [https://cosmo4u1.github.io/lainey-shopify/](https://cosmo4u1.github.io/lainey-shopify/)
- `gh-pages` status available from GitHub repo contents and live URL verification

Why `USE NOW`:
- Local repo is readable and writable.
- Static public source is explicit.
- Build and scope QA both run locally.
- GitHub Pages is the only verified live publish surface from this audit.

## 2. GitHub access

- Classification: `USE NOW`
- Repo plugin authentication: verified by successful GitHub repo reads on `cosmo4u1/lainey-shopify`
- Repo read/write capability: verified by repo metadata permissions showing `admin`, `push`, and `pull`
- Remote branch list verified by GitHub plugin:
  - `main`
  - `gh-pages`
- Local CLI auth (`gh auth status`): `BLOCKED`
- Issue and PR capability in current callable surface: `BLOCKED`
- Pages/deploy status: live site verified by URL and `gh-pages` branch file reads

Why mixed status:
- GitHub plugin is real and usable now.
- Local `gh` CLI is not authenticated, so CLI-based GitHub workflows are not a proof path in this session.
- Current plugin surface did not expose issue or PR tools.

## 3. Shopify access

- Classification: `USE LATER`
- Connected shop info read successfully:
  - Store name: `Cold Coffee Book Club`
  - Domain: `1ev11w-fu.myshopify.com`
  - Plan: `Basic`
  - Currency: `USD`
- Product reads: verified
- Collection reads: verified
- Theme reads: verified
- Draft theme exists: verified
  - `Horizon` (`UNPUBLISHED`)
- Main theme exists: verified
  - `Horizon Homepage Shell Draft` (`MAIN`)
- Draft theme editing path: `REFERENCE ONLY`
  - The connector surface exposes GraphQL mutation capability.
  - No write was executed because this audit phase stayed read-only.
- Media upload path: `REFERENCE ONLY`
  - `upload-image` exists in the callable surface.
  - No upload was executed in this read-only audit.

Why not `USE NOW` for public-site work:
- The store contains mixed-brand and staging material.
- Draft Lainey items include placeholder media.
- Public Shopify linking would expose unfinished or cross-brand store state.

## 4. Design and image tools available to Codex

### Figma

- Classification: `BLOCKED`
- Connector surface exists.
- No Figma file key, node URL, or repo-local design file was available in this audit.

### Canva

- Classification: `BLOCKED`
- Connector surface exists.
- No Canva design file, export artifact, or design URL was available in this audit.

### Adobe Express

- Classification: `BLOCKED`
- Connector surface exists.
- No Express design URN or project asset was available in this audit.

### Builder

- Classification: `REFERENCE ONLY`
- Repo-local Builder runtime/config files exist:
  - `.env.example`
  - `src/builder/*`
  - `docs/BUILDER_IO_CREATOR_LANE.md`
- Remote Builder authoring and publish persistence were not re-verified in this audit.
- Current visible website outcome did not depend on Builder.

### Local assets

- Classification: `BLOCKED`
- Repo-local image/design assets in tracked public source: none
- `prototype/` contains HTML/CSS/JS only
- No Lainey asset folder exists under the tracked repo

### Image-generation outputs / stock / screenshots

- Classification: `DO NOT USE`
- One unrelated Builder-themed image set was found under `C:\Users\Glove\Downloads\GalaGround\...`
- That material is not Lainey and was excluded from use
- No Lainey-named screenshot/design asset was found by filename in the checked screenshot path

### Design artifacts in repo

- Classification: `USE NOW`
- Usable design artifacts were code-based:
  - `prototype/index.html`
  - `prototype/shop.html`
  - `prototype/styles.css`
  - `src/components/StaticContent.tsx`
  - `src/styles/globals.css`

## 5. Hosting and deploy tools

### GitHub Pages

- Classification: `USE NOW`
- Live URL verified
- Public branch verified
- Best current delivery route because it already serves the visible site

### Netlify

- Classification: `BLOCKED`
- No repo config present
- Not used in this execution path

### Vercel

- Classification: `BLOCKED`
- No repo config present
- Not used in this execution path

### Builder hosting/publish path

- Classification: `REFERENCE ONLY`
- Local Builder runtime exists in repo
- Remote Builder publish path not re-verified in this audit

### Shopify theme files in repo

- Classification: `DO NOT USE`
- No Shopify theme codebase is present in this repo
- Store theme work would be connector-driven, not repo-driven

## Stack verdict

The real stack surface is narrower than the earlier platform discussion suggested:

- `USE NOW`: local repo, local shell, GitHub repo plugin, GitHub Pages, in-app browser for preview, Next build/QA, code-based visual system in `prototype/`
- `USE LATER`: Shopify read surface once the catalog/theme state is cleaned and isolated
- `REFERENCE ONLY`: Builder runtime files, Shopify draft-only write surface, Shopify image-upload surface
- `BLOCKED`: local `gh` CLI auth, Figma file access, Canva asset/design access, Adobe Express project access, Netlify/Vercel path for this task
- `DO NOT USE`: unrelated image files, stale local branch, any publish route that exposes placeholder commerce or cross-brand debris
