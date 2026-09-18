---
marp: true
theme: default
class: invert
---

# Spec Driven Development
## You write the spec. The agent writes the code.

---

![bg fit](../../day-0/assets/sdd-flow.svg)

---

# Why a spec

The agent has read more code than you ever will. It still does not know:

- what your app is for
- who uses it
- what "done" means for this feature

That is the part you supply. A lot of knowledge, slightly less intelligence.

**No spec means the agent guesses. It guesses confidently.**

---

# What a spec is

One file: `specs/product.md`.

It says **what** the app does and **why**. Not how.

- Goal: one paragraph.
- User stories: 3 to 6, each with acceptance criteria.
- Data: which API, which endpoints, what you store locally.
- Out of scope: what you are deliberately not building.

Out of scope is the most useful section. It is the one the agent will not invent.

---

# User story

> As a **user** I can **search Pokémon by name** so that **I find one without scrolling**.

Acceptance criteria:

- The list screen has a search field at the top.
- Typing filters the list while I type.
- No results shows "No Pokémon found".
- Clearing the field shows the full list again.

Criteria are how you and the agent both know when it is done.

---

# Vague versus sharp

<style scoped>table { font-size: 0.8em; }</style>

| Vague | Sharp |
|---|---|
| "Nice looking detail page" | "Detail shows name, number, artwork and types, each type in its own colour" |
| "Save favorites" | "A heart on the detail screen adds to SQLite, the Favorites tab shows them, still there after restart" |
| "Handle errors" | "Failed load shows the message and a Retry button that refetches" |
| "Make it fast" | "List loads 50 at a time and loads more on scroll" |

If you cannot tick it off, the agent cannot build it.

---

# Example: Pokédex spec

```markdown
# Pokédex

Browse Pokémon from PokeAPI and keep a list of favorites on the phone.

## Stories

### 1. Browse the list
As a user I see a list of Pokémon with artwork and name.
- [ ] Loaded from `/pokemon?limit=151`, 50 at a time
- [ ] Loading state and error state with retry

### 2. Search by name
...

## Data
PokeAPI. Favorites in SQLite (`favorites` table: id, name, created_at).

## Out of scope
Accounts, battles, offline caching of the whole list.
```

---

# Let the agent grill you

Your spec has holes you cannot see. Ask mode, spec open:

> *Read my spec. Do not build anything. Ask me the questions you would need
> answered before you could build story 1 without guessing. One at a time.*

- Every answer goes **into the spec**, not just into the chat.
- A question you cannot answer is a decision you have not made. Make it, or
  move it to out of scope.
- Stop when the questions get smaller than your criteria.

---

# From story to issue

Every story becomes one GitHub issue.

- Title = the story.
- Body = the acceptance criteria as a checklist.
- One issue is one afternoon at most. Bigger? Split it.

Issues are not admin. They are how you keep the agent on one thing at a time,
and how you prove afterwards what you did yourself.

---

# New chat per issue

One issue, one chat. Always.

- **The agent starts clean.** No leftovers from the last issue steering it.
- **Your history stays sorted.** One chat per issue means you, and I, can read
  back afterwards how each piece was built.

A chat that drifts to a second issue: stop, commit, new chat.

---

# One issue at a time

A prompt that works:

> Implement issue #3. The spec is in `specs/product.md`, section "Search by name".
> The list screen is `app/(tabs)/index.tsx`. Follow `.github/copilot-instructions.md`.
> Only touch the list screen and its components.

Three things in there: **what**, **where the context is**, **what not to touch**.

---

# Then you review

The agent is done. You are not.

1. Read the diff, line by line.
2. Check it against the acceptance criteria. All of them.
3. Lint and tsc.
4. Run it on your phone.
5. Ask until you can explain it.
6. Update your instructions with what you had to correct.

Anything you cannot explain does not get committed.

---

# Commit closes the issue

```bash
git commit -m "Add search to the Pokémon list, closes #3"
git push
```

GitHub closes issue #3 and links it to the commit.

That link is half your grade for the way you work: the issue says what was
planned, the commit says what happened, the chat says how it got there.

---

# The loop

**spec → issue → new chat → prompt → review → ask → update instructions → commit → next issue**

Same loop tomorrow, same loop in three weeks, same loop at work.

---

# Exercise 2

Write `specs/product.md`. Let the agent grill you, answers go into the spec.
Turn every story into an issue.

Then swap with your neighbour: they read your spec and ask you two questions.

If they have to ask what something means, the agent would have guessed.
