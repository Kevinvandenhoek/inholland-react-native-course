# Copilot instructions template

Copy this into your own repo as `.github/copilot-instructions.md` and rewrite
it for your product. Copilot reads it with every request in this project.

Aim for ten to twenty lines. It is not documentation. It is what a new
colleague would need to know before touching anything.

---

# <App name>

<One sentence: what the app is, and which API it runs on.>

Expo (React Native) app with Expo Router, TypeScript, TanStack Query and
expo-sqlite. Runs in Expo Go, so no packages that need a custom native build.

## Structure

- Screens live in `app/`, reusable UI in `components/`, API and database code
  in `services/`, hooks in `hooks/`.
- No fetch calls and no SQL in screens. Data goes through hooks.

## Rules

- All colours, spacing and radii come from `constants/theme.ts`. Never a hex
  code in a component.
- Every async action has a loading state and an error state.
- Prefer `Pressable` over `TouchableOpacity`. Prefer `expo-*` packages over
  community ones.
- Install packages with `npx expo install`. Ask me before adding a dependency.
- Keep changes small. Do not refactor files you were not asked to touch.

## Workflow

- The product spec is in `specs/product.md`. Open issues describe what is next.
- One issue per chat. Before you write code: post a short plan as a comment
  on the issue with `gh issue comment <number>`. Which files you will touch,
  how, and what you are unsure about. Then wait for my go.
