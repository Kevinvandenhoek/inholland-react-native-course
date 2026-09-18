# Exercise 4: Agent mode

### Objective
Let Copilot write code for the first time, on your terms. Small task, good context, every line reviewed, then ask until you understand it.

This is the way of working we grade in the final assignment. Five parts: A instructions, B build, C fix, D ask, E update your instructions.

### Requirements

1. `.github/copilot-instructions.md` in your repo, about ten lines.
2. A Share button on the detail screen, built by the agent, reviewed by you, working on your phone.
3. One bug fixed by the agent.
4. `docs/day-2.md` with your answers to three questions about the Share code.
5. `.github/copilot-instructions.md` updated with at least one rule you learned in B or C.

### Part A: instructions (7 min)

Copilot reads `.github/copilot-instructions.md` with every request in this project. It is the Copilot name for the `AGENTS.md` you saw in the React lessons. Prefer `AGENTS.md`? Turn on the VS Code setting `chat.useAgentsMdFile`. Same idea, same content.

Write down what a new colleague would need to know. Example, adapt it to your project:

```markdown
# Pokedex

Expo (React Native) app with Expo Router, TypeScript, TanStack Query and expo-sqlite. Runs in Expo Go.

- Screens live in `app/`, reusable UI in `components/`, API and database code in `services/`, hooks in `hooks/`.
- All colours, spacing and radii come from `constants/theme.ts`. Never write a hex code in a component.
- Data fetching goes through TanStack Query hooks in `hooks/`. No `useEffect` + `fetch` in screens.
- Every async action has a loading and an error state.
- Prefer `Pressable` over `TouchableOpacity`. Use `expo-*` packages over community ones.
- Install packages with `npx expo install`.
- Keep changes small. Do not refactor files you were not asked to touch.
```

**Check that it works.** Open a new chat, attach no files, and ask:

> What do you know about this project?

Does it name your stack and your rules? Then the file is read. It also shows up under **References** below the answer. Does it answer in general terms? Check the path and the file name.

Commit: `Exercise 4A: copilot instructions`.

> **📚 Reference:** [Custom instructions for Copilot](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)

### Part B: the Share button (15 min)

1. **Switch the chat to Agent.** Open `app/pokemon/[id].tsx` so it is in context.

2. **Give one small task.** For example:

   > Add a Share button to the Pokémon detail screen next to the heart. On press, use the Share API from react-native to share the text "Check out {name} (#{id}) in my Pokédex!". Follow the project instructions. Do not change anything else.

3. **Watch what it does.** The agent reads files, proposes edits, may run commands. Do not accept yet.

4. **Review the diff.** Go through every changed line. Checklist:
   - Did it add something you did not ask for? A new dependency, a refactor, a new file?
   - Does it follow your instructions? Tokens, not hex. `Pressable`, not `TouchableOpacity`.
   - Does the Share call handle failure? `Share.share` can reject.
   - What would you have done differently?

   Wrong? Tell the agent, in the same chat, what to change. Right? Accept.

   > **📚 Reference:** [Share API](https://reactnative.dev/docs/share)

5. **Lint, tsc, test on your phone.** The native share sheet must open. Share it to yourself.

6. Commit: `Exercise 4B: share button (agent)`.

### Part C: fix a bug (10 min, or homework)

Do you have a bug left from exercise 1 to 3? Use that. Otherwise, plant this one:

In `hooks/use-favorites.ts`, change the key in `invalidateQueries` from `['favorites']` to `['favourites']`. Run the app: tap a heart, go to the Favorites tab. The list no longer updates until you restart.

Now let the agent fix it:

> When I favorite a Pokémon, the Favorites tab does not update until I restart the app. Find the cause and fix it. Explain what was wrong.

Read the explanation. Is that the actual cause? Read the diff. Did it fix the cause, or work around it (a refetch on focus, a `useEffect`)? A workaround is not a fix. Push back if needed.

Commit: `Exercise 4C: bug fix (agent)`.

### Part D: ask about it (10 min, always in class)

Working with an agent is fast. Losing track of your own codebase is faster. So after every agent task: **ask until you can explain it**.

Ask the agent (Ask mode is fine) three questions about the Share code. Examples, or pick your own:

- Why this import, and what else is in that module?
- What happens if sharing fails or the user cancels? Where is that handled?
- Where would this code go in my folder structure if I wanted to reuse it on the list screen?

Write the answers **in your own words** in `docs/day-2.md`. Not a copy of the chat. Commit: `Exercise 4D: notes`.

### Part E: update your instructions (5 min)

Look back at B and C. Did you correct the agent, or explain something it could have known? A hex code instead of a token. A `TouchableOpacity`. A workaround instead of a fix. A dependency you did not want.

Every one of those becomes a rule in `.github/copilot-instructions.md`. One line each, for example:

```markdown
- Fix the cause of a bug, not the symptom. No refetch-on-focus to hide a stale query.
```

Nothing to correct? Then add the rule you were most afraid it would break.

This is the last step of every agent task from now on. The file grows with your project, and the commits on it show how you learned to steer.

Commit: `Exercise 4E: update instructions`.

### Done when

- ✅ `.github/copilot-instructions.md` in the repo, and the check "What do you know about this project?" names your rules
- ✅ Share works on your phone, you can explain every line of the diff
- ✅ One bug fixed by the agent, cause and fix understood
- ✅ `docs/day-2.md` with three answers in your own words
- ✅ `copilot-instructions.md` has at least one new rule from B or C
- ✅ Five commits, lint and tsc clean
