# Product spec template

Copy this into your own repo as `specs/product.md` and fill it in. Delete the
comments in `<>`. Keep it short: one to two pages is plenty.

---

# <App name>

<One paragraph: what does the app do, and who is it for?>

## Core action

<The one thing a user does with this app: search, fight, plan, collect, ...>

## Stories

<3 to 6 stories. Each one becomes a GitHub issue. Criteria must be tickable:
someone else should be able to check them off without asking you anything.>

### 1. <Title of the story>

As a user I can <do something> so that <reason>.

- [ ] <Criterion: what is on screen, what happens on press>
- [ ] <Criterion: where the data comes from>
- [ ] Loading state and error state

### 2. <Title>

...

## Data

- **API**: <name and link. Public, no login, no key.>
- **Endpoints**: <which ones you use, and for what>
- **Stored on the phone**: <what goes into SQLite, which columns, why>

## Technical core

<Tick these off as you build. They are required for a pass.>

- [ ] Runs in Expo Go
- [ ] Live data through TanStack Query
- [ ] At least 2 screens with Expo Router
- [ ] Something in SQLite that survives a restart
- [ ] Loading and error state on every load
- [ ] One native feature: <which one, and where>
- [ ] TypeScript and ESLint without errors
- [ ] UI, data and logic in separate files

## Out of scope

<What you are deliberately not building. Be specific. This is the section
that stops the agent from inventing things.>
