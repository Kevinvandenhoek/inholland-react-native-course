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
| `specs/product.md` | Goal, 3 to 6 stories with acceptance criteria, API and data |
| `.github/copilot-instructions.md` | What you told the agent about your project |
| GitHub Issues | Every task an issue, the agent's plan as a comment, closed by a commit |
| `chat-history/` | A copy of your Copilot chats from VS Code |
| `docs/toelichting.md` | Max 2 pages, six questions |

Full git history. No squash, no force-push, no fresh repo at the end.

---

# Technical core

Required for every product, whichever route you picked.

- Runs in Expo Go via QR code
- Live data from a public API through TanStack Query, no login or key
- At least 2 screens with Expo Router
- Something stored in SQLite that survives a restart
- Loading state and error state on every load
- At least 1 native feature (Share, haptics, camera, notifications)
- TypeScript and ESLint without errors
- A structure where UI, data and logic are not mixed

Starter ideas have their own list on top of this. See the README.

---

# How it is graded

<style scoped>table { font-size: 0.85em; }</style>

**A 6** when the technical core is complete, everything on the hand-in list
is present, and the spec matches the app. Missing any of it: a 5 at most.

**From 6 to 8:**

| Part | Weight | What I look at |
|---|---|---|
| Product | 60% | Does it work, is it finished according to **your own** spec |
| Steering | 15% | Small tasks, context, your choices, instructions that grow |
| Checking | 15% | You read, tested and corrected the output |
| Understanding | 10% | Explanation matches the code |

Optional items are **+0.5 each, up to a 10**: three Reanimated animations, dark
mode, infinite scroll, clean TypeScript, pixel perfect, own font,
localization, no bugs.

---

# The six questions

<style scoped>ol { font-size: 0.85em; }</style>

`docs/toelichting.md`, max two pages. Short answers, your own words.

1. What did you build and for whom?
2. How did you cut the work into small tasks? Point at your issues.
3. Two choices in the code you made yourself, and why. File and line.
4. One prompt that did not work in one go. What went wrong, how did you
   notice, what did you do? Chat session and commit.
5. What did you change in `copilot-instructions.md`, and why?
6. Code from the agent you did not understand at first. How did you work it
   out, what does it do now? File and line.

Every reference must exist in your repo. I read this next to your code.

---

# Evidence

Three things I read side by side:

- **Commits**: the full history, including the commits on `copilot-instructions.md`.
- **Chats**: VS Code keeps them on disk. A script in the course repo copies
  only this project's chats into `chat-history/`. One chat per issue makes
  this readable.
- **Explanation**: your six answers.

They have to tell the same story. None of them is a grade by itself.

---

# Deadline

<!-- Kevin: vul de datum in -->

> ‼️ **Hand in before &lt;date&gt;, 23:59.**

- Push everything to GitHub.
- Send me the repo link in Teams.
- Stuck? Ask in Teams. Before the deadline, not on it.
