# Exercise 2: your spec and your issues

### Objective
Write down what you are building, before anyone builds it. One file for the
product, one file per feature. Then turn every feature into an issue you can
finish in one go.

### Requirements

1. `specs/product.md` in your repo, filled in from the template.
2. `specs/features/<name>.md` for every feature, 3 to 6 files, from the template.
3. The agent asked you questions about the specs, and the answers are in the specs.
4. Every feature is a GitHub issue with its acceptance criteria as a checklist.

### Steps to Complete

#### 1. The product spec (10 min)

Copy [the template](../../exam/templates/product.md) to `specs/product.md`. See the [example](../../exam/templates/product-example.md) for how it looks when it is filled in.

**Own idea?** Start from your idea note. The name, core action, features and
data go under the same headings. Your native feature becomes a line under
technical choices. Then add what the note did not have: endpoints, technical
choices, out of scope.

**No go for your own idea yet?** Post `specs/product.md` in Teams as soon as
it is done, and tell me. I give the go today, in class. After today I may
need more time to reply, so keep a starter idea as a backup.

- **Goal and core action.** One paragraph, one sentence. If you cannot name the
  core action, the app is two apps.
- **Features.** Three to six names. Not more. Each one gets its own file in
  step 2.
- **Data.** Which API, which endpoints, what goes into SQLite.
- **Technical choices.** The assignment says what the app does, not how. For
  every open point, one line: what you picked, the alternative, and why.
  Not sure yet? Ask the agent for two options with their downsides, then pick
  one yourself.
- **Out of scope.** What the whole app does not do.

The technical core checklist is in the template. Leave it in, tick it off as
you go.

#### 2. One file per feature (12 min)

Copy [the template](../../exam/templates/feature.md) to `specs/features/<name>.md`
for every feature. Same four headings as in Dan's lessons:

- **Goal.** What can the user do when this is done, and why. Two sentences.
- **Constraints.** Which screen, which data, what to reuse, what not to add.
  This is what the agent cannot see on its own.
- **Acceptance Criteria.** Three to six things that can be ticked off. What is
  on screen, what happens when you press, what a failure looks like.
- **Out of Scope.** What this feature does not do. It is what keeps the agent
  from inventing.

Starter idea? Take the list from appendix A or B in the
[final assignment](../../exam/README.md) and give each heading its own file. Copying the list is
fine. Turning each item into criteria is the exercise.

#### 3. Let the agent grill you (8 min)

Your specs have holes you cannot see. The agent can. Open `specs/` and ask,
in Ask mode:

> Read `specs/product.md` and every file in `specs/features/`. Do not build
> anything. Ask me the questions you would need answered before you could
> build the first feature without guessing. One question at a time, wait for
> my answer.

Answer each question. Every answer goes **into the spec**, not just into the
chat. Stop when the questions get smaller than your criteria. Five rounds is
usually enough.

A question you cannot answer is a decision you have not made yet. Make it now,
or move it to "Out of Scope".

#### 4. Turn features into issues (3 min)

One feature, one issue. Let the agent create them, in Agent mode:

> For every file in `specs/features/`, create one GitHub issue with
> `gh issue create`. Title: the feature, in plain words. Body: a link to the
> file, then its acceptance criteria as `- [ ]` checkboxes. Nothing else.

Then open the issues on GitHub and check them. No implementation plan in
there: that comes later, from the agent, per issue.

An issue that takes more than an afternoon is two features. Split the file.

> **📚 Reference:** [Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)

#### 5. Commit (2 min)

```bash
git add specs/
git commit -m "Add product and feature specs"
git push
```

### Done when

- ✅ `specs/product.md` with goal, core action, feature list, data, technical choices, out of scope
- ✅ One file per feature in `specs/features/`, with goal, constraints, criteria, out of scope
- ✅ The agent's questions answered, in the specs
- ✅ Every feature is a GitHub issue with a criteria checklist
- ✅ Specs committed and pushed
