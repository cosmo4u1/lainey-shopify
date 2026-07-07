# CONNECTOR CONNECTION AUDIT

Audit date: 2026-07-07

Evidence sources in this audit:

- GitHub repo plugin reads
- Shopify read-only connector reads
- Google Drive connector reads
- Notion connector reads
- Gmail connector reads
- Google Calendar connector reads
- OpenAI Platform connector response
- local shell and git
- in-app browser history already verified in this session for Builder

## Status key

- `USE NOW`: connected and useful for Lainey work now
- `USE LATER`: connected or likely usable, but not the best active path right now
- `BLOCKED`: available in the environment, but not usable without auth, a file, or owner action
- `IRRELEVANT`: available, but not useful for this Lainey task
- `DO NOT USE`: explicitly excluded by directive or unsafe for this lane

## Connector table

| Tool | Available | Authenticated | Connected to | What it can do | What is blocked | Owner action needed | Lainey role | Status |
|---|---|---|---|---|---|---|---|---|
| GitHub | Yes | Yes | `cosmo4u1/lainey-shopify` | Repo read/write, branches, Pages, commits | No issues/PR tools in this surface | None | Source truth and publish control | `USE NOW` |
| Builder | Yes | Partly verified in browser | Builder account/project wizard reached earlier; repo handoff did not persist | Create/import pages, visual layout, browser-based auth flow | Persistence after GitHub OAuth and manual setup failed | Reopen Builder, sign in, finish the project wizard, and confirm repo handoff | Primary visual builder if it can be made to persist | `BLOCKED` |
| Figma | Yes | Not verified | No file URL or editable file in this session | Design files, mockups, spec handoff | No Lainey file key or edit access | Create or share an editable Figma file URL with node IDs | Visual mockup lane | `BLOCKED` |
| Canva | Yes | Not verified | No design file in this session | Landing-page mockups, moodboards, exportable visuals | No imported design or design file | Share or create a Canva design file for Lainey | Fast visual asset lane | `BLOCKED` |
| Adobe Express | Yes | Not verified | No project URN in this session | Visual assets, banners, editorial layouts | No verified design project | Open Express, create/share a design URN | Asset and banner lane | `BLOCKED` |
| Adobe Photoshop | Yes | Not verified | No image input in this session | Image cleanup, crop, grade, background edit | No source image to edit | Upload a real image first | Image polishing lane | `USE LATER` |
| Adobe Acrobat | Yes | Not verified | No PDF asset in this session | PDF view, extract, edit, reorganize | No PDF work to do | None unless PDF docs appear | Irrelevant for current site work | `IRRELEVANT` |
| Google Drive | Yes | Yes | `Chad glover <cosmo4u@zine01.com>` | Profile, folders, file upload, drive list | No shared drives surfaced; no Lainey files verified | None required now | Possible asset vault | `USE LATER` |
| Notion | Yes | Yes | `Zine01Collective’s Space HQ` | Workspace teams/users, page fetch, comments, duplication | No Lainey pages or databases verified | None required now | Possible doc/brief store | `USE LATER` |
| Shopify | Yes | Yes | `Cold Coffee Book Club` at `1ev11w-fu.myshopify.com` | Read store info, products, collections, themes | Writes and theme publishing are out of scope for this lane | None for read-only truth | Commerce truth only | `USE NOW` |
| Printify | No visible connector in this session | No verified auth | None | Not verified | Session-token path is banned; no public connector surfaced | None; do not use this path | Excluded | `DO NOT USE` |
| Etsy | Yes | Not verified | No active search/discovery flow used | Listing display groups only in this surface | No search/read workflow verified here | None for this task | Not relevant to Lainey site work | `IRRELEVANT` |
| Gmail | Yes | Yes | `Chad glover <cosmo4u@zine01.com>` | Search/read/draft/archive/trash | No project mail surfaced yet | None required now | Possible approval or asset source | `USE LATER` |
| Google Calendar | Yes | Yes | `Chad glover <cosmo4u@zine01.com>` | Read events, availability, colors, invitations | No Lainey scheduling need yet | None required now | Coordination only | `USE LATER` |
| OpenAI Platform | Yes | Not currently usable | OpenAI Platform connector session | API key target list and key setup | Reauthentication required before any action | Reauth the connector, then rerun the target picker | Key setup only if needed | `BLOCKED` |
| Sites | Yes | Not used | No `.openai/hosting.json` in repo | Site creation, versioning, deployment | No Sites project config exists in this repo | None | Not the active path here | `IRRELEVANT` |
| In-app browser | Yes | Yes | Current visible browser session | Read browser state, verify live pages, browser-based auth | Not a design surface itself | None | Auth and visual verification surface | `USE NOW` |
| Local shell/git | Yes | Yes | `C:\ZINE_FACTORY\github\lainey-shopify` | Edit files, run build/QA, commit, push | Not a visual builder | None | Implementation and source control | `USE NOW` |
| Image generation tool | Yes | Yes | This chat session | Generate temporary images and mockups | Not real photography; not final public proof | Use only if a temporary mockup is needed | Temporary asset helper | `USE LATER` |

## Connector takeaways

- GitHub, Shopify read-only, Google Drive, Notion, Gmail, Calendar, shell, and the in-app browser are the only clearly usable lanes in this session.
- Builder is the only visual-builder lane that has a meaningful chance to improve the site outcome, but it is still blocked by persistence and handoff problems.
- Figma, Canva, and Adobe are surfaced, but no editable Lainey project or file was verified in this session.
- OpenAI Platform is blocked by reauthentication.
- Printify is excluded.

## Exact blocker summary

- Builder: browser sign-in happened earlier in the session, but the repo/project handoff did not persist cleanly.
- Figma/Canva/Adobe: no verified editable Lainey file or project was connected.
- OpenAI Platform: connector requires reauthentication before any action can succeed.
- Sites: no project config exists in this repo, so it is not the active deployment path.
