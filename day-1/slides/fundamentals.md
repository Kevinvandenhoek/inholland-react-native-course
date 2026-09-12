---
marp: true
theme: default
class: invert
---

# Fundamentals
## Part 1: components, styling, theming

---

![bg fit](../../day-0/assets/under-the-hood.svg)

---

# Remember this picture

Every component you write today becomes a **real native view**.

Ask yourself at every slide: *what happens natively here?*

---

# View

```tsx
<View style={{ flex: 1, padding: 16 }}>
  {/* children */}
</View>
```

- The `<div>` of React Native. Layout and grouping, nothing else.
- Flexbox by default, column direction.
- **Native:** `UIView` on iOS, `android.view.View` on Android.

---

# Text

```tsx
<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bulbasaur</Text>
```

- All text goes inside `<Text>`. A loose string inside a `<View>` crashes.
- Text styles do not cascade from a `<View>`. Nested `<Text>` inherits.
- **Native:** `UILabel` / `TextView`. The platform renders the font.

---

# Pressable

```tsx
<Pressable onPress={() => router.push('/pokemon/1')}>
  {({ pressed }) => (
    <View style={{ opacity: pressed ? 0.6 : 1 }}>…</View>
  )}
</Pressable>
```

- Touch, not click. `onPress`, `onLongPress`, `pressed` state.
- No hover. Show feedback yourself.
- **Native:** the platform's touch system. Scroll and press do not fight each other.

---

# ScrollView vs FlatList

| ScrollView | FlatList |
|---|---|
| Renders **all** children at once | Renders only what is **on screen** |
| Fine for a form or a detail page | For lists: 10 items or 10.000 |
| `<ScrollView>{items.map(…)}</ScrollView>` | `<FlatList data={items} renderItem={…} keyExtractor={…} />` |

**Native:** both are a `UIScrollView` / `RecyclerView`. FlatList **reuses** the rows that scroll off screen. That is why it stays fast.

---

# FlatList in one slide

```tsx
<FlatList
  data={pokemon}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => <PokemonCard pokemon={item} />}
  numColumns={2}
  columnWrapperStyle={{ gap: 16 }}
  contentContainerStyle={{ padding: 16, gap: 16 }}
/>
```

Three required props: `data`, `renderItem`, `keyExtractor`. The rest is layout.

---

# StyleSheet

```tsx
const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
})

<View style={styles.card} />
<View style={[styles.card, { opacity: 0.5 }]} />   // combine
```

- A subset of CSS as objects. Numbers, no units.
- Flexbox everywhere: `flex`, `flexDirection`, `gap`, `alignItems`, `justifyContent`.
- Shadows: `shadow*` on iOS, `elevation` on Android.

---

# Safe areas

![bg right fit](../assets/pokemon-page-step-1.png)

The notch, the status bar, the home indicator. Your content must not sit under them.

```tsx
import { SafeAreaView } from 'react-native-safe-area-context'

<SafeAreaView style={{ flex: 1 }}>…</SafeAreaView>
```

Already installed in the Expo template. **Native:** the platform tells you the insets; they differ per phone.

---

# Theming: the problem

```tsx
backgroundColor: '#5B3DF5'   // in pokemon-card.tsx
backgroundColor: '#5B3DF5'   // in favorites.tsx
backgroundColor: '#5b3df5'   // in [id].tsx, slightly different
```

Change the brand colour: search 14 files. Dark mode: impossible.

---

# Theming: design tokens

<style scoped>pre { font-size: 0.72em; }</style>

One file. Every colour, spacing and radius has a **name**.

```ts
// constants/theme.ts (extend the one from the template)
export const Colors = {
  light: {
    text: '#1D1F4A',
    background: '#E8F0FE',
    card: '#FFFFFF',
    badge: '#5B3DF5',
    badgeText: '#FFFFFF',
  },
  dark: { /* same keys, darker values. Later. */ },
}

export const Spacing = { xs: 4, s: 8, m: 16, l: 24 }
export const Radius = { s: 8, m: 12, l: 16 }
```

Values come from **Figma**. Names come from **what it is for**, not what it looks like: `badge`, not `purple`.

---

# Theming: using tokens

<style scoped>pre { font-size: 0.75em; }</style>

```tsx
import { Colors, Spacing, Radius } from '@/constants/theme'
import { useThemeColor } from '@/hooks/use-theme-color'

const styles = StyleSheet.create({
  card: {
    padding: Spacing.m,
    borderRadius: Radius.m,
  },
})

// colour depends on light / dark, so read it with the hook
const card = useThemeColor({}, 'card')
<View style={[styles.card, { backgroundColor: card }]} />
```

**Rule for this course:** no hex code outside `constants/theme.ts`. ESLint will not catch it. Your reviewer will.

---

# Lint and types

```bash
npx expo lint          # ESLint: style, unused imports, hook rules
npx tsc --noEmit       # TypeScript: does every type line up?
```

- Both are in the template. Both must be **zero** for the final assignment.
- From today: run both before every commit.
- Message you do not understand? Paste it in Copilot Chat: *"what does this mean and why does it happen here?"* Then fix it yourself.

---

# Exercise 2 and 3

**2. Styling and theming.** Pokémon tab, colours from Figma in `theme.ts`. By hand, no chat.

**3. Components, twice.** First a `PokemonCard` by hand. Then let Copilot Chat build the grid. Then: what did it do differently?

---

# Fundamentals
## Part 2: navigation

---

# Files are routes

```
app/
├── _layout.tsx           root: a Stack
├── (tabs)/
│   ├── _layout.tsx       the tab bar
│   ├── index.tsx         → /            All Pokémon
│   └── favorites.tsx     → /favorites   Favorites
└── pokemon/
    └── [id].tsx          → /pokemon/25  Detail
```

- A file is a screen. A folder with `_layout.tsx` is a navigator.
- `(tabs)` in parentheses: a group, not part of the URL.
- `[id]`: a dynamic segment.

---

# Tabs and stack

```tsx
// app/(tabs)/_layout.tsx
<Tabs screenOptions={{ tabBarActiveTintColor: tint }}>
  <Tabs.Screen name="index" options={{ title: 'Pokémons' }} />
  <Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
</Tabs>
```

```tsx
// app/_layout.tsx
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="pokemon/[id]" options={{ title: 'Pokémon' }} />
</Stack>
```

The tabs live **inside** the stack. Detail pushes on top of the tabs.

---

# Navigating

```tsx
import { Link, router } from 'expo-router'

<Link href={`/pokemon/${pokemon.id}`}>…</Link>        // declarative

<Pressable onPress={() => router.push(`/pokemon/${pokemon.id}`)}>  // imperative
```

```tsx
// app/pokemon/[id].tsx
import { useLocalSearchParams } from 'expo-router'

const { id } = useLocalSearchParams<{ id: string }>()   // always a string
const pokemon = pokemonData.find((p) => p.id === Number(id))
```

---

# This is native navigation

<video src="../assets/stack-navigation.mp4" autoplay loop muted style="position:absolute; right:40px; top:40px; height:calc(100% - 80px); border-radius:12px;"></video>

<div style="width:55%">

- The stack is a real `UINavigationController` / Fragment stack.
- The header, the back button, the slide animation: the platform draws them.
- **Swipe back works** because it is not a web page pretending.
- A tab bar is a native tab bar. Switching tabs keeps each tab's state.

</div>

---

# Exercise 4

List → detail via `/pokemon/[id]`, plus a Favorites tab.

Data is still a hardcoded array. **Day 2:** real data from PokeAPI.

Autocomplete is allowed. Finish with `npx expo lint` and `npx tsc --noEmit`.
