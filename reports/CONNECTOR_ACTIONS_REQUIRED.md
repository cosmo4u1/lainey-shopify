# CONNECTOR ACTIONS REQUIRED

Audit date: 2026-07-07

This file only lists useful tools that are not yet ready for clean Lainey use, plus the exact owner action that would move them forward.

## 1. Builder

- Why it matters: It is the only named visual builder here that could replace another round of hand-built page work with a real visual page surface.
- Exact owner action: Reopen `https://builder.io/app/projects`, sign in, and finish the project setup wizard for Lainey.
- Exact blocker seen in this session: the prior GitHub OAuth callback and manual setup flow did not leave a persistent connected repo/project state.
- What Codex will do after connection: create or import the Lainey homepage and shop preview, verify visual output, and record the preview URL or export path.

## 2. Figma

- Why it matters: It can hold the homepage, shop mockup, and responsive states as an editable design before implementation.
- Exact owner action: Create or share an editable Figma file URL with a node id, then hand that URL to Codex.
- Exact blocker seen in this session: no editable Lainey file key or node id was verified.
- What Codex will do after connection: pull the design context, capture screenshots/specs, and move the result into implementation only after visual approval.

## 3. Canva

- Why it matters: It can produce exportable visual panels, moodboards, and quick landing-page mockups.
- Exact owner action: Create or share a Canva design file for Lainey.
- Exact blocker seen in this session: no design file or importable asset was connected.
- What Codex will do after connection: import the design, create or edit visual assets, and export usable imagery for the site.

## 4. Adobe Express

- Why it matters: It can generate fast visual sections, hero banners, and editorial graphics.
- Exact owner action: Open Express and create/share the Lainey design URN.
- Exact blocker seen in this session: no Express project was connected.
- What Codex will do after connection: edit the project, export assets, and use them as site visuals.

## 5. Adobe Photoshop

- Why it matters: It is the right lane for cleaning or grading real photography.
- Exact owner action: Provide real source images first.
- Exact blocker seen in this session: there is no Lainey image asset ready for image work.
- What Codex will do after connection: crop, clean, grade, and export the image set for the site.

## 6. OpenAI Platform

- Why it matters: It is only relevant if this project needs a managed OpenAI API key.
- Exact owner action: Reauthenticate the connector, then rerun the API key target picker.
- Exact blocker seen in this session: the connector returned `REAUTHENTICATION_REQUIRED`.
- What Codex will do after connection: finish the secure key setup flow only if the project genuinely needs it.

## 7. Google Drive

- Why it matters: It is a sensible place to park Lainey source images or docs if assets are added later.
- Exact owner action: None required right now.
- Current status: connected to `Chad glover <cosmo4u@zine01.com>`, but no Lainey files were verified.
- What Codex will do after files appear: fetch metadata, copy assets into the safe local workflow, and track provenance.

## 8. Notion

- Why it matters: It can hold brief-style project notes if the workspace gets Lainey docs.
- Exact owner action: None required right now.
- Current status: connected to `Zine01Collective’s Space HQ`, but no Lainey pages or databases were verified.
- What Codex will do after pages appear: fetch them, extract the brief, and use them as source truth.

## 9. Shopify read-only

- Why it matters: It is the commerce truth source and the only safe way to inspect the store without changing it.
- Exact owner action: None for read-only use.
- Current status: connected to `Cold Coffee Book Club`.
- What Codex will do now: keep using it only for product, collection, and theme truth.

## 10. Gmail and Calendar

- Why they matter: They can surface approvals, assets, and scheduling if the project starts moving through mail or calendar.
- Exact owner action: None required now.
- Current status: both are connected to the same Google account.
- What Codex will do if needed: search mail or calendar only when there is a concrete project reason.

## 11. Printify

- Why it matters: It does not, for this lane.
- Exact owner action: None.
- Current status: no visible usable connector in this session, and the banned session-token path stays excluded.
- What Codex will do: nothing.

## 12. Etsy

- Why it matters: It could be used for market reference only if a real search surface appears.
- Exact owner action: None right now.
- Current status: no useful search/read path was used in this session.
- What Codex will do: ignore it unless a direct project need appears.

## 13. In-app browser

- Why it matters: It is the only verified way to inspect live visual state and browser-based auth flows.
- Exact owner action: None.
- Current status: usable now.
- What Codex will do: keep using it for proof, not as a design surface.

## 14. Local shell and git

- Why it matters: It is the implementation and publishing path after any visual tool work.
- Exact owner action: None.
- Current status: usable now.
- What Codex will do: edit files, run build/QA, commit, and push when a real change exists.

## Immediate next move

The only useful blocker to clear first is Builder persistence. If Builder still cannot keep a connected project state, the rest of the visual-builder lanes should stay secondary.
