# Final assignment

Build a mobile app on live data from an API. Pick one of three routes.

> ‼️ **Hand in before Friday 6 November 2026, 23:59.**

## Pick a route

1. **Pokédex.** Follow the [Figma design](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pok%C3%A9mon-Code-Challenge?node-id=1-2) closely, plus one feature you design yourself: compare two Pokémon. See [appendix A](#appendix-a-pokédex).
2. **Battle simulator.** Two Pokémon fight by the real rules. Your own design. See [appendix B](#appendix-b-battle-simulator).
3. **Your own idea.** One clear core action (search, plan, collect, ...), 3 to 6 features, live data (not a list in your code). Your own specs and design: a sketch per screen is enough.

**Own idea:** post your [idea note](../day-2/templates/idea.md) in Teams before day 3. Feedback on day 3, approval on day 4. You can always switch back to a starter idea.

**Any API is fine, as long as I can run your app.** A key or a login is fine too:

- Key in `.env` as `EXPO_PUBLIC_...`, `.env` in `.gitignore`, a `.env.example` without the value in the repo. Committed a key anyway? Replace it.
- Anyone with your app can read the key. Do not use one that costs you money.
- Login is not taught in class. Your risk.

## Technical core

Required for every route.

- [ ] Runs in Expo Go via QR code.
- [ ] Live data through TanStack Query. No key in the repo.
- [ ] At least 2 screens with Expo Router.
- [ ] Something in SQLite that is still there after a restart.
- [ ] Every load has a loading state and an error state.
- [ ] At least 1 native feature (Share, haptics, camera, ...).
- [ ] TypeScript and ESLint without errors.
- [ ] UI, data and logic are not mixed.

The assignment says **what** the app does, not **how**. You choose, the agent
builds. Write two choices in `specs/product.md` before you build: what you
store in SQLite, and which native feature. Each with the alternative and why.

## How to work

**Once per project**

1. **Spec**: `specs/product.md` and one file per feature. Ask the agent to grill you: questions until the spec is sharp.
2. **Issues**: one GitHub issue per feature.
3. **Instructions**: `AGENTS.md` for your project.

**Per issue**

1. **New chat**: one issue per chat.
2. **Prompt**: the issue, its spec file, the files it may touch.
3. **Plan**: the agent posts a plan and a `- [ ]` task list as a comment on the issue (`gh issue comment`). You check it, then say go.
4. **Build**: the agent builds and ticks off the tasks.
5. **Review**: read the diff, run lint and tsc, test on your phone. Wrong? Say so, or fix it yourself. Rejected or changed something? Note it: you need it for question 3.
6. **Ask**: ask the agent until you can explain the code in your own words.
7. **Update instructions**: what you had to correct becomes a rule in `AGENTS.md`.
8. **Commit**: `closes #12`. Next issue.

## What you hand in

One GitHub repo with:

| Part | What | Template |
|---|---|---|
| The app | Runs in Expo Go | |
| `specs/product.md` | What the app is | [template](./templates/product.md), [example](./templates/product-example.md) |
| `specs/features/*.md` | One file per feature, 3 to 6. Starter idea: one per item in the appendix | [template](./templates/feature.md) |
| `AGENTS.md` | Your instructions for the agent, growing with the project | [template](./templates/AGENTS.md) |
| GitHub Issues | One per feature, with the agent's plan as a comment, closed by a commit (`closes #12`) | |
| `chat-history/` | The chat of at least one issue, start to finish | |
| `docs/explanation.md` | Three questions | [template](./templates/explanation.md) |

Keep the full git history: don't squash, don't start a fresh repo, don't
force-push.

### The three questions

Short answers, your own words. Every file and line you name must exist.

1. Your technical choices from `product.md`: where is each one in the code (file and line)? Did one change while you built? Say what and why.
2. Pick one feature and explain how it works, from API call to screen. Name the files.
3. Name a suggestion from the agent that you rejected or changed. What did it suggest, what did you do instead, and why? Point at the chat or the commit.

### Chat history

One issue, start to finish: prompt, plan, build, review, ask. Pick one where
something did not work in one go. Save it as `chat-history/issue-<number>.json`:

- Copilot in VS Code: Command Palette → `Chat: Export Chat...`
- Claude Code: `/export`
- Cursor: export from the chat menu

### Hand in

Send the repo link in [Teams](https://teams.microsoft.com/l/chat/48:notes/conversations?context=%7B%22contextType%22%3A%22chat%22%7D). Key or login? Send the `.env` and a test account in the same message.

I clone the repo, add your `.env`, run `npx expo start` and scan the QR code.
Check that it starts on a clean install.

## Grade

**A 6** when the technical core is complete, everything is handed in, and the
app does what your spec says. Missing something? A 5 at most. Does not start?
A 1.

**From 6 to 8:**

| Part | Weight | What I look at |
|---|---|---|
| Product | 80% | Works, finished according to your spec, code quality |
| Steering and checking | 10% | Small tasks, plan first, your own choices, `AGENTS.md` grows; you read, test and correct the agent's work |
| Understanding | 10% | Your explanation matches the code |

**Optional, +0.5 each, up to a 10.** There are more than you need: pick the ones you like.

- [ ] Three different [Reanimated](https://docs.swmansion.com/react-native-reanimated/) animations, each with a purpose.
- [ ] Dark mode: every screen looks right, all colours from the theme.
- [ ] Pagination: the list loads page by page while you scroll ([infinite scroll](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)), for example 20 at a time. Not the whole list at once.
- [ ] Clean TypeScript: no `any`, no `as` casts (`as const` is fine), no `@ts-ignore`.
- [ ] Design. Pokédex: pixel perfect to the Figma. Other routes: a consistent own style, with your own font ([Expo Font](https://docs.expo.dev/develop/user-interface/fonts/)), and buttons, cards and spacing that look the same on every screen.
- [ ] [Localization](https://docs.expo.dev/guides/localization/): two languages, the app follows the phone's language.
- [ ] No warnings: no `console.log`, no warnings in the terminal or on screen.
- [ ] Offline: the app works in airplane mode with the last data it loaded.
- [ ] Tests: at least one test per feature on the logic (hook or service), based on its acceptance criteria. `npm test` passes.
- [ ] CI: a [GitHub Action](https://docs.github.com/en/actions) runs lint and tsc (and your tests) on every push.
- [ ] Accessibility: every button has a label for VoiceOver or TalkBack, and screens still work with the largest text size. See [accessibility](https://reactnative.dev/docs/accessibility).
- [ ] Optimistic update: saving or removing something shows at once, before the database is done, and goes back if it fails. See [optimistic updates](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates).

---

## Appendix A: Pokédex

Follow the [Figma file](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pok%C3%A9mon-Code-Challenge?node-id=1-2) closely: type colours, font, spacing, icons.

**List**
- [ ] All ~1300 Pokémon, as in the design, live from the API. Loads fast, scrolls smoothly.
- [ ] Search by name finds every Pokémon, also one that is not loaded yet. PokeAPI has no search endpoint: you work out how.

**Detail**
- [ ] Reachable from the list and from favorites.
- [ ] Name, number, artwork, types in the type colour.
- [ ] Three parts: about, stats, evolution chain. Quick to switch.
- [ ] Evolution chain from the API, tap through to the next detail.
- [ ] Favorite and unfavorite.

**Favorites**
- [ ] Own screen, still there after a restart, with an empty state.

**Other**
- [ ] Loading and error state on list, detail and evolution chain.
- [ ] The font from the design with Expo Font ([fonts.zip](./assets/fonts.zip)).

**Compare (you design it)**

A user puts two Pokémon side by side and sees who is stronger on which stat.
Figma has no screen for this: follow its style.

- [ ] Compare any two Pokémon: per stat you see who is stronger.

## Appendix B: Battle simulator

Your own design. Keep it simple: two Pokémon, HP bars, a log of the turns.
[Impression](https://github.com/user-attachments/assets/634a72c3-d79d-4452-a650-2b80561c8d43).

**Setup**
- [ ] Pick two Pokémon (search or random), live from the API.
- [ ] Both at level 50, with their base stats from the API as they are.

**The fight**
- [ ] Turns in order of speed, a tie is random.
- [ ] Each turn a real move of that Pokémon from the API (power, type, accuracy). Each turn the user picks the move for their own Pokémon. The opponent's move is up to you (random is fine). No move with power? The Pokémon uses [Struggle](https://pokeapi.co/api/v2/move/struggle), as in the games.
- [ ] Damage by the [official formula](https://bulbapedia.bulbagarden.net/wiki/Damage) (generation V and later): level, attack/defense or special attack/special defense by the move's damage class, power, random 85 to 100%, STAB x1.5.
- [ ] Type effectiveness from the API (`/type/{id}`, `damage_relations`), not hardcoded. Both types of the defender count. Not fetched again every turn.
- [ ] Visible: super effective, not very effective, no effect, hit or miss.
- [ ] Winner when one HP reaches zero.

**History**
- [ ] Every fight stored: who, who, winner, number of turns. Still there after a restart.
- [ ] A history screen with an empty state.

**Other**
- [ ] Loading and error state on search, Pokémon, moves and types.

Out of scope: abilities, items, status effects, weather, special move effects
(multi-hit, charging, ...), more than one Pokémon per side.

---

## References

- [PokeAPI docs](https://pokeapi.co/docs/v2)
- [Public APIs list](https://github.com/public-apis/public-apis)
