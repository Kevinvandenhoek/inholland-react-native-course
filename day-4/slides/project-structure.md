---
marp: true
theme: default
class: invert
---

# Project Structure
## The agent picks folders. You pick the rule.

---

# The rule that actually matters

**UI, data and logic do not live in the same file.**

- A screen renders. It does not fetch and it does not write SQL.
- A hook gets data. It does not render.
- A service talks to the API or the database. It knows nothing about screens.

Whatever you name the folders, that separation is what gets graded.

---

# Tell the agent

Your structure only exists if the agent knows about it.

```markdown
- Screens live in `src/app/`, reusable UI in `src/components/`,
  API and database code in `src/services/`, hooks in `src/hooks/`.
- Do not put fetch calls in screens.
```

That goes in `AGENTS.md`. You wrote a first version on day 3.

