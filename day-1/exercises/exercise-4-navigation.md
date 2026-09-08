# Exercise 4: Navigation - Pokemon List and Detail Screens

### Objective
Build a complete Pokemon list interface with navigation to detail screens, implementing both tab navigation and stack navigation patterns in your Pokedex app.

<video src="../assets/stack-navigation.mp4" width="320" controls loop muted autoplay></video>

### Overview
This exercise focuses on creating a functional Pokemon list that displays Pokemon data in a grid layout, with navigation to individual Pokemon detail screens. You'll implement both the "All Pokemon" tab and "Favorites" tab, each showing Pokemon lists that navigate to detailed views.

### Requirements

#### 1. Pokemon List Component
- Create a reusable `PokemonList` component that displays Pokemon in a 2-column grid
- Implement Pokemon cards with Pokemon ID, name, and visual styling
- Add touch interactions for navigation to detail screens
- Use FlatList for efficient rendering of Pokemon data

#### 2. Tab Navigation Implementation
- **All Pokemon Tab**: Display complete Pokemon list from data source
- **Favorites Tab**: Display filtered Pokemon list (e.g., first 2 Pokemon as favorites)

#### 3. Stack Navigation for Pokemon Details
- Create dynamic Pokemon detail screen using route parameters
- Implement navigation from Pokemon list items to detail screens
- Handle Pokemon data lookup and display
- Add proper back navigation from detail screens

> **📚 Reference:** [Expo Router Stack Navigation](https://docs.expo.dev/router/advanced/stack/)
> **📚 Reference:** [Expo Router Tabs](https://docs.expo.dev/router/advanced/tabs/)
> **📚 Reference:** [Expo Router Nested Navigation](https://docs.expo.dev/router/advanced/nesting-navigators/)

### Technical Implementation

#### Pokemon List Component Structure
```typescript
// PokemonList component should include:
- FlatList with numColumns={2} for grid layout
- Pokemon cards with Pressable for navigation
- Pokemon ID display with proper formatting
- Pokemon name display
- Navigation to /pokemon/[id] route
```

#### Navigation Structure
```
Tabs Navigation:
├── index (All Pokemon)
│   └── PokemonList (all data)
└── favorites (Favorites)
    └── PokemonList (filtered data)

Stack Navigation:
└── pokemon/
    └── [id] (Dynamic Pokemon Detail)
```

#### Pokemon Data Structure
```typescript
interface Pokemon {
  id: number;
  name: string;
  type: string;
}
```

### Steps to Complete

#### Step 1: Build PokemonList Component
1. Create `components/ui/pokemon-list.tsx`
2. Implement FlatList with 2-column grid layout
3. Create Pokemon card design with:
   - Pokemon ID badge
   - Pokemon name
   - Card styling with shadows and borders
4. Add Pressable navigation to Pokemon detail screen
5. Use proper TypeScript types for props

#### Step 2: Implement Tab Screens
1. **All Pokemon Tab (`app/(tabs)/index.tsx`)**:
   - Import PokemonList component
   - Pass complete Pokemon data
   - Add page title "All Pokémon"
   - Implement proper styling

2. **Favorites Tab (`app/(tabs)/favorites.tsx`)**:
   - Import PokemonList component
   - Pass filtered Pokemon data (e.g., first 2 Pokemon)
   - Add page title "Favorites"
   - Use same styling as All Pokemon tab

#### Step 3: Create Pokemon Detail Screen
1. Create `app/pokemon/[id].tsx` for dynamic routing
2. Implement Pokemon lookup by ID from route parameters
3. Display Pokemon information:
   - Pokemon name and ID
   - Pokemon type with color-coded badge
   - Proper error handling for invalid Pokemon IDs
4. Add navigation back to previous screen

### Deliverables

1. ✅ **PokemonList Component**: Reusable component with 2-column grid layout
2. ✅ **All Pokemon Tab**: Complete Pokemon list with navigation to details
3. ✅ **Favorites Tab**: Filtered Pokemon list with same navigation functionality
4. ✅ **Pokemon Detail Screen**: Dynamic screen showing individual Pokemon information
5. ✅ **Navigation Configuration**: Proper tab and stack navigation setup
6. ✅ **Navigation Flow**: Complete user journey from list to detail and back