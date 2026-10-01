# Feature spec template

One file per feature in `specs/features/`, for example
`specs/features/search.md`. Three to six features is enough. Every feature
becomes one GitHub issue. Delete the comments in `<>`. Half a page is plenty.

Same four headings as in Dan's lessons: Goal, Constraints, Acceptance
Criteria, Out of Scope. This is a worked example. Replace it with your own.

---

# Search Pokémon by name

## Goal

<What can the user do when this is done, and why? One or two sentences.>

Find a Pokémon by typing its name, so I do not scroll through 151 of them.

## Constraints

<The walls the agent cannot see: which screen, which data, what to reuse,
what not to add.>

- Lives on the list screen, `src/app/(tabs)/index.tsx`. No new screen.
- Filters the list already loaded with TanStack Query (`/pokemon?limit=151`).
  No request per keystroke.
- Colors and spacing from `src/constants/theme.ts`.
- No new dependencies.

## Acceptance Criteria

<Three to six things someone else can tick off without asking you anything.
What is on screen, what happens on press, what a failure looks like.>

- [ ] A search field at the top of the list, placeholder "Search".
- [ ] Typing filters the list while I type, case-insensitive, on the name.
- [ ] No match shows the text "No Pokémon found" instead of the list.
- [ ] Clearing the field shows the full list again.
- [ ] Loading state and error state stay the same as the list.

## Out of Scope

<What this feature does not do. The agent will not invent it.>

- Search by type or number.
- Search history or suggestions.
- A search field on the detail screen.
