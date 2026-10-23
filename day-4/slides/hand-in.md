---
marp: true
theme: default
class: invert
---

# Hand-in
## What, how and when

---

# What you hand in

<style scoped>table { font-size: 0.75em; }</style>

One GitHub repo with:

| Part | What |
|---|---|
| The app | Code that runs in Expo Go |
| `specs/` | `product.md` plus one file per feature: goal, constraints, criteria, out of scope |
| `AGENTS.md` | What you told the agent about your project |
| GitHub Issues | Every feature an issue, the agent's plan and task list as a comment, closed by a commit |
| `chat-history/` | The chat of at least one issue, start to finish, exported from your agent tool |
| `docs/explanation.md` | Three questions |

---

# How it is graded

<style scoped>section { font-size: 25px; } table { font-size: 0.85em; }</style>

**A 6** when the technical core is complete, everything on the hand-in list
is present, and the spec matches the app. Missing any of it: a 5 at most.

**From 6 to 8:**

| Part | Weight | What I look at |
|---|---|---|
| Product | 80% | Does it work, is it finished according to **your own** spec, code quality |
| Steering and checking | 10% | Small tasks, context, plan first, your choices, instructions that grow. You read, tested and corrected the output |
| Understanding | 10% | Explanation matches the code |

Optional items are **+0.5 each, up to a 10**: three Reanimated animations, dark
mode, pagination, clean TypeScript, design,
localization, no warnings, offline, tests, CI, accessibility,
optimistic update. More than you need: you pick.

---

# The three questions

`docs/explanation.md`. One line on top: your route and the agent tools you used. Then short answers, your own words.

1. Your technical choices from `product.md`: file and line. What changed,
   and why.
2. One feature, explained from API call to screen. The files.
3. A suggestion from the agent you rejected or changed. What it suggested,
   what you did instead, why. The chat or the commit.

How you worked with the agent is already in your repo. I read your commits,
your chat and these answers side by side, so they should tell the same story.

Every file and line you name must exist in your repo.

---

# Deadline

> ‼️ **Hand in before Friday 6 November 2026, 23:59.**

- Push everything to GitHub.
- Send me the repo link in Teams. Key or login: the `.env` and a test account in the same message.
- I clone it, add your `.env`, run `npx expo start` and scan the QR code. Check that it starts on a clean install.
- Stuck? Don't hesitate to ask for help in Teams.

---

# Work time

Until the end of class:

- **Go for your idea, or a starter idea?** Build your app. Next issue, new chat.
- **Own idea, no go yet?** Finish `specs/product.md`, post it in Teams, and ask me.
