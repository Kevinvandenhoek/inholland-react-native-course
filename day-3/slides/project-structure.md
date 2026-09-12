---
marp: true
theme: default
class: invert
---

# Project Structure
## Scalability and maintainability

![bg right fit](../assets/project-structure.png)

---

## Why is a Good Project Structure Important?

- 🧠 **Clarity:** Easy to understand
- 📈 **Scalability:** Handles growth smoothly
- 🧩 **Separation:** Modules stay independent
- ♻️ **Reusability:** Reuse components easily
- 🤝 **Collaboration:** Team works better
- 🚀 **Onboarding:** Quicker new hire ramp-up
- 📚 **Consistency:** Predictable, organized code


--- 

# Multiple approaches

- **Vertical slices**: Feature Based
- **Clean Code**: Technical Based

---

# Clean Code

![bg right fit](../assets/clean-code.png)

- 🏗️ Independent of frameworks
- 🧪 Testable and maintainable
- 🏛️ Business rules in center
- 🧹 Clear separation of concerns

---

# Vertical slices

![bg right fit](../assets/vertical-slice.png)

- 🗂️ Organize by feature
- 🧩 Independent, self-contained modules
- ⚡ Easy feature updates
- 🔗 Reduced inter-feature coupling

---

# Bike shedding
## Does it really matter?

![bg right fit](../assets/bike-shedding.png)

---

> # "_Just pick one_" 🤷‍♀️
Levi, 2025

---

# Feature based example

[Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

![bg right fit](../assets/bulletproof-react.png)

---

```
src
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- routes        # application routes / can also be pages
|   +-- app.tsx       # main application component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
|   +-- router.tsx    # application router configuration
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- testing           # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

---
```
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types used within the feature
|
+-- utils       # utility functions for a specific feature
```
---

# What we used in the course

<style scoped>pre { font-size: 0.75em; }</style>

```
app/          # screens, Expo Router turns files into routes
components/   # reusable UI
constants/    # theme tokens, static data
hooks/        # data hooks (TanStack Query), shared logic
services/     # API calls and SQLite
```

Technical based, and fine for one small app. It is what `create-expo-app` gives you.

---

# When to go feature based

The moment you open `components/` and cannot find anything.

```
features/
+-- battle/
|   +-- components/
|   +-- hooks/
|   +-- battle-engine.ts
+-- favorites/
    +-- components/
    +-- favorites-db.ts
```

`app/` stays routes only. Shared stuff stays in the top level folders.

---

# The rule that actually matters

**UI, data and logic do not live in the same file.**

- A screen renders. It does not fetch and it does not write SQL.
- A hook gets data. It does not render.
- A service talks to the API or the database. It knows nothing about screens.

Whatever you name the folders, that separation is what gets graded.

---

# Tell the agent

Your structure only exists if the agent knows about it.

```markdown
- Screens live in `app/`, reusable UI in `components/`,
  API and database code in `services/`, hooks in `hooks/`.
- Do not put fetch calls in screens.
```

That goes in `.github/copilot-instructions.md`. You wrote a first version on day 2.

---

# Exercise 1

Your own repo, your own structure, instructions updated for **your** product.

Pick one and move on. Bike shedding is not a grade.
