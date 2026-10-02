---
marp: true
theme: default
class: invert
---

# Data Flow & Debugging

- Catch up: build the item app together
- Five kinds of state
- TanStack Query: live data from PokeAPI
- Saving on the phone: SQLite
- Debugging, then **agent mode** for the first time
- At the end: a look at day 4

---

# Recap day 2

- `npx expo lint` and `npx tsc --noEmit`: no errors after every exercise.
- View, Text, Pressable, FlatList: each one becomes a native view.
- Theming: colors and spacing as tokens in `src/constants/theme.ts`.
- Expo Router: files are routes, tabs in a stack, `/item/[id]`.

---

# Catch up: build it together

Everyone starts from the same point. We build it step by step:

1. A second tab: Bag
2. The data
3. A row
4. The list
5. A stack around the tabs
6. A detail screen

At the end, everyone has the same working app. That is the start for today.

---

# Start

<style scoped>section { font-size: 24px; }</style>

1. Get the course repo: `git clone https://github.com/Kevinvandenhoek/inholland-react-native-course.git`, or **Code → Download ZIP**.
2. Copy `day-2/exercises/starters/exercise-3/` to your own place. Name it `Pokedex-day-3`.
3. In that folder:

   ```bash
   npm install
   npx expo start
   ```

4. Scan the QR code. You see "All items" and one tab.
5. Put it in git:

   ```bash
   git init && git add . && git commit -m "Start from the exercise 3 starter"
   ```

Your own project from day 2 is not lost. Keep it.

---

# Step 1: a second tab

<style scoped>section { font-size: 22px; }</style>

`src/app/bag.tsx`: copy `index.tsx`, rename the function to `BagScreen`, title "Bag".

`src/components/app-tabs.tsx`, below the first trigger:

```tsx
<NativeTabs.Trigger name="bag">
  <NativeTabs.Trigger.Label>Bag</NativeTabs.Trigger.Label>
  <NativeTabs.Trigger.Icon sf="bag.fill" md="shopping_bag" />
</NativeTabs.Trigger>
```

- `name` is the file name: `bag` → `bag.tsx`.
- `sf` is the icon on iOS (SF Symbols), `md` on Android (Material Symbols).

**Check:** two tabs, you can switch.

---

# Step 2: the data

<style scoped>section { font-size: 22px; }</style>

