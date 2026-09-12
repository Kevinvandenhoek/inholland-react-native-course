# Exercise 3: your first story with the agent

### Objective
One issue, from prompt to closed. The full loop: context, build, review, test,
ask, commit. This is the loop you repeat until the deadline.

### Requirements

1. One issue implemented by the agent, reviewed by you.
2. Lint and tsc clean, the feature works on your phone.
3. A commit that closes the issue.
4. Your answers to the follow-up questions in `docs/day-3.md`.

### Steps to Complete

#### 1. Pick an issue (2 min)

The smallest one that produces something visible. Not the hardest. You want
to run the loop, not win at it.

#### 2. Prompt with context (5 min)

Agent mode. Open the files it needs, so they are in context.

> Implement issue #1. The spec is in `specs/product.md`, section "Browse the list".
> Follow `.github/copilot-instructions.md`. Only touch the list screen and the
> components it uses. Ask me before adding a dependency.

Three things in that prompt: **what** to build, **where the context is**, and
**what not to touch**. Leave out any one of them and you get surprises.

#### 3. Watch it work (5 min)

It reads files, proposes edits, may want to run commands. Read what it is
doing while it does it. Do not accept yet.

#### 4. Review the diff (10 min)

Line by line. Every changed file.

- Does it meet **every** acceptance criterion from the issue? Tick them off.
- Did it add something you did not ask for? A dependency, a refactor, a file?
- Does it follow your instructions? Structure, tokens, loading and error states.
- What would you have done differently?

Something wrong? Say so in the same chat and let it fix it. You can also just
fix it yourself. Both are fine, neither is optional.

#### 5. Check it yourself (5 min)

```bash
npx eslint .
npx tsc --noEmit
```

Then run it on your phone. Green checks are not a working app.
Test the error state too: turn on airplane mode.

#### 6. Ask until you understand it (10 min)

The last step of every agent task. Ask three questions about what it built:

- Why this approach and not <the other one>?
- What happens when this fails? Where is that handled?
- Which part of this would break first if the API changed?

Write the answers **in your own words** in `docs/day-3.md`. Not a copy of the
chat. If you cannot write it down, you do not understand it yet. Ask again.

#### 7. Commit and close (3 min)

```bash
git add .
git commit -m "Add the Pokémon list screen, closes #1"
git push
```

GitHub closes the issue and links it to your commit. Check that it did.

#### 8. Next issue

Same loop. That is the rest of the assignment.

### Done when

- ✅ One issue closed by a commit
- ✅ The feature works on your phone, including the error state
- ✅ Lint and tsc clean
- ✅ You can explain every line that was added
- ✅ `docs/day-3.md` with three answers in your own words
