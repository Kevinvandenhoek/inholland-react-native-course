# Exercise 1: Setup

### Objective
Get your tools working and create the Pokédex app you will build on for the rest of the course.

### Requirements

1. An agent tool works: Copilot in VS Code, or your own (Claude Code, Cursor, ...). Tests B, C and D.
2. Node.js LTS is installed.
3. A new Expo project called `Pokedex` runs on your phone in Expo Go.

### Steps to Complete

1. **Check your agent tool.** Copilot is free with Copilot Student and is what the examples use. Already have Claude Code, Cursor or another agent tool? Use that. Open a new folder, create `test.js` and run the tests:
   - **A:** type `// function that adds two numbers`, press Enter. A grey suggestion appears. Tab accepts it. Only for tools with inline suggestions (Copilot, Cursor).
   - **B:** open the chat and ask "What does this function do?". You get an answer.
   - **C:** switch to **Agent** mode and ask "Create a file hello.js that prints 'hello'". A new file appears.
   - **D:** your tool reads `AGENTS.md` in the root of your repo. Copilot: open Settings, search `agents md`, turn on **Chat: Use Agents Md File**. Cursor and Claude Code: nothing to set. Day 3 needs it.

   Copilot not working? Check the steps in the [setup slides](https://kevinvandenhoek.github.io/inholland-react-native-course/day-1/slides/setup.html). Approval and activation of Copilot Student are two separate steps.

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

- ✅ Tests B, C and D are green in your agent tool
- ✅ The Pokedex app runs on your phone
- ✅ You changed a text and saw it reload
- ✅ The project is on GitHub
