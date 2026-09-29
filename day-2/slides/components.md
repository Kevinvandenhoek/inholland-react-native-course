---
marp: true
theme: default
class: invert
---

# Components

---

# Pressable

```tsx
<Pressable onPress={() => router.push('/item/1')}>
  {({ pressed }) => (
    <View style={{ opacity: pressed ? 0.6 : 1 }}>…</View>
  )}
</Pressable>
```

- Touch, not click. `onPress`, `onLongPress`, `pressed` state.
- No hover. Show feedback yourself.
- **Native:** the touches come from the OS. React Native decides in JavaScript who gets them. Start to scroll, and the press is cancelled.

---

# ScrollView vs FlatList

| ScrollView | FlatList |
|---|---|
| Renders **all** children at once | Renders only what is **near the screen** |
| Fine for a form or a detail page | For lists: 10 items or 10.000 |
| `<ScrollView>{items.map(…)}</ScrollView>` | `<FlatList data={items} renderItem={…} keyExtractor={…} />` |

**Native:** both are a `UIScrollView` / `ScrollView`. FlatList removes the rows that are far off screen and adds them again when you scroll back. That is why it stays fast.

---

# FlatList in one slide

```tsx
<FlatList
  data={items}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => <ItemRow item={item} />}
  contentContainerStyle={{ gap: 8 }}
/>
```

Two required props: `data` and `renderItem`. Add `keyExtractor`, so every row has a fixed key. The rest is layout.

---

# Next: exercise 3

**Components, twice.** First an `ItemRow` by hand. Then let Copilot Chat build the list. Then: what did it do differently?

`day-2/exercises/exercise-3-components.md`
