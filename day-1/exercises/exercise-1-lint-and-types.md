# Exercise 1: ESLint and TypeScript

### Objective
Turn on the two checks that must be green for the final assignment, and get your project clean. From now on, every exercise ends with these two commands.

### Requirements

1. `npx expo lint` reports zero problems.
2. `npx tsc --noEmit` reports zero errors.
3. You understand every message you fixed.

### Steps to Complete

1. **Run ESLint.** The Expo template ships with ESLint configured (`eslint.config.js`).

   ```bash
   npx expo lint
   ```

   > **📚 Reference:** [Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/)

2. **Run the type checker.** TypeScript is already set up. This checks all files without building anything.

   ```bash
   npx tsc --noEmit
   ```

   > **📚 Reference:** [TypeScript in Expo](https://docs.expo.dev/guides/typescript/)

3. **Break something on purpose.** Add an unused import to `app/(tabs)/index.tsx` and give a `<Text>` a `fontSize` of `'big'`. Run both commands again. Read the two messages: which tool found which problem?

4. **Ask Copilot what a message means.** Open Copilot Chat (Ask mode) and paste one message: *"What does this mean and why does it happen on this line?"* Read the answer, then fix it **yourself**. Copilot explains, you type.

   > **📚 Reference:** [Copilot Chat](https://code.visualstudio.com/docs/copilot/chat/copilot-chat)

5. **Get to zero.** Fix everything until both commands are clean. Also the things you did not break yourself, if any.

6. **Install the VS Code ESLint extension.** Then you see problems while typing instead of at commit time.

   > **📚 Reference:** [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

7. **Commit.** Message: `Exercise 1: lint and types clean`.

### Done when

- ✅ `npx expo lint` and `npx tsc --noEmit` both report nothing
- ✅ You can explain the difference between a lint problem and a type error
- ✅ Committed and pushed
