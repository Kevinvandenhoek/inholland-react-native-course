# Exercise 4: Navigation

### Objective
Go from list to detail with a stack, and add a Favorites tab. Both list screens reuse one component.

<video src="../assets/stack-navigation.mp4" width="320" controls loop muted autoplay></video>

Autocomplete and Copilot Chat are allowed. Keep the rules: read before you paste, no hex codes outside the theme, lint and tsc clean.

### Requirements

1. `components/pokemon-list.tsx`: the grid from exercise 3 as a reusable component with a `pokemon: Pokemon[]` prop.
2. Two tabs: **Pokémons** (all) and **Favorites** (for now: the first two).
3. `app/pokemon/[id].tsx`: a detail screen that opens when you press a card, with a working back button.

```
app/
├── _layout.tsx           Stack
├── (tabs)/
│   ├── _layout.tsx       Tabs
│   ├── index.tsx         → /            PokemonList (all)
│   └── favorites.tsx     → /favorites   PokemonList (first two)
└── pokemon/
    └── [id].tsx          → /pokemon/25  Detail
```

> **📚 Reference:** [Expo Router: Stack](https://docs.expo.dev/router/advanced/stack/) · [Tabs](https://docs.expo.dev/router/advanced/tabs/) · [Nesting navigators](https://docs.expo.dev/router/advanced/nesting-navigators/)

### Steps to Complete

1. **Extract the list.** Move the `FlatList` from `index.tsx` into `components/pokemon-list.tsx`. Props: `pokemon: Pokemon[]`. The card's `onPress` now navigates:

   ```tsx
   import { router } from 'expo-router'

   router.push(`/pokemon/${item.id}`)
   ```

   > **📚 Reference:** [Navigating between pages](https://docs.expo.dev/router/basics/navigation/)

2. **Favorites tab.** Create `app/(tabs)/favorites.tsx` with the same layout as `index.tsx`, title "Favorites", and `pokemonData.slice(0, 2)`. Register it in `app/(tabs)/_layout.tsx` with a heart icon. Real favorites come on day 2, with SQLite.

3. **Detail screen.** Create `app/pokemon/[id].tsx`.
   - Read the parameter: `const { id } = useLocalSearchParams<{ id: string }>()`. It is always a string.
   - Look up the Pokémon: `pokemonData.find((p) => p.id === Number(id))`.
   - Not found? Show a short message instead of crashing.
   - Show name, formatted ID and type. The type gets a badge with a token colour.

   > **📚 Reference:** [Dynamic routes](https://docs.expo.dev/router/basics/notation/#square-brackets) · [useLocalSearchParams](https://docs.expo.dev/router/reference/hooks/#uselocalsearchparams)

4. **Header.** In `app/_layout.tsx`, add `<Stack.Screen name="pokemon/[id]" options={{ title: 'Pokémon' }} />`. Bonus: set the title to the Pokémon's name from inside the screen with `<Stack.Screen options={{ title: pokemon.name }} />`.

   > **📚 Reference:** [Stack: configure header](https://docs.expo.dev/router/advanced/stack/#configure-header-bar)

5. **Test on your phone.** Press a card, the detail slides in. Swipe from the left edge (iOS) or use the back gesture (Android). Switch tabs and back: the tab remembers where you were.

6. **Lint, tsc, commit.** Message: `Exercise 4: navigation`.

### What happens natively

The stack is a real `UINavigationController` on iOS and a fragment stack on Android. The header, the back button, the slide animation and the swipe-back gesture are drawn and handled by the platform. That is why it feels right, and why you did not have to build any of it.

### Done when

- ✅ `PokemonList` used by both tabs
- ✅ Card → detail → back works, including swipe back
- ✅ Unknown ID shows a message, no crash
- ✅ Lint and tsc clean, committed and pushed
