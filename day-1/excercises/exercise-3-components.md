# Exercise 3: Key Components

### Objective
Master the essential React Native components: View, Text, Pressable, ScrollView, and FlatList while building Pokémon-related functionality.

<video src="../assets/pokemon-page-components.mp4" width="320" controls loop muted autoplay></video>

### Requirements

#### 1. View Component
- Understand the basic container component
- Use View for layout and grouping Pokémon cards

> **📚 Reference:** [React Native View Documentation](https://reactnative.dev/docs/view)

#### 2. Text Component
- Display Pokémon names and IDs
- Apply text styling and formatting

> **📚 Reference:** [React Native Text Documentation](https://reactnative.dev/docs/text)

#### 3. Pressable Component
- Create interactive Pokémon cards and buttons
- Handle press events for catching Pokémon

> **📚 Reference:** [React Native Pressable Documentation](https://reactnative.dev/docs/pressable)

#### 4. FlatList Component
- Display lists of Pokémon efficiently
- Implement proper Pokémon list rendering and performance

> **📚 Reference:** [React Native FlatList Documentation](https://reactnative.dev/docs/flatlist)

### Steps to Complete

#### Step 1: Create Basic Screen Structure
Start with the empty `pokemon.tsx` file from the previous exercise and create the basic screen structure with `SafeAreaView`, a title, and basic styling.

#### Step 2: Add Pokémon Data
Add a Pokémon data to `contansts/pokemon.ts`. Add 10 Pokémon entries, each containing `id`, `name`, and `type` properties.

```typescript
export const pokemonData = [
  { id: 1, name: "Pikachu", type: "Electric" },
  { id: 2, name: "Charmander", type: "Fire" },
  { id: 3, name: "Squirtle", type: "Water" },
  { id: 4, name: "Bulbasaur", type: "Grass" },
  { id: 5, name: "Charizard", type: "Fire" },
  { id: 6, name: "Blastoise", type: "Water" },
  { id: 7, name: "Venusaur", type: "Grass" },
  { id: 8, name: "Gengar", type: "Ghost" },
  { id: 9, name: "Mewtwo", type: "Psychic" },
  { id: 10, name: "Mew", type: "Psychic" },
];

```

#### Step 3: Create a Simple Pokémon Card with View and Text
Replace the title with a simple card using `View` and `Text` components to display a Pokémon name, and add appropriate styles for the card and text.

#### Step 4: Add FlatList for Multiple Pokémon
Import `FlatList` and replace the single card with a `FlatList` that renders all Pokémon from the data array, using `renderItem` and `keyExtractor` props.

#### Step 5: Create Two-Column Layout
Add `numColumns={2}` and `columnWrapperStyle` to create a two-column layout, and update the card styles to use flex for even distribution.

#### Step 6: Add Pokémon ID Display
Enhance the card to show Pokémon ID with proper formatting using `padStart(3, "0")`, and add styles for the ID badge with purple background and white text.

#### Step 7: Add Interactive Pressable
Import `Pressable` and `Alert`, then replace the `View` with `Pressable` to make cards interactive, showing an alert when pressed.

#### Step 8: Enhance Card Design with Background Section
Add a background section to the card with a light purple background, proper aspect ratio, and rounded corners, separating the ID area from the name area.

#### Step 9: Add React Native Shadows
Add shadow properties to the `pokemonCard` style including iOS shadow properties (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`) and Android elevation.

#### Step 10: Improve Layout Structure
Separate header and content areas by wrapping the title in a header `View` and adding `contentContainerStyle` to the `FlatList` for better spacing and organization.

### Deliverables

Complete all 10 steps to build the pokemon.tsx component:

1. ✅ Create basic screen structure with SafeAreaView and title
2. ✅ Add Pokémon data array with 10 Pokémon entries
3. ✅ Create simple Pokémon card using View and Text components
4. ✅ Implement FlatList to display multiple Pokémon
5. ✅ Create two-column layout with evenly distributed spacing
6. ✅ Add Pokémon ID display with proper formatting (padStart)
7. ✅ Make cards interactive using Pressable with Alert functionality
8. ✅ Enhance card design with background sections and improved styling
9. ✅ Add React Native shadows for iOS and Android platforms
10. ✅ Improve layout structure with separate header and content areas