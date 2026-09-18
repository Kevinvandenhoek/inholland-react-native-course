# Exercise 2: your spec and your issues

### Objective
Write down what you are building, before anyone builds it. Then cut it into
issues you can finish one at a time.

### Requirements

1. `specs/product.md` in your repo, filled in from the template.
2. The agent asked you questions about the spec, and the answers are in the spec.
3. Every story is a GitHub issue with its acceptance criteria as a checklist.
4. Your neighbour read your spec and asked you two questions.

### Steps to Complete

#### 1. Fill in the spec (15 min)

Copy [the template](../templates/product.md) to `specs/product.md`.

- **Goal and core action.** One paragraph, one sentence. If you cannot name the
  core action, the app is two apps.
- **Stories.** Three to six. Not more. Each one: "As a user I can ... so that ...".
- **Criteria.** Per story, three to five things that can be ticked off. What is
  on screen, what happens when you press, where the data comes from, what a
  failure looks like.
- **Data.** Which API, which endpoints, what goes into SQLite.
- **Out of scope.** Write this one. It is what keeps the agent from inventing.

Starter idea? Take the list from appendix A or B in the
[README](../README.md) and turn each item into a story with criteria.
Copying the list is fine. Rewriting it as stories is the exercise.

The technical core checklist is in the template. Leave it in, tick it off as
you go.

#### 2. Let the agent grill you (10 min)

Your spec has holes you cannot see. The agent can. Open `specs/product.md`
and ask, in Ask mode:

> Read my spec. Do not build anything. Ask me the questions you would need
> answered before you could build story 1 without guessing. One question at a
> time, wait for my answer.

Answer each question. Every answer goes **into the spec**, not just into the
chat. Stop when the questions get smaller than your criteria. Five rounds is
usually enough.

A question you cannot answer is a decision you have not made yet. Make it now,
or move it to "Out of scope".

#### 3. Turn stories into issues (10 min)

One story, one issue.

- Title = the story, in plain words: "Search Pokémon by name".
- Body = the acceptance criteria, as `- [ ]` checkboxes.
- Nothing else. No implementation plan. That is the agent's job.

```bash
gh issue create --title "Search Pokémon by name" --body-file -
```

Or click New issue on github.com. Both fine.

An issue that takes more than an afternoon is two issues. Split it.

> **📚 Reference:** [Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)

#### 4. Peer review (10 min)

Swap with your neighbour. Read their spec. Ask **two** questions about things
you cannot answer from the text alone.

Good questions:
- "What happens when the API is down?"
- "Where does this get saved, and what happens on restart?"
- "How do I know when story 3 is finished?"

If your neighbour has to explain it out loud, the agent would have guessed.
Write the answer into the spec.

#### 5. Commit (5 min)

```bash
git add specs/
git commit -m "Add product spec"
git push
```

### Done when

- ✅ `specs/product.md` with goal, core action, 3 to 6 stories with criteria, data, out of scope
- ✅ The agent's questions answered, in the spec
- ✅ Every story is a GitHub issue with a criteria checklist
- ✅ Two questions from your neighbour answered, in the spec
- ✅ Spec committed and pushed
