# Exercise 3: your first feature with the agent

### Objective
One issue, from prompt to closed. The full loop: context, plan, build, review, test,
ask, update your instructions, commit. This is the loop you repeat until the
deadline.

### Requirements

1. The agent's plan and task list as one comment on the issue, approved by you before any code.
2. One issue implemented by the agent, reviewed by you.
3. Lint and tsc clean, the feature works on your phone.
4. A commit that closes the issue.
5. You asked the follow-up questions until you could explain the code.
6. This chat exported to `chat-history/`.

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

> Implement issue #1. The spec is in `specs/features/browse-list.md`.
> Follow `AGENTS.md`. Only touch what this feature needs. Shared setup
> goes where `AGENTS.md` says. Ask me before adding a dependency.

Three things in that prompt: **what** to build, **where the context is**, and
**what not to touch**. Leave out any one of them and you get surprises.

#### 3. Plan first (5 min)

Your instructions tell the agent to plan before it codes, and to post that
plan as a comment on the issue: a **plan** (which files, how, what it is
unsure about) and a **task list** as `- [ ]` checkboxes. It will ask to run
`gh issue comment`. Allow it. Starts coding straight away? Stop it and point
at the rule.

Open the issue on GitHub and read the comment against the criteria:

- Does the task list cover **every** criterion? Nothing more?
- Does the plan stay inside the files you named?
- Does it want a dependency you did not ask for?
- Does it need shared setup, like the API client or the query provider?
  Already listed in `AGENTS.md`? The plan must reuse it. Not there yet? Your
  first issue builds it. The plan should say so, and put it in `src/services/`.
- Is every task small enough to check on its own?

Wrong or vague? Say so in the chat. It updates the comment. Right? Say "go".
Fixing a plan costs three lines. Fixing the code it would have written costs
your afternoon.

#### 4. Watch it work (3 min)

It reads files, proposes edits, may want to run commands. Read what it is
doing while it does it. Do not accept yet.

It ticks off tasks in the plan comment as it goes (`gh issue comment
--edit-last`). Refresh the issue: the checklist is your progress bar. Tasks
ticked that are not done? That goes in your instructions later.

#### 5. Review the diff (8 min)

Line by line. Every changed file.

- Does it meet **every** acceptance criterion from the issue? Tick them off.
- Did it add something you did not ask for? A dependency, a refactor, a file?
- Does it follow your instructions? Structure, tokens, loading and error states.
- What would you have done differently?

Something wrong? Say so in the same chat and let it fix it. You can also just
fix it yourself. Both are fine, neither is optional.

#### 6. Check it yourself (4 min)

```bash
npx expo lint
npx tsc --noEmit
```

Then run it on your phone. Green checks are not a working app.
Test the error state too: turn on airplane mode.

#### 7. Ask until you understand it (7 min)

The last step of every agent task. Ask three questions about what it built:

- Why this approach and not <the other one>?
- What happens when this fails? Where is that handled?
- Which part of this would break first if the API changed?

Then explain it back in the chat, **in your own words**, and let the agent
correct you. If you cannot explain it, you do not understand it yet. Ask again.

#### 8. Update your instructions (3 min)

Did you correct the agent in step 3 or 5? Explain something it could have known?
That becomes a line in `AGENTS.md`. One rule per
finding, as short as it can be.

Did it set up something shared, like the API client or the database? That
is a technical decision. Put it in `AGENTS.md` too: what it is and where it
lives. From now on the agent reuses it, every issue the same way.

Nothing to correct this time? Fine. Most issues will give you something.

#### 9. Export the chat, commit and close (3 min)

You hand in at least one chat like this, and this one can be it. Export it
before you commit: Command
Palette → `Chat: Export Chat...`, save it in `chat-history/` with the issue number in the name, for example
`issue-1`. Other tool? Claude Code has `/export`, Cursor exports from the chat
menu. Any format is fine.

```bash
git add .
git commit -m "Add the item list screen, closes #1"
git push
```

Use the number of your own issue. GitHub closes the issue and links it to
your commit. Check that it did.

#### 10. Next issue

New chat. Same loop. That is the rest of the assignment.

### Done when

- ✅ Plan and task list as one comment on the issue, approved by you before the code, all tasks ticked
- ✅ One issue closed by a commit
- ✅ The feature works on your phone, including the error state
- ✅ Lint and tsc clean
- ✅ You can explain every line that was added
- ✅ The chat is in `chat-history/`
