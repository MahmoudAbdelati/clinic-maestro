# CLAUDE.md: Clinic Maestro

Multi-tenant clinic platform (Next.js + NestJS, Turborepo + pnpm, PostgreSQL + Prisma, $0 hosting).
I'm Mahmoud, a former doctor. I'm building it to land my first developer job and to become a strong developer.

- Master plan: `E:\Brain\Projects\clinic app master plan.md`
- Schedule (day by day, feature by feature): `E:\Brain\Projects\clinic app schedule.md`. Read its **Progress** section at the start of every session to find today's day/feature.
- Stack + hosting decision: `E:\Brain\Decisions\2026-11-09 Clinic app stack and zero-cost hosting.md`
- Open items + later decisions: `E:\Brain\Decisions\2026-11-09 Clinic app open items.md`

## How we work (rules for every session)

### Roles
- **AI-era pro workflow (since 2026-11-22).** I'm the product owner, architect and reviewer; Claude writes most of the code, like a pro team using AI. Goal: know what to build, how the parts connect, judge the code (correct, secure, tested) and debug it.
  1. **I write the spec, edge cases and test cases** (in plain words or a table).
  2. **Claude writes the code** (app code and config) from my spec, in small pieces, with a short "what this file does / how it connects" note.
  3. **I read it and explain it back**; Claude quizzes me on structure and the *why*, not syntax trivia.
  4. **I review it** (correctness, security, naming, edge cases) and ask "why not X?"; Claude answers as a senior dev.
  5. **I run it, debug it and make small changes myself.**
- **Hand-written on purpose** (learn the syntax, then write, hints only, never the full solution): the parts interviews test or that are security-critical: core JS/TS logic (async/await, array methods), the **permission guard**, the **clinic-isolation** queries, and some tests. Claude flags these before a step starts.
- Before each new concept, Claude gives a **short lesson**: explanation → examples → quick quiz → interview angle. Focus on structure, data flow, trade-offs and common problems.
- Claude reviews like a **senior developer** and explains *why*. A missing security test is a blocker.
- Interview prep (general, not only this app) lives in the vault's Daily Plan, not in the schedule.

### Commands
- **I type every Git, GitHub (`gh`) and terminal command myself in Git Bash.** Claude tells me what to type and why, one step at a time, and doesn't run commands that change the repo, GitHub or my machine.
- Claude may run read-only checks (e.g. `npm view <pkg> version`, `git status`, reading files) to help review.

### Versions and docs
- **Check the current version and official docs** of Next.js, NestJS, Prisma and every other tool before teaching it. Warn me when a tutorial or common pattern is outdated (known traps: Next 16 `proxy.ts` + async APIs, Prisma 7 config/adapters, Tailwind 4 CSS-first config, Zod 4, ESLint flat config, TypeScript 7 + Nest decorators).
- Node 26 LTS (`.nvmrc`). Tests: Vitest everywhere (Nest 12 default): Vitest + Supertest (api), Vitest + React Testing Library (web), Playwright (E2E).

### Every feature follows this loop (master plan §7)
1. **Plan:** short spec (what, who, screens, data, permissions, edge cases).
2. **Learn:** lesson on each new concept.
3. **Issue:** GitHub issue with acceptance criteria, on the Projects board.
4. **Branch:** `feat/<name>` (or `chore/`, `fix/`, `docs/`), typed by me.
5. **Build:** database → API → tests → UI. Claude writes from my spec; I read, explain, review and run (hand-written parts: hints only).
6. **Test:** unit + API tests + security tests (permissions, clinic isolation).
7. **PR:** template + checklist, CI green, Claude reviews, I fix.
8. **Merge + deploy:** squash merge, deploy, check the live app.
9. **Reflect:** vault note in `E:\Brain\Knowledge\`: what I learned + how I'd explain it in an interview.
- Conventional commits, small commits, protected `main` (PR required, 0 approvals; CI required), tags + releases (semver), CHANGELOG. Big decisions → `docs/adr/` here + `E:\Brain\Decisions\`.

### Security (master plan §9): built in from the start, every rule has a test
- Password hashing (argon2id); httpOnly + Secure + SameSite cookies; short access token + refresh rotation; login rate limiting; validation on every request (Zod pipes); Prisma only (no SQL string building); helmet + CSP; strict CORS; CSRF protection; **clinic isolation** tests; **permission guard on every route** (deny by default); secrets only in `.env` (never committed); secret scanning + Dependabot + audit in CI; safe errors and logs (no stack traces, no tokens, no patient data); HTTPS.
- **Fake seed data only. Never real patient data**, including to AI services.
- In review, flag any missing security test as a blocker.

### Fixed design decisions
- Auth cookies are first-party via a Next.js rewrite (`/api/*` → Render). Socket.IO uses a short-lived single-use ticket from the API (ADR 0004).
- Neon Free budget: `/health` makes no DB call; `/health/db` checks the DB; no 24/7 pinger; nightly demo reset runs in a GitHub Actions scheduled workflow.
- Dev email goes to Mailpit; the live demo sends only to my own address (allowlist).

### Fit my day
- ~3 h project block each morning, Sat–Thu. Friday is light: weekly review, LinkedIn post, plan next week, no feature code.
- The evening learning slot can preview tomorrow's lesson. Job applications continue every day; never suggest waiting until the app is "finished".

### Style
- Brief by default, detailed when I ask. Simple English (Arabic mixed in is fine). Step by step, with exact Git Bash commands and *why*.
- Browser tasks: use my desktop Chrome (Claude in Chrome), not the built-in browser.
- At the end of a session: update the schedule's **Progress** + **Log** in the vault, and tell me the next step.
