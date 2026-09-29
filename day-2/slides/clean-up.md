---
marp: true
theme: default
class: invert
---

# Clean up
## First build, then clean up

---

# Lint and types

```bash
npx expo lint          # ESLint: style, unused imports, hook rules
npx tsc --noEmit       # TypeScript: does every type line up?
```

- Lint and types show you what to clean.
- TypeScript is in the template. ESLint: the first `npx expo lint` sets it up.
- Both must be **zero** for the final assignment.
- After this exercise: run both before every commit.
- Message you do not understand? Paste it in Copilot Chat: *"what does this mean and why does it happen here?"* Then fix it yourself.

---

# Next: exercise 2

**Clean up.** `npx expo lint` and `npx tsc --noEmit`, every message gone. Also in the code you just wrote.

`day-2/exercises/exercise-2-lint-and-types.md`

Then a break.
