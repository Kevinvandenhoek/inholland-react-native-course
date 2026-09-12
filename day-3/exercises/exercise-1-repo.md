# Exercise 1: your own repo

### Objective
A fresh GitHub repo for your final assignment, with a structure that holds and
instructions the agent can actually use.

### Requirements

1. A repo on GitHub, public or shared with me.
2. The app starts and runs in Expo Go.
3. Folders that separate UI, data and logic.
4. `.github/copilot-instructions.md` rewritten for **your** product.

### Steps to Complete

#### 1. Start from something (5 min)

Two options, both fine:

- **Continue from the course app.** You are building the Pokédex, or your idea
  is close to it. Copy the folder, remove the `.git` folder, start fresh.
- **Start empty.** Your idea is something else.

  ```bash
  npx create-expo-app@latest my-app
  cd my-app
  npx expo start
  ```

> **📚 Reference:** [Create a project](https://docs.expo.dev/get-started/create-a-project/)

#### 2. Put it on GitHub (5 min)

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create my-app --public --source=. --push
```

No `gh`? Create the repo on github.com and follow the instructions there.

Check that `.gitignore` has `node_modules` and `.env`. Never commit a key.

#### 3. Set up your structure (10 min)

Make the folders you need now. Not the ones you might need later.

```
app/          # screens, Expo Router routes
components/   # reusable UI
constants/    # theme tokens, static data
hooks/        # data hooks, shared logic
services/     # API calls and SQLite
specs/        # your product spec (exercise 2)
docs/         # your notes and explanation
```

Building something bigger than a list and a detail screen? Consider
`features/<name>/` per feature, with `app/` as routes only.

The rule: a screen renders, a hook gets data, a service talks to the API or
the database. Nothing does two of those.

> **📚 Reference:** [Bulletproof React project structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

#### 4. Write your instructions (10 min)

Copy [the template](../templates/copilot-instructions.md) to
`.github/copilot-instructions.md` and rewrite it for your product.

Change at least: the first line, the API, the folder list, and anything about
tokens or components that is not true in your repo. Instructions that do not
match your project are worse than none.

> **📚 Reference:** [Custom instructions for Copilot](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)

#### 5. Check and commit (5 min)

```bash
npx eslint .
npx tsc --noEmit
```

Both clean before you commit. From here on, every commit.

```bash
git add .
git commit -m "Set up project structure and Copilot instructions"
git push
```

### Done when

- ✅ Repo on GitHub, app runs in Expo Go on your phone
- ✅ Folders separate UI, data and logic
- ✅ `.github/copilot-instructions.md` describes your product, not the example
- ✅ Lint and tsc clean
