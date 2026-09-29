# Exercise 2: Let Copilot explain it

### Objective
Understand the project that was generated for you, by asking your agent tool and checking the answers yourself. The steps say Copilot; any tool with a chat works the same.

Today Copilot only **explains**. It does not write code yet. The rule for the whole course starts here: **everything the agent says, you check.**

### Requirements

1. You can say in your own words what `src/app/`, `src/components/` and `app.json` do.
2. You checked at least one answer against the Expo docs.
3. You made one change by hand.

### Steps to Complete

1. **Open the chat in Ask mode.** Open the `Pokedex` folder in VS Code. Open Copilot Chat and make sure the mode is **Ask**, not Agent.

   > **📚 Reference:** [Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/chat/copilot-chat)

2. **Ask about the files.** Open each file first, then ask. Copilot uses the open file as context. Write the answer in your own words, 3 lines max per file, in a new file `NOTES.md` in your project.

   | File | Ask |
   |---|---|
   | `src/app/_layout.tsx` | "What does this file do, and what is a root layout?" |
   | `src/components/app-tabs.tsx` | "Where does the tab bar come from? What makes `NativeTabs` native?" |
   | `src/app/index.tsx` | "Which screen is this, and why is it called index?" |
   | `src/components/` | "What is the difference between a file in src/app/ and a file in src/components/?" |
   | `app.json` | "What is this file for? Which settings matter when I run the app in Expo Go?" |

   > **📚 Reference:** [Expo Router: file-based routing](https://docs.expo.dev/router/basics/core-concepts/)

3. **Check one answer.** Pick one answer and look it up in the Expo docs. Was Copilot right? Complete? Write one line under your notes: what you checked and what you found.

   > **📚 Reference:** [Expo Router layouts](https://docs.expo.dev/router/basics/layout/) · [app.json](https://docs.expo.dev/versions/latest/config/app/)

4. **Ask one follow-up.** Something you did not understand in an answer. Keep asking until you get it. This is the habit we grade later: **ask about it**.

5. **Change something by hand.** Rename one tab in `src/components/app-tabs.tsx` (the text in `NativeTabs.Trigger.Label`) and change the text on that screen. See it reload on your phone. No Copilot for this one.

6. **Commit.** Add `NOTES.md` and your change. Commit message: `Exercise 2: explore the project`.

### Done when

- ✅ `NOTES.md` has a short explanation for each file in the table
- ✅ One answer is checked against the docs, with a note
- ✅ One tab is renamed and the app shows it
- ✅ Committed and pushed

Close your laptop and tell your neighbour what `src/app/`, `src/components/` and `app.json` do. Without looking.
