# Explanation template

Copy this into your own repo as `docs/toelichting.md`. Max two pages.

Six questions. Short answers, your own words. Every reference (issue, file,
line, chat, commit) must exist in your repo. I read this next to your code,
commits and chats. "The agent got it right every time" is not an answer.

---

# Explanation - <App name>

## 1. What did you build and for whom?

<A few sentences. What the app does, who would use it, what it does not do.>

## 2. How did you cut the work into small tasks?

<Point at your issues. Why these pieces, in this order? Which issue turned out
too big, and what did you do?>

## 3. Name two choices in the code you made yourself, and why.

<Two choices you made, not the agent. A structure, a library, a data model,
where you put something. Say what the alternative was and why you did not
pick it. Name the file and the line.>

## 4. Give one prompt that did not work in one go.

<What did you ask, what came back, how did you notice it was wrong (a crash,
a wrong screen, a review of the diff), and what did you do next? Point at the
chat session and the commit. If it worked around a symptom instead of fixing
the cause, say that.>

## 5. What did you change in `copilot-instructions.md` during the project, and why?

<Which rules did you add or change? What did the agent do that made you add
them? Point at the commits on that file.>

## 6. Name code from the agent you did not understand at first.

<Which file, which part. How you worked it out (asked the agent, read the
docs, tried it). Then explain what it does, in your own words.>