`src/constants/items.ts`. You can copy it from [day 2, exercise 3](https://github.com/Kevinvandenhoek/inholland-react-native-course/blob/main/day-2/exercises/exercise-3-components.md).

```ts
export type Item = { id: number; name: string; category: string; effect: string };

export const itemData: Item[] = [
  { id: 1, name: 'Master Ball', category: 'standard-balls', effect: 'Catches a wild Pokémon every time.' },
  // ... ten items
];
```

The ids and texts are the real ones from PokeAPI. Today you fetch them live.

---

# Step 3: the row

<style scoped>section { font-size: 18px; }</style>

`src/components/item-row.tsx`

```tsx
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Item } from '@/constants/items';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = { item: Item; onPress: () => void };

export function ItemRow({ item, onPress }: Props) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, { backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 }]}>
      <View style={styles.text}>
        <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
        <Text style={{ color: theme.textSecondary }}>{item.effect}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: theme.badge }]}>
        <Text style={{ color: theme.badgeText }}>{item.category}</Text>
      </View>
    </Pressable>
  );
}
```

---

# Step 3: the row (styles)

<style scoped>section { font-size: 22px; }</style>

Same file, at the bottom:

```tsx
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Radius.m,
    boxShadow: '0 1px 4px rgba(34, 48, 60, 0.12)',
  },
  text: { flex: 1, gap: Spacing.one },
  name: { fontSize: 17, fontWeight: 'bold' },
  badge: { paddingHorizontal: Spacing.two, paddingVertical: Spacing.half, borderRadius: Radius.s },
});
```

Use the tokens from `theme.ts`, not hex codes.

---

# Step 4: the list

<style scoped>section { font-size: 22px; }</style>

`src/components/item-list.tsx`

```tsx
import { FlatList } from 'react-native';

import { ItemRow } from '@/components/item-row';
import { Item } from '@/constants/items';
import { Spacing } from '@/constants/theme';

export function ItemList({ items }: { items: Item[] }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ gap: Spacing.two, paddingBottom: Spacing.three }}
      renderItem={({ item }) => <ItemRow item={item} onPress={() => console.log(item.id)} />}
    />
  );
}
```

Below the title: `<ItemList items={itemData} />` in `index.tsx`, `<ItemList items={itemData.slice(0, 2)} />` in `bag.tsx`.

**Check:** both tabs show rows. Press a row: the id shows in the terminal.

---

# Step 5: a stack around the tabs

<style scoped>section { font-size: 22px; }</style>

```
src/app/
├── _layout.tsx           Stack (was: AppTabs)
├── (tabs)/               new folder
│   ├── _layout.tsx       new: shows AppTabs
│   ├── index.tsx         moved
│   └── bag.tsx           moved
└── item/
    └── [id].tsx          step 6
```

`src/app/(tabs)/_layout.tsx`:

```tsx
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  return <AppTabs />;
}
```

`(tabs)` is a group: the parentheses keep it out of the URL. `/` still opens `index.tsx`.

---

# Step 5: the root is a stack

<style scoped>section { font-size: 22px; }</style>

`src/app/_layout.tsx`: import `Stack` from `expo-router`, remove the `AppTabs` import, and replace `<AppTabs />` with:

```tsx
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen
    name="item/[id]"
    options={{ title: 'Item', headerBackButtonDisplayMode: 'minimal' }}
  />
</Stack>
```

- `headerShown: false`: the tabs have no header of their own.
- `'minimal'`: the back button shows only the arrow, not "(tabs)".

**Check:** the app looks the same as before. Stuck? `npx expo start --clear`.

---

# Step 6: the detail screen

<style scoped>section { font-size: 20px; }</style>

`src/app/item/[id].tsx`

```tsx
import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { itemData } from '@/constants/items';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function ItemDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const item = itemData.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Item {id} not found.</Text>
      </View>
    );
  }
```

Not found? A short message, no crash.

---

# Step 6: the detail screen (render)

<style scoped>section { font-size: 20px; }</style>

Same file, below the `if`:

```tsx
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Stack.Screen options={{ title: item.name }} />
      <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
      <Text style={{ color: theme.textSecondary }}>#{item.id}</Text>
      <View style={[styles.badge, { backgroundColor: theme.badge }]}>
        <Text style={{ color: theme.badgeText }}>{item.category}</Text>
      </View>
      <Text style={[styles.effect, { color: theme.text }]}>{item.effect}</Text>
    </View>
  );
}
```

---

# Step 6: styles, and open it

<style scoped>section { font-size: 22px; }</style>

Same file, at the bottom:

```tsx
const styles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.three, gap: Spacing.two },
  name: { fontSize: 28, fontWeight: 'bold' },
  badge: { alignSelf: 'flex-start', paddingHorizontal: Spacing.two, paddingVertical: Spacing.half, borderRadius: Radius.s },
  effect: { fontSize: 17, marginTop: Spacing.two },
});
```

In `item-list.tsx`, replace the `console.log` with:

```tsx
import { router } from 'expo-router';

onPress={() => router.push(`/item/${item.id}`)}
```

**Check:** press a row, the detail slides in. Swipe back works.

---

# Done: check and commit

```bash
npx expo lint
npx tsc --noEmit
git add . && git commit -m "Catch up: tabs, list, stack, detail"
```

- `tsc` says `'/item/${number}'` is not assignable? Keep `npx expo start` running for a few seconds, then run `tsc` again.
- Push to a new repo on GitHub.

This project is the start for all exercises today. Did not get there? Copy `day-3/exercises/starters/exercise-1/`.
