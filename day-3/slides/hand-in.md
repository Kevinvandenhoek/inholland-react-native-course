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
| GitHub Issues | Every task an issue, closed by a commit |
| `chat-history/` | A copy of your Copilot chats from VS Code |
| `docs/toelichting.md` | Max 1 A4, four questions |
| Demo video | Max 3 minutes, link in the README |

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

| Part | Weight | What I look at |
|---|---|---|
| Product | 40% | Does it work, is it finished according to **your own** spec |
| Steering | 20% | Small tasks, context given, your choices |
| Checking | 20% | You read, tested and corrected the output |
| Understanding | 20% | Explanation and video match the code |

A 5.5 needs the technical core complete, everything on the hand-in list
present, and a spec that matches the app.

Optional items are +1 each: animations, dark mode, infinite scroll, clean
TypeScript, pixel perfect, own font, localization, no bugs.

---

# The four questions

`docs/toelichting.md`, max one A4. Short answers.

1. What did you build and for whom?
2. Name two choices in the code and why you made them that way.
3. Where was the agent wrong, how did you notice, and what did you do?
4. Name code from the agent you did not understand at first. How did you work
   it out, and what does it do now?

Question 3 and 4 are worth more than a perfect app with nothing to say about it.

---

# Demo video

Max 3 minutes. Replaces the live demo.

- The app on a real phone.
- Walk through the stories from your spec.
- Explain one piece of code you think matters.

Your voice, your screen. No editing needed.

---

# Chat history

VS Code keeps your Copilot chats on disk. You copy them into `chat-history/`.

A script in the course repo finds the right folder and copies it.
It only copies chats from this project. Nothing else.

The chats are evidence next to your commits and your explanation, not a grade
by themselves. They show how you got there.

---

# Deadline

<!-- Kevin: vul de datum in -->

> ‼️ **Hand in before &lt;date&gt;, 23:59.**

- Push everything to GitHub.
- Send me the repo link in Teams.
- Stuck? Ask in Teams. Before the deadline, not on it.
