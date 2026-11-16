## What and why

<!-- One or two sentences. What changes, and why? -->

Closes #

## How to test

<!-- Steps a reviewer can follow to check this works. -->

1. 
2. 

## Checklist

### Basics
- [ ] PR title follows conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `ci:`)
- [ ] Small and focused: one issue, one idea
- [ ] Self-reviewed the diff (no debug logs, no commented-out code)

### Tests
- [ ] Unit tests added or updated
- [ ] API tests added or updated (if the API changed)
- [ ] All tests pass locally

### Security
- [ ] Every new route has a permission guard (deny by default)
- [ ] Clinic isolation test: a user can't read or change another clinic's data
- [ ] All input is validated (Zod)
- [ ] No secrets, tokens or real patient data in code, logs, tests or screenshots
- [ ] Errors are safe (no stack traces or internal details sent to the client)

### UI (skip if no UI change)
- [ ] i18n: all user-facing text comes from translation files; Arabic (RTL) layout checked
- [ ] a11y: keyboard works, inputs have labels, focus is visible, color contrast is OK
- [ ] Works on mobile width
- [ ] Screenshots or a short GIF below

### Docs
- [ ] README, ADR or docs updated if behavior or setup changed

## Screenshots

<!-- Before / after. Fake data only. -->
