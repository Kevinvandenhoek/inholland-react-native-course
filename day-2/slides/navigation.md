---
marp: true
theme: default
class: invert
---

# Navigation

---

# Files are routes

```
src/app/
├── _layout.tsx           root: a Stack
├── (tabs)/
│   ├── _layout.tsx       the tab bar
│   ├── index.tsx         → /            All items
│   └── bag.tsx           → /bag         Bag
└── item/
    └── [id].tsx          → /item/17     Detail
```

- A file is a screen. A `_layout.tsx` makes its folder a navigator.
- `(tabs)` in parentheses: a group, not part of the URL.
- `[id]`: a dynamic segment.
- The template has no Stack and no `(tabs)`. You build this in exercise 4.

---

# Tabs and stack

<style scoped>pre { font-size: 0.7em; }</style>

```tsx
// src/components/app-tabs.tsx, shown by src/app/(tabs)/_layout.tsx
<NativeTabs>
  <NativeTabs.Trigger name="index">
    <NativeTabs.Trigger.Label>Items</NativeTabs.Trigger.Label>
  </NativeTabs.Trigger>
  <NativeTabs.Trigger name="bag">
    <NativeTabs.Trigger.Label>Bag</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon sf="bag.fill" md="shopping_bag" />
  </NativeTabs.Trigger>
</NativeTabs>
```

```tsx
// src/app/_layout.tsx
<Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name="item/[id]" options={{ title: 'Item' }} />
</Stack>
```

The tabs live **inside** the stack. Detail pushes on top of the tabs.

---

# Navigating

```tsx
import { Link, router } from 'expo-router'

<Link href={`/item/${item.id}`}>…</Link>        // declarative

<Pressable onPress={() => router.push(`/item/${item.id}`)}>  // imperative
```

```tsx
// src/app/item/[id].tsx
import { useLocalSearchParams } from 'expo-router'

const { id } = useLocalSearchParams<{ id: string }>()   // always a string
const item = itemData.find((i) => i.id === Number(id))
```

---

# This is native navigation

<video src="../assets/items-navigation.mp4" autoplay loop muted style="position:absolute; right:40px; top:40px; height:calc(100% - 80px); border-radius:12px;"></video>

<div style="width:55%">

- The stack is a real `UINavigationController` / Fragment stack.
- The header, the back button, the slide animation: the platform draws them.
- **Swipe back works** because it is not a web page pretending.
- `NativeTabs` is the system tab bar. Switching tabs keeps each tab's state.

</div>

---

# Next: exercise 4

List → detail via `/item/[id]`, plus a Bag tab.

Data is still a hardcoded array. **Day 3:** real data from PokeAPI.

Autocomplete is allowed. Finish with `npx expo lint` and `npx tsc --noEmit`.

---

# Homework

- Finish exercises 1 to 4. Lint and tsc clean.
- Search: a `TextInput` above the list that filters the items by name.
- **Own idea for the final assignment?** Fill in the [idea note](https://github.com/kevinvandenhoek/inholland-react-native-course/blob/main/day-2/templates/idea.md) ([example](https://github.com/kevinvandenhoek/inholland-react-native-course/blob/main/day-2/templates/idea-example.md)) and post it in Teams **before day 3**. On day 3 you hear if it is suitable.
- Pokédex or battle simulator? No need to tell me.
