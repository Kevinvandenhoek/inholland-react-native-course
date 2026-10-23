# Exercise 1: your own repo

### Objective
A fresh GitHub repo for your final assignment, with a structure that holds and
instructions the agent can actually use.

### Requirements

1. A repo on GitHub, public or shared with me.
2. The app starts and runs in Expo Go.
3. A folder rule in `AGENTS.md` that separates UI, data and logic.
4. `AGENTS.md` rewritten for **your** product.

### Steps to Complete

#### 1. Start from scratch, or from your course app (5 min)

Your choice. Either way it is a new repo: your git history starts today.

**From scratch.**

  ```bash
  npx create-expo-app@latest my-app
  cd my-app
  npx expo start
  ```

Then set up lint and tsc again, as in day 2, exercise 2. Leave the example
screens. Your first issue replaces them and builds the setup it needs.

**From your course app.** Take the setup, not the features.

- Copy your course app folder to a new folder, without `.git` and
  `node_modules`. Then run `npm install`.
- Keep: lint and tsc, the query provider, the database setup, the theme file.
- Delete: the item screens and everything only they use. That code has no spec
  and no issue.
- Change the name and slug in `app.json`.

Course app not finished? Take the setup from the
[day 3, exercise 4 starter](../../day-3/exercises/starters/exercise-4/).

> **📚 Reference:** [Create a project](https://docs.expo.dev/get-started/create-a-project/)

#### 2. Put it on GitHub (5 min)

You need the GitHub CLI, `gh`. In exercise 3 the agent uses it to post its
plan on the issue. Not installed? `brew install gh` (macOS) or
`winget install GitHub.cli` (Windows). Then log in once:

```bash
gh auth login
```

Then:

```bash
git init
git add .
git commit -m "Initial commit"   # or "Base from course app"
gh repo create my-app --public --source=. --push
```

Check that `.gitignore` has `node_modules` and `.env`. Never commit a key.

> **📚 Reference:** [GitHub CLI](https://cli.github.com/)

#### 3. Your structure and your instructions (7 min)

Copy [the template](../../exam/templates/AGENTS.md) to the top of `AGENTS.md` in the
root of your repo and rewrite it for your product. Keep Expo's part below it.
Your `AGENTS.md` from day 3 is a good start: take the rules that still fit.
Copilot only reads it with the
setting `chat.useAgentsMdFile` on (day 1 setup).

Change at least: the first line, the API and the folder list. Started from
your course app? List its setup in `AGENTS.md` (query provider, database,
theme): what it is and where it lives. Then the agent reuses it. Keep the rule
about the plan: exercise 3 needs it. Instructions
that do not match your project are worse than none.

**The folder list is your structure.** From scratch? You do not make the folders now: git
does not store empty folders. The agent makes them when the first feature
needs them, following your list. The template has:

```
src/app/          # screens, Expo Router routes
src/components/   # reusable UI
src/hooks/        # data hooks, shared logic
src/services/     # API calls and SQLite
```

Building something bigger than a list and a detail screen? Consider
`src/features/<name>/` per feature, with `src/app/` as routes only.

The rule: a screen renders, a hook gets data, a service talks to the API or
the database. Nothing does two of those.

> **📚 Reference:** [AGENTS.md](https://agents.md/) · [AGENTS.md in Copilot](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions) · [Bulletproof React project structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

#### 4. Check and commit (3 min)

```bash
npx expo lint
npx tsc --noEmit
```

Both have to be clean when you hand in. Fix what they find now, while it is
small.

```bash
git add .
git commit -m "Set up project structure and AGENTS.md"
git push
```

### Done when

- ✅ Repo on GitHub, app runs in Expo Go on your phone
- ✅ `AGENTS.md` has a folder rule that separates UI, data and logic
- ✅ `AGENTS.md` describes your product, not the example
- ✅ Lint and tsc clean
