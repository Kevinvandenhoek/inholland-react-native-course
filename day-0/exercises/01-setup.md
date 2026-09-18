# Exercise 1: Setup

### Objective
Get your tools working and create the Pokédex app you will build on for the rest of the course.

### Requirements

1. GitHub Copilot works in VS Code (tests A, B and C).
2. Node.js LTS is installed.
3. A new Expo project called `Pokedex` runs on your phone in Expo Go.

### Steps to Complete

1. **Check Copilot.** Open a new folder in VS Code, create `test.js` and run the three tests:
   - **A:** type `// function that adds two numbers`, press Enter. A grey suggestion appears. Tab accepts it.
   - **B:** open Copilot Chat and ask "What does this function do?". You get an answer.
   - **C:** switch the chat to **Agent** and ask "Create a file hello.js that prints 'hello'". A new file appears.

   Not working? Check the steps in the [setup slides](https://kevinvandenhoek.github.io/inholland-react-native-course/day-0/slides/setup.html). Approval and activation of Copilot Student are two separate steps.

   > **📚 Reference:** [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)

2. **Check Node.js.** Run `node -v` in a terminal. You need the LTS version (an even major number). Missing or old? Install it.

   > **📚 Reference:** [Node.js downloads](https://nodejs.org/en/download)

3. **Create the project.** The default template gives you TypeScript, tabs and Expo Router.

   ```bash
   npx create-expo-app Pokedex
   cd Pokedex
   ```

   > **📚 Reference:** [Create your first app](https://docs.expo.dev/tutorial/create-your-first-app/)

4. **Start it.**

   ```bash
   npx expo start
   ```

   > **📚 Reference:** [Start developing](https://docs.expo.dev/get-started/start-developing/)

5. **Run it on your phone.** Install Expo Go, put your phone on the same Wi-Fi as your laptop, scan the QR code. Wi-Fi blocks it? Use `npx expo start --tunnel`.

   > **📚 Reference:** [Expo Go](https://docs.expo.dev/get-started/set-up-your-environment/?mode=expo-go)

6. **Change something.** Open `app/(tabs)/index.tsx`, change a text, save. Your phone updates without a restart.

7. **Put it on GitHub.** Create a repository `Pokedex`, commit, push. Every exercise in this course ends with a commit.

   > **📚 Reference:** [Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

### Windows

Expo Go on your phone works the same. An Android emulator is optional homework, not needed for this course.

> **📚 Reference:** [Android Studio emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Done when

- ✅ Copilot tests A, B and C are green
- ✅ The Pokedex app runs on your phone
- ✅ You changed a text and saw it reload
- ✅ The project is on GitHub
