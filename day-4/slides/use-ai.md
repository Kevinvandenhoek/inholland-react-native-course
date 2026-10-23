---
marp: true
theme: default
class: invert
---

# Use of AI
## Disruptive or supporting?

![bg right fit](../assets/ai-intro.png)

---

# Your first issue

You just built a feature with an agent.

## What did it get wrong?

---

# Knowledge, not context

The agent knows the Share API by heart. Exercise 4B, day 3: did it know
**your** rules? A hex color instead of your token. A `TouchableOpacity`
instead of `Pressable`. No error handling when sharing fails.

Not because it does not know better. Because nobody told it.

Your context is `AGENTS.md`, your specs and your issues. That is what you wrote
today.

---

# Ask for understanding

❌ *"How do I fix the Bag tab not updating?"*

✅ *"What could cause a TanStack Query list to not refresh after a mutation? List the causes, then check which one applies here."*

First ask **what plays a role**. Then ask for a solution.

A 2026 study: people who asked the AI to explain kept learning. People who let
it do all the work understood less and debugged worse.
[How AI Impacts Skill Formation](https://arxiv.org/abs/2601.20245)

---

# Who uses AI for something other than coding or homework?

---

# Beyond code: what AI is good at

- **Summarize**: a pile of house documents → the few things that matter.
- **Explain**: a client document or a new term, in plain words, at my level.
- **Check**: a heat pump quote → what is missing, what is unusual.
- **Structure**: a photo of a receipt → amounts and categories.
- **Play a role**: a client to interview, a tutor that quizzes me.

Which of these could your app use?

---

# Where it hurts

![bg right fit](../assets/ai-debug.png)

- **Confidently wrong**: it never says when it does not know.
- **Bad data**: what it learned can be wrong or one-sided.
- **Cognitive debt**: code that nobody in the room understands.
- **Debugging** code you did not write or read: the slowest work there is.

This is true everywhere, not only in code.

---

# Poll
## Will AI replace developers?

![bg right w:400](../assets/qr-ai-replace.png)

---

# What gets cheap, what stays scarce

| Gets cheap | Stays scarce |
|---|---|
| writing code | knowing what to build, and why |
| a first design | taste and creativity |
| a first version | judging if it is right |
| doing more with fewer people | keeping it secure and running |

---

# The thesis of this course

> # _"The agent writes the code. You decide what is worth building."_

Everything in your repo is yours to explain and defend. That is also how this
course grades you. Next: the hand-in.
