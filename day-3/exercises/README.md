# Day 3 exercises

All four continue in the project from the catch-up at the start of the day: the item catalogue with the tabs Items and Bag.

**Fell behind, or no project?** Every exercise has a starter: a complete project at the point where that exercise begins. See [`starters/`](./starters/): `exercise-1` is the result of the catch-up, `exercise-2` is the result of exercise 1, and so on.

1. [Exercise 1: Live data with TanStack Query](./exercise-1-tanstack-query.md)
2. [Exercise 2: Detail page from PokeAPI](./exercise-2-item-detail.md)
3. [Exercise 3: The bag in SQLite](./exercise-3-bag-sqlite.md)
4. [Exercise 4: Agent mode](./exercise-4-agent-mode.md)

## Rules

- Copilot Chat is allowed in 1 to 3. Agent mode only in exercise 4.
- Read before you paste. Ask a follow-up about anything you do not understand.
- Every load has a loading state and an error state. Test the error state with airplane mode.
- No hex codes outside `src/constants/theme.ts`. Lint and tsc clean before every commit.

## Helpful commands

- `npx expo install <package>` installs the version that fits your SDK
- `npx expo start --clear` when things look stale
- Press `j` in the terminal running `expo start` to open React Native DevTools (console, network)
- Press `m` for the in-app dev menu (element inspector, performance monitor)

## Documentation

- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [PokeAPI: items](https://pokeapi.co/docs/v2#items)
- [Share API](https://reactnative.dev/docs/share)
- [AGENTS.md](https://agents.md/), and how [Copilot reads it](https://code.visualstudio.com/docs/copilot/copilot-customization)
