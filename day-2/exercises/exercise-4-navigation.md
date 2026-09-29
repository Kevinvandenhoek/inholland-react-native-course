# Exercise 4: Navigation

### Objective
Go from list to detail with a stack, and add a Bag tab. Both list screens reuse one component.

<video src="../assets/items-navigation.mp4" width="320" controls loop muted autoplay></video>

Autocomplete is allowed, Copilot Chat is not. Keep the rules: read before you paste, no hex codes outside the theme, lint and tsc clean.

> **Behind, or no project?** Start from the [exercise 4 starter](./starters/exercise-4/).

### Requirements

1. `src/components/item-list.tsx`: the list from exercise 3 as a reusable component with an `items: Item[]` prop.
2. Two tabs: **Items** (all) and **Bag** (for now: the first two).
3. `src/app/item/[id].tsx`: a detail screen that opens when you press a row, with a working back button.

The template has only tabs. You add a stack around them:

```
src/app/
├── _layout.tsx           Stack (new)
├── (tabs)/               (new folder)
│   ├── _layout.tsx       Tabs: shows AppTabs
│   ├── index.tsx         → /            ItemList (all)
│   └── bag.tsx           → /bag         ItemList (first two)
└── item/
    └── [id].tsx          → /item/17     Detail
```

> **📚 Reference:** [Expo Router: Stack](https://docs.expo.dev/router/advanced/stack/) · [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/) · [Nesting navigators](https://docs.expo.dev/router/advanced/nesting-navigators/)

### Steps to Complete

1. **Extract the list.** Move the `FlatList` from `index.tsx` into `src/components/item-list.tsx`. Props: `items: Item[]`. The row's `onPress` now navigates:

   ```tsx
   import { router } from 'expo-router';

   router.push(`/item/${item.id}`);
   ```

   > **📚 Reference:** [Navigating between pages](https://docs.expo.dev/router/basics/navigation/)

2. **Put the tabs in a group.** Create the folder `src/app/(tabs)/` and move `index.tsx` into it. Then create `src/app/(tabs)/_layout.tsx`:

   ```tsx
   import AppTabs from '@/components/app-tabs';

   export default function TabLayout() {
     return <AppTabs />;
   }
   ```

   The parentheses make `(tabs)` a group: it is not part of the URL. `/` still opens `index.tsx`.

3. **Make the root a stack.** In `src/app/_layout.tsx`, replace `<AppTabs />` with a `Stack`. Import `Stack` from `expo-router` and remove the `AppTabs` import.

   ```tsx
   <Stack>
     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     <Stack.Screen
       name="item/[id]"
       options={{ title: 'Item', headerBackButtonDisplayMode: 'minimal' }}
     />
   </Stack>
   ```

   `headerBackButtonDisplayMode: 'minimal'` shows only the arrow. Without it, the back button says "(tabs)".

4. **Bag tab.** Create `src/app/(tabs)/bag.tsx` with the same layout as `index.tsx`, title "Bag", and `itemData.slice(0, 2)`. Add a trigger for it in `src/components/app-tabs.tsx`:

   ```tsx
   <NativeTabs.Trigger name="bag">
     <NativeTabs.Trigger.Label>Bag</NativeTabs.Trigger.Label>
     <NativeTabs.Trigger.Icon sf="bag.fill" md="shopping_bag" />
   </NativeTabs.Trigger>
   ```

   `sf` is the icon on iOS (SF Symbols), `md` the icon on Android (Material Symbols). On day 3 the bag is saved on the phone, with SQLite.

5. **Detail screen.** Create `src/app/item/[id].tsx`.
   - Read the parameter: `const { id } = useLocalSearchParams<{ id: string }>()`. It is always a string.
   - Look up the item: `itemData.find((i) => i.id === Number(id))`.
   - Not found? Show a short message instead of crashing.
   - Show name, id, category and effect. The category gets a badge with a token colour.
   - Bonus: set the header title to the item's name with `<Stack.Screen options={{ title: item.name }} />` inside the screen.

   > **📚 Reference:** [Dynamic routes](https://docs.expo.dev/router/basics/notation/#square-brackets) · [useLocalSearchParams](https://docs.expo.dev/router/reference/hooks/#uselocalsearchparams) · [Stack: configure header](https://docs.expo.dev/router/advanced/stack/#configure-header-bar)

6. **Test on your phone.** Press a row, the detail slides in. Swipe from the left edge (iOS) or use the back gesture (Android). Switch tabs and back: the tab remembers where you were.

7. **Lint, tsc, commit.** Message: `Exercise 4: navigation`.

   > **💡 Hint:** `tsc` says ``'/item/${number}'`` is not assignable? Expo Router checks your links against your routes, and it updates that list while `npx expo start` runs. Start it, wait a few seconds, run `tsc` again.

### What happens natively

The stack is a real `UINavigationController` on iOS and a fragment stack on Android. The header, the back button, the slide animation and the swipe-back gesture are drawn and handled by the platform. `NativeTabs` is the system tab bar: `UITabBarController` on iOS, the Material bottom bar on Android. That is why it feels right, and why you did not have to build any of it.

### Done when

- ✅ `ItemList` used by both tabs
- ✅ Row → detail → back works, including swipe back
- ✅ Unknown ID shows a message, no crash
- ✅ Lint and tsc clean, committed and pushed
