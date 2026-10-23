# Exercise 2: your spec and your issues

### Objective
Write down what you are building, before anyone builds it. One file for the
product, one file per feature. Then turn every feature into an issue you can
finish in one go.

### Requirements

1. `specs/product.md` in your repo, filled in from the template.
2. `specs/features/<name>.md` for every feature, 3 to 6 files, from the template.
3. The agent asked you questions about the specs, and the answers are in the specs.
4. Every feature is a GitHub issue with its acceptance criteria as a checklist.

### Steps to Complete

#### 1. The product spec (10 min)

Copy [the template](../../exam/templates/product.md) to `specs/product.md`. See the [example](../../exam/templates/product-example.md) for how it looks when it is filled in.

**Own idea?** Start from your idea note. The name, core action, features and
data go under the same headings. Your native feature becomes a line under
technical choices. Then add what the note did not have: endpoints, technical
choices, out of scope.

**No go for your own idea yet?** Post `specs/product.md` in Teams as soon as
it is done, and tell me. I give the go today, in class. After today I may
need more time to reply, so keep a starter idea as a backup.

- **Goal and core action.** One paragraph, one sentence. If you cannot name the
  core action, the app is two apps.
- **Features.** Three to six names. Not more. Each one gets its own file in
  step 2.
- **Data.** Which API, which endpoints, what goes into SQLite.
- **Technical choices.** The assignment says what the app does, not how. For
  every open point, one line: what you picked, the alternative, and why.
  Not sure yet? Ask the agent for two options with their downsides, then pick
  one yourself.
- **Out of scope.** What the whole app does not do.

The technical core checklist is in the template. Leave it in, tick it off as
you go.

What it looks like, shortened. Weekweather is a made-up weather app. The full
version is in the [example](../../exam/templates/product-example.md).

```markdown
# Weekweather

Plan your outdoor week. Weekweather shows the weather for the next seven days
in the cities you care about. For people who plan a bike ride or a day at the
beach and want to see which day is dry.

## Core action
Pick a city and see which days are dry.

## Features
1. [Search a city](./features/search-city.md)
2. [Week forecast](./features/week-forecast.md)
3. [Day detail](./features/day-detail.md)
4. [My places](./features/my-places.md)

## Data
- **API**: Open-Meteo. No key.
- **Endpoints**: `/v1/search` for cities, `/v1/forecast` for the weather.
- **Stored on the phone**: table `places` in SQLite: id, name, latitude, longitude.

## Technical choices
- **Stored in SQLite**: my places, not the forecasts, because a forecast is
  old after a day.
- **Native feature**: Share on the day detail, as text, so it works in every
  chat app.

## Out of scope
Accounts, your GPS location, weather alerts, a web version.
```

Every line answers a question the agent would otherwise guess: what the app
is for, what is in it, where the data comes from, and what it must not build.

#### 2. One file per feature (12 min)

Copy [the template](../../exam/templates/feature.md) to `specs/features/<name>.md`
for every feature. Same four headings as in Dan's lessons:

- **Goal.** What can the user do when this is done, and why. Two sentences.
- **Constraints.** Which screen, which data, what to reuse, what not to add.
  This is what the agent cannot see on its own.
- **Acceptance Criteria.** Three to six things that can be ticked off. What is
  on screen, what happens when you press, what a failure looks like.
- **Out of Scope.** What this feature does not do. It is what keeps the agent
  from inventing.

Example, the first feature of Weekweather:

```markdown
# Search a city

## Goal
Find a city by typing its name, so I can see its week forecast.

## Constraints
- On the home screen. No new screen.
- Open-Meteo `/v1/search?name=...`. Starts from two letters.
- Colors and spacing from the theme. No new dependencies.

## Acceptance Criteria
- [ ] A search field at the top, placeholder "Search a city".
- [ ] Results show name and country while I type.
- [ ] No match shows "No city found".
- [ ] Tapping a result opens the week forecast for that city.
- [ ] A loading state while searching, an error with Retry when it fails.

## Out of Scope
Search by postcode, search history, my GPS location.
```

Test your criteria: could a classmate tick them off without asking you
anything? Then the agent can build them.

**Starter idea?** Take appendix A or B in the
[final assignment](../../exam/README.md) and give each heading its own file.

- The checkboxes under a heading are the start of your **Acceptance
  Criteria**. Copy them, then make them concrete: what is on screen, what
  happens on press, what a failure looks like.
- **Goal**, **Constraints** and **Out of Scope** are not in the appendix. You
  write those.

#### 3. Let the agent grill you (8 min)

Your specs have holes you cannot see. The agent can. Open `specs/` and ask,
in Ask mode:

> Read `specs/product.md` and every file in `specs/features/`. Do not build
> anything. Ask me the questions you would need answered before you could
> build the first feature without guessing. One question at a time, wait for
> my answer.

Answer each question. Every answer goes **into the spec**, not just into the
chat. Stop when the questions get smaller than your criteria. Five rounds is
usually enough.

A question you cannot answer is a decision you have not made yet. Make it now,
or move it to "Out of Scope".

#### 4. Turn features into issues (3 min)

One feature, one issue. Let the agent create them, in Agent mode:

> For every file in `specs/features/`, create one GitHub issue with
> `gh issue create`. Title: the feature, in plain words. Body: a link to the
> file, then its acceptance criteria as `- [ ]` checkboxes. Nothing else.

Then open the issues on GitHub and check them. No implementation plan in
there: that comes later, from the agent, per issue.

An issue that takes more than an afternoon is two features. Split the file.

> **📚 Reference:** [Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)

#### 5. Commit (2 min)

```bash
git add specs/
git commit -m "Add product and feature specs"
git push
```

### Done when

- ✅ `specs/product.md` with goal, core action, feature list, data, technical choices, out of scope
- ✅ One file per feature in `specs/features/`, with goal, constraints, criteria, out of scope
- ✅ The agent's questions answered, in the specs
- ✅ Every feature is a GitHub issue with a criteria checklist
- ✅ Specs committed and pushed
