# Exercise 2: Clean up with ESLint and TypeScript

### Objective
You built something. Now clean it up. Turn on the two checks that must be green for the final assignment, and get the whole project to zero: your code from exercise 1 and the template. From now on, every exercise ends with these two commands.

> **Behind, or no project?** Start from the [exercise 2 starter](./starters/exercise-2/).

### Requirements

1. `npx expo lint` reports zero problems.
2. `npx tsc --noEmit` reports zero errors.
3. No hex code outside `src/constants/theme.ts`.
4. You understand every message you fixed.

### Steps to Complete

1. **Run ESLint.** The first time, Expo asks to install and configure ESLint. Say yes. It adds `eslint.config.js` and two dev dependencies.

   ```bash
   npx expo lint
   ```

   > **📚 Reference:** [Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/)

2. **Run the type checker.** TypeScript is already set up. This checks all files without building anything.

   ```bash
   npx tsc --noEmit
   ```

   > **💡 Hint:** Errors about `.css` files? Run `npx expo start` once. It creates `expo-env.d.ts` with the missing types.

   > **📚 Reference:** [TypeScript in Expo](https://docs.expo.dev/guides/typescript/)

3. **Read the messages.** Which ones are in your code from exercise 1, which ones in the template? Which tool found which problem? No messages in your own code? Break something on purpose: add an unused import to `src/app/index.tsx` and add `<Text style={{ fontSize: 'big' }}>Test</Text>` to the screen. Run both commands again.

4. **Ask Copilot what a message means.** Open Copilot Chat (Ask mode) and paste one message: *"What does this mean and why does it happen on this line?"* Read the answer, then fix it **yourself**. Copilot explains, you type.

   > **📚 Reference:** [Copilot Chat](https://code.visualstudio.com/docs/copilot/chat/copilot-chat)

5. **Get to zero.** Fix everything until both commands are clean. The template has problems of its own:

   > **💡 Hint:** `src/hooks/use-color-scheme.web.ts` gives a `set-state-in-effect` error. A `.web.ts` file only runs in a browser. We build for phones, so you may delete it.

   Also add `".expo/*"` to `ignores` in `eslint.config.js`. Expo generates the files in `.expo/`, you do not lint them. Without this line you get a warning about `.expo/types/router.d.ts` later.

6. **Find the loose hex codes.** ESLint does not check this rule. You do. Search the `src/` folder for `'#`. The only hits must be in `src/constants/theme.ts`.

   > **💡 Hint:** The template has two of its own: `#3c87f7` in `src/components/themed-text.tsx` and `#208AEF` in `src/components/animated-icon.tsx`. Move them to the theme too. They sit inside `StyleSheet.create()`, where `useTheme()` does not work. Export a constant from `theme.ts`, for example `export const Brand = { link: '#3c87f7' }`, and import it.

   > **💡 Hint:** The gradient in `animated-icon.tsx` (between backticks) and the one in `animated-icon.module.css` belong to the splash animation of the template. You may leave them.

7. **Install the VS Code ESLint extension.** Then you see problems while typing instead of at commit time.

   > **📚 Reference:** [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

8. **Commit.** Message: `Exercise 2: clean up`.

### What happens natively

Nothing, and that is the point. Lint and tsc run on your laptop, on your code. The phone never sees them: Metro removes the types when it bundles your JavaScript. So a type error does not crash the app. It is a warning that you get before your users do.

### Done when

- ✅ `npx expo lint` and `npx tsc --noEmit` both report nothing
- ✅ No hex code outside `src/constants/theme.ts`
- ✅ You can explain the difference between a lint problem and a type error
- ✅ Committed and pushed
