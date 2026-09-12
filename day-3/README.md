# Day 3: Your own product

## Slides

- [Course 3 - Agenda](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/course-3.html#1)
- [Project structure](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/project-structure.html#1)
- [Dependencies](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/dependencies.html#1)
- [Spec and issues](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/spec-and-issues.html#1)
- [Hand-in](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/hand-in.html#1)
- [Use of AI](https://kevinvandenhoek.github.io/inholland-react-native-course/day-3/slides/use-ai.html#1)

## Exercises

[All three exercises](./exercises/README.md): your own repo, your spec and
issues, your first story with the agent. They are the start of the final
assignment, not separate homework.

---

# Final assignment

Build a mobile app on live data from a public API. You pick one of three routes.

> ‼️ **Hand in before &lt;date&gt;, 23:59.**
> <!-- Kevin: vul de deadline in -->

## Pick a route

### 1. Pokédex

The course app, finished and extended, following the
[Figma design](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pok%C3%A9mon-Code-Challenge?node-id=1-2).
Fixed list of requirements, strict on design. See [appendix A](#appendix-a-pokédex).

### 2. Battle simulator

Pick two Pokémon and let them fight by the real rules: type chart from the API,
the official damage formula, turns by speed. Your own design.
See [appendix B](#appendix-b-battle-simulator).

### 3. Your own idea

Allowed, on PokeAPI or another API that is public, works without a login or a
key, and has enough data for 3 to 6 user stories. Conditions:

- live data from the API, not a downloaded list;
- meets the technical core below;
- one clear core action for the user (search, fight, plan, collect, ...);
- doable: 3 to 6 user stories, no more;
- your own spec (`specs/product.md`) and your own design. A sketch per screen
  is enough, no Figma needed.

You posted an idea note in Teams during the holiday and got feedback. It is
approved on day 3. After day 3 you can still switch back to a starter idea.

## Technical core

Required for every route. All of it.

- [ ] Runs in Expo Go via QR code, on any phone.
- [ ] Live data from a public API (PokeAPI by default) through TanStack Query. No login, no key.
- [ ] At least 2 screens with Expo Router.
- [ ] Something stored locally in SQLite that is still there after a restart.
- [ ] Every load has a loading state and an error state.
- [ ] At least 1 native phone feature (Share, haptics, camera, notifications, ...).
- [ ] TypeScript without errors. ESLint without errors.
- [ ] A logical project structure: UI, data and logic are not mixed.

## What you hand in

One GitHub repo with:

| Part | What | Template |
|---|---|---|
| The app | The code, running in Expo Go | |
| `specs/product.md` | Goal, 3 to 6 user stories with acceptance criteria, which API and which data | [template](./templates/product.md) |
| `.github/copilot-instructions.md` | What you told the agent about your project | [template](./templates/copilot-instructions.md) |
| GitHub Issues | Every task an issue, closed by a commit (`closes #12`) | |
| `chat-history/` | A copy of your Copilot chat folder from VS Code | |
| `docs/toelichting.md` | Max 1 A4, four questions | [template](./templates/toelichting.md) |
| Demo video | Max 3 minutes, the app on your phone, you talking over it. Link in the README | |

Picked a starter idea? Take the list from the appendix and write it up as user
stories in your spec.

### The four questions

In `docs/toelichting.md`, short answers, your own words:

1. What did you build and for whom?
2. Name two choices in the code and why you made them that way.
3. Where was the agent wrong, how did you notice, and what did you do?
4. Name code from the agent you did not understand at first. How did you work it out, and what does it do now?

### Chat history

VS Code keeps your Copilot chats per project on disk. A script in this repo
finds the right folder and copies it into `chat-history/`. It only copies the
chats from your project folder, nothing else.

The chats are evidence next to your commits and your explanation. They are not
a grade by themselves.

### Hand in

- Push everything to GitHub.
- Send me the repo link in [Teams](https://teams.microsoft.com/l/chat/48:notes/conversations?context=%7B%22contextType%22%3A%22chat%22%7D).

## Grade

You pass (5.5) when **all** of this is true:

- the technical core is complete;
- everything on the hand-in list is present;
- the spec and the app match: what the spec says, the app does.

Above that:

| Part | Weight | What I look at |
|---|---|---|
| Product | 40% | Does it work, is it finished according to your own spec, code quality |
| Steering | 20% | Small tasks, context given, your own choices |
| Checking | 20% | Output read, tested and corrected |
| Understanding | 20% | Explanation and video match the code |

**Steering, checking and understanding** are read from your issues, commits,
chat history, explanation and video. Red flags: one prompt that asks for the
whole app followed by "fix it", a chat history that does not match the commits,
an explanation that only repeats what the agent said.

### Optional items

Each one is +1 point.

- [ ] Animations (for example loading in UI elements).
- [ ] Dark mode through theming.
- [ ] [Paginated list](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries) with infinite scroll, 50 at a time.
- [ ] Clean TypeScript: no `any`, no `as SomeType`, no `@ts-ignore`.
- [ ] Pixel perfect design (Pokédex) or a consistent own style (battle, own idea).
- [ ] Your own font through [Expo Font](https://docs.expo.dev/develop/user-interface/fonts/). Required for the Pokédex, so it does not count there.
- [ ] [Localization](https://docs.expo.dev/guides/localization/).
- [ ] No bugs, no console errors, no `console.log`.

---

## Appendix A: Pokédex

Design: the [Figma file](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pok%C3%A9mon-Code-Challenge?node-id=1-2), followed
closely. Type colours, font, spacing, icons. What you already built in class
counts, but it has to be finished and on design.

**List**
- [ ] All Pokémon in a FlatList, live from the API.
- [ ] Search by name.
- [ ] Paginated loading with infinite scroll, 50 at a time.

**Detail**
- [ ] Reachable from the list and from favorites.
- [ ] Name, number, artwork, types with the type colour from the design.
- [ ] Three swipeable tabs: about, stats, evolution chain (for example [React Native TabView](https://reactnavigation.org/docs/tab-view/)).
- [ ] Evolution chain live from the API, tappable through to the next detail.
- [ ] Favorite and unfavorite.
- [ ] Share through the [Share API](https://reactnative.dev/docs/share).

**Favorites**
- [ ] Own screen, stored in SQLite, still there after a restart.
- [ ] Empty state when there is nothing yet.

**Other**
- [ ] Loading and error state on list, detail and evolution chain.
- [ ] The font from the design through Expo Font ([fonts.zip](./assets/fonts.zip)).

Native feature for the technical core: Share.

## Appendix B: Battle simulator

Your own design, the Figma file has no battle screen. Keep it simple: two
Pokémon facing each other, HP bars, a log of the turns.

**Setup**
- [ ] Pick two Pokémon (search or random), live from the API.
- [ ] Both at the same level (50 for example), stats from the API.

**The fight**
- [ ] Turns in order of speed, a tie is random.
- [ ] Each turn an attack with a real move of that Pokémon from the API (power, type, accuracy). No move with power? Pick one that has it.
- [ ] Damage by the official formula ([Bulbapedia: Damage](https://bulbapedia.bulbagarden.net/wiki/Damage), generation V and later): level, attack/defense or special attack/special defense, power, random 85 to 100%, STAB x1.5.
- [ ] Type effectiveness from the API (`/type/{id}`, `damage_relations`), not hardcoded. Both types of the defender count.
- [ ] Visible in the UI: super effective, not very effective, no effect, hit or miss.
- [ ] Haptics on a hit.
- [ ] Winner when one HP reaches zero.

**History**
- [ ] Every fight stored in SQLite: who, who, winner, number of turns. Still there after a restart.
- [ ] A screen with the history and an empty state.

**Other**
- [ ] Loading and error state on search, Pokémon, moves and types.

Native feature for the technical core: haptics.

Deliberately out of scope: abilities, items, status effects, weather, more than
one Pokémon per side. Want to build those anyway? Finish the list first.

[Impression of a battle feature](https://github.com/user-attachments/assets/634a72c3-d79d-4452-a650-2b80561c8d43)

---

## References

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [Vertical Slice Architecture](https://antondevtips.com/blog/vertical-slice-architecture-the-best-ways-to-structure-your-project)
- [Clean Code Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Expo SDK](https://docs.expo.dev/versions/latest/sdk/)
- [React Native Directory](https://reactnative.directory/)
- [Bike Shedding](https://thedecisionlab.com/biases/bikeshedding)
- [PokeAPI docs](https://pokeapi.co/docs/v2)
- [Public APIs list](https://github.com/public-apis/public-apis)
- [From 1+1 in Assembly to LLMs: The Evolution of Computing Abstraction](https://taewoon.kim/2024-11-12-1+1/)
- [Measuring Abstraction Level of Languages](https://github.com/const/const-articles/blob/main/evolution/2025/01-measuring-language-level/MeasuringAbstractionLevelOfLanguages.adoc)
