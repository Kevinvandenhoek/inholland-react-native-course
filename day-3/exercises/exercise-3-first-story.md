# Exercise 3: your first story with the agent

### Objective
One issue, from prompt to closed. The full loop: context, plan, build, review, test,
ask, update your instructions, commit. This is the loop you repeat until the
deadline.

### Requirements

1. The agent's plan as a comment on the issue, approved by you before any code.
2. One issue implemented by the agent, reviewed by you.
3. Lint and tsc clean, the feature works on your phone.
4. A commit that closes the issue.
5. Your answers to the follow-up questions in `docs/day-3.md`.
6. At least one new rule in `.github/copilot-instructions.md`, or a note in
   `docs/day-3.md` why nothing needed to change.

### Steps to Complete

#### 1. New chat, pick an issue (2 min)

**Start a new chat.** One issue, one chat, always. Two reasons:

- The agent starts clean. No leftovers from the last issue steering it.
- Your chat history ends up sorted per issue. Afterwards you (and I) can read
  back how each piece was built.

Then pick an issue. The smallest one that produces something visible. Not the
hardest. You want to run the loop, not win at it.

#### 2. Prompt with context (5 min)

Agent mode. Open the files it needs, so they are in context.

> Implement issue #1. The spec is in `specs/product.md`, section "Browse the list".
> Follow `.github/copilot-instructions.md`. Only touch the list screen and the
> components it uses. Ask me before adding a dependency.

Three things in that prompt: **what** to build, **where the context is**, and
**what not to touch**. Leave out any one of them and you get surprises.

#### 3. Plan first (5 min)

Your instructions tell the agent to plan before it codes, and to post that
plan as a comment on the issue. It will ask to run `gh issue comment`. Allow
it. Starts coding straight away? Stop it and point at the rule.

Open the issue on GitHub and read the plan against the criteria:

- Does it cover **every** criterion? Nothing more?
- Does it stay inside the files you named?
- Does it want a dependency you did not ask for?

Wrong or vague? Say so in the chat. It updates the comment. Right? Say "go".
Fixing a plan costs three lines. Fixing the code it would have written costs
your afternoon.

#### 4. Watch it work (3 min)

It reads files, proposes edits, may want to run commands. Read what it is
doing while it does it. Do not accept yet.

#### 5. Review the diff (10 min)

Line by line. Every changed file.

- Does it meet **every** acceptance criterion from the issue? Tick them off.
- Did it add something you did not ask for? A dependency, a refactor, a file?
- Does it follow your instructions? Structure, tokens, loading and error states.
- What would you have done differently?

Something wrong? Say so in the same chat and let it fix it. You can also just
fix it yourself. Both are fine, neither is optional.

#### 6. Check it yourself (5 min)

```bash
npx eslint .
npx tsc --noEmit
```

Then run it on your phone. Green checks are not a working app.
Test the error state too: turn on airplane mode.

#### 7. Ask until you understand it (10 min)

The last step of every agent task. Ask three questions about what it built:

- Why this approach and not <the other one>?
- What happens when this fails? Where is that handled?
- Which part of this would break first if the API changed?

Write the answers **in your own words** in `docs/day-3.md`. Not a copy of the
chat. If you cannot write it down, you do not understand it yet. Ask again.

#### 8. Update your instructions (3 min)

Did you correct the agent in step 3 or 5? Explain something it could have known?
That becomes a line in `.github/copilot-instructions.md`. One rule per
finding, as short as it can be.

Nothing to correct this time? Write one line in `docs/day-3.md` saying so.
Most issues will give you something.

#### 9. Commit and close (3 min)

```bash
git add .
git commit -m "Add the Pokémon list screen, closes #1"
git push
```

GitHub closes the issue and links it to your commit. Check that it did.

#### 10. Next issue

New chat. Same loop. That is the rest of the assignment.

### Done when

- ✅ The plan is a comment on the issue, approved by you before the code
- ✅ One issue closed by a commit
- ✅ The feature works on your phone, including the error state
- ✅ Lint and tsc clean
- ✅ You can explain every line that was added
- ✅ `docs/day-3.md` with three answers in your own words
- ✅ `copilot-instructions.md` updated, or a note why not
