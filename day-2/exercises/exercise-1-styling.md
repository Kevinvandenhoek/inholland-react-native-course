# Exercise 1: Styling and theming

### Objective
Build the Items screen and give the app its look, with every colour defined once in a theme file.

Today you build a catalogue of Pokémon items: Poké Balls, potions, candy. On day 3 the data comes live from PokeAPI.

You work in your `Pokedex` project from day 1.

**By hand. No Copilot Chat in this exercise.** Autocomplete is fine.

<img src="../assets/items-step-1.png" alt="Items tab" width="320"/>

**The design colours:**

| Token | Light | Dark | For |
|---|---|---|---|
| `text` | `#22303C` | `#F2F4F5` | titles and text |
| `background` | `#F5F2EC` | `#171A1D` | screen background |
| `card` | `#FFFFFF` | `#202529` | rows (exercise 3) |
| `badge` | `#2E7D5B` | `#347A59` | category badge (exercise 3) |
| `badgeText` | `#FFFFFF` | `#FFFFFF` | text in the badge |

> **Behind, or no project?** Start from the [exercise 1 starter](./starters/exercise-1/).

### Requirements

1. The first tab is called **Items** and shows the title "All items" on the design background colour.
2. All colours, spacing and radii live in `src/constants/theme.ts`. **No hex code in your own code.**
3. Content respects the safe area (notch, status bar).

### Steps to Complete

1. **Clean up the template.**
   - Delete `src/app/explore.tsx`.
   - In `src/components/app-tabs.tsx`, delete the `<NativeTabs.Trigger name="explore">` block.
   - Change the label of the `index` tab from `Home` to `Items`.
   - Delete `src/components/app-tabs.web.tsx`. It is the tab bar for the browser, and it still links to `/explore`.

   Run the app: one tab left.

   > **📚 Reference:** [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/)

2. **Extend the theme.** Open `src/constants/theme.ts`.
   - `Colors.light` and `Colors.dark` are already there. `text` and `background` exist already: change their values to the Light column above. Add the new keys `card`, `badge` and `badgeText`.
   - Do the same in `dark`, with the values from the Dark column. The template picks `light` or `dark` from the setting of your phone, so both need every key. Leave the other keys from the template as they are.
   - `Spacing` is already there too (`Spacing.two` is 8, `Spacing.three` is 16). Use it.
   - Add radius tokens:

   ```ts
   export const Radius = { s: 8, m: 12, l: 16 } as const;
   ```

   Name tokens after their **purpose** (`card`, `badge`), not their colour (`green`).

   > **📚 Reference:** [Naming tokens in design systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

3. **Build the screen.** Replace the content of `src/app/index.tsx`: a `SafeAreaView` from `react-native-safe-area-context` with `edges={['top']}`, with a `Text` for the title, styled with `StyleSheet.create()`. Read colours with `const theme = useTheme()` from `@/hooks/use-theme` (in the template), then `theme.background` and `theme.text`. Spacing and radius come straight from `Spacing` and `Radius`.

   > **📚 Reference:** [StyleSheet](https://reactnative.dev/docs/stylesheet) · [SafeAreaView](https://appandflow.github.io/react-native-safe-area-context/api/safe-area-view)

4. **Commit.** Message: `Exercise 1: Items screen and theme`. Cleaning up comes in exercise 2.

### What happens natively

The `SafeAreaView` becomes a `UIView` / `android.view.View`; the `Text` a native text view. The safe area insets come from the OS, which is why they differ between an iPhone with a notch and an Android phone without one.

### Done when

- ✅ One tab, "Items", with the title on the design background
- ✅ `src/constants/theme.ts` holds every colour, spacing and radius
- ✅ No hex code in the code you wrote
- ✅ Committed and pushed
