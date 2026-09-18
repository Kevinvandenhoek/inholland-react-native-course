# Exercise 3: Components, twice

### Objective
Build the Pokémon grid: first a card by hand, then the list with Copilot Chat. Then compare. The point is not the grid. The point is seeing what the agent does differently from you.

<video src="../assets/pokemon-page-components.mp4" width="320" controls loop muted autoplay></video>

### Requirements

1. `components/pokemon-card.tsx`: a pressable card with an ID badge and the name, styled with tokens.
2. `app/(tabs)/index.tsx`: a two-column `FlatList` of cards, data from `constants/pokemon.ts`.
3. `docs/day-1.md`: three sentences about the difference between part A and part B.

### Part A: the card, by hand (20 min)

No Copilot Chat. Autocomplete is fine.

1. **Add data.** Create `constants/pokemon.ts`:

   ```ts
   export type Pokemon = { id: number; name: string; type: string }

   export const pokemonData: Pokemon[] = [
     { id: 1, name: 'Bulbasaur', type: 'Grass' },
     { id: 2, name: 'Ivysaur', type: 'Grass' },
     { id: 3, name: 'Venusaur', type: 'Grass' },
     { id: 4, name: 'Charmander', type: 'Fire' },
     { id: 5, name: 'Charmeleon', type: 'Fire' },
     { id: 6, name: 'Charizard', type: 'Fire' },
     { id: 7, name: 'Squirtle', type: 'Water' },
     { id: 8, name: 'Wartortle', type: 'Water' },
     { id: 9, name: 'Blastoise', type: 'Water' },
     { id: 25, name: 'Pikachu', type: 'Electric' },
   ]
   ```

2. **Build the card.** Create `components/pokemon-card.tsx` with a `PokemonCard` component that takes `pokemon: Pokemon` and `onPress: () => void`.
   - `Pressable` as the outer element. Lower the opacity while pressed.
   - Top section: the ID as a badge, formatted `001` with `String(id).padStart(3, '0')`.
   - Bottom section: the name.
   - Colours via `useThemeColor`, spacing and radius from `Spacing` and `Radius`. Shadow: `shadow*` for iOS, `elevation` for Android.

   > **📚 Reference:** [Pressable](https://reactnative.dev/docs/pressable) · [View](https://reactnative.dev/docs/view) · [Text](https://reactnative.dev/docs/text) · [Shadow props](https://reactnative.dev/docs/shadow-props)

3. **Show one card** on the Pokémon screen with `pokemonData[0]`. `onPress` shows an `Alert` with the name for now.

4. Lint, tsc, commit: `Exercise 3A: PokemonCard by hand`.

### Part B: the grid, with Copilot Chat (15 min)

1. **Open Copilot Chat in Ask mode.** Open `app/(tabs)/index.tsx` and `components/pokemon-card.tsx` so they are in context.

2. **Ask for the grid.** Be specific. For example:

   > Replace the single card in this screen with a FlatList that renders a PokemonCard for every item in pokemonData from constants/pokemon.ts. Two columns, 16 gap between cards and rows, padding around the list from the Spacing tokens. Keep the title above the list.

3. **Read the answer before you paste it.** Does it import from the right files? Does it use `keyExtractor`? Does it invent a colour or a number that should be a token? Change what is wrong, then apply it.

   > **📚 Reference:** [FlatList](https://reactnative.dev/docs/flatlist)

4. **Run it.** Grid works? Lint and tsc clean? Fix what is not.

5. **Ask one follow-up** about something in the code you did not fully understand. For example: *"Why does FlatList need keyExtractor?"* or *"What does columnWrapperStyle do that contentContainerStyle does not?"*

6. Commit: `Exercise 3B: grid with Copilot`.

### Part C: compare (10 min, in class)

Create `docs/day-1.md` and answer in three sentences:

1. What did Copilot do differently from how you built the card?
2. What was better, yours or Copilot's, and why?
3. What in Copilot's code do you not fully understand yet?

Commit: `Exercise 3C: notes`. We discuss the answers together.

### What happens natively

A `FlatList` is a `UIScrollView` / `RecyclerView`. It creates native views only for the rows on screen and **reuses** them when you scroll. A `ScrollView` with `.map()` would create all of them at once.

### Done when

- ✅ `PokemonCard` built by hand, with tokens
- ✅ Two-column grid built with Copilot, checked and corrected by you
- ✅ `docs/day-1.md` with three sentences
- ✅ Lint and tsc clean, three commits pushed
