---
marp: true
theme: default
class: invert
---

# Setup
## Copilot Student, VS Code, your first Expo app

Most of you did steps 1–6 before today. Check them, then go to step 7.

---

# 1. GitHub account

- No account yet? [github.com/signup](https://github.com/signup)
- Use your **personal** e-mail as the main address. You keep the account after your studies.

---

# 2. Add your student e-mail

- [github.com/settings/emails](https://github.com/settings/emails)
- Add `<studentnumber>@student.inholland.nl`
- Click the link in the confirmation mail

---

# 3. Apply for student status

- [github.com/settings/education/benefits](https://github.com/settings/education/benefits) → **Start an application**
- GitHub asks for proof? Upload a student card with enrolment date, a proof of enrolment, or your timetable.
- It must show you are enrolled at Inholland **now**.

---

# 4. Activate Copilot Student

- After approval, go back to [github.com/settings/education/benefits](https://github.com/settings/education/benefits)
- Activate **Copilot Student**
- ⚠️ Approval and activation are **two separate steps**
- It can take a few days after approval before Copilot is available

---

# 5. VS Code

- Download: [code.visualstudio.com](https://code.visualstudio.com)
- Click the Copilot icon (top right) and sign in with the **same** GitHub account

---

# 6. Three Copilot tests

Make a new folder, open it in VS Code, create `test.js`.

| Test | Do this | You should see |
|---|---|---|
| **A: suggestions** | Type `// function that adds two numbers` and press Enter | A grey suggestion. Tab accepts. |
| **B: chat** | Open Copilot Chat, ask "What does this function do?" | An answer. |
| **C: agent mode** | Pick **Agent** in the chat, ask "Create a file hello.js that prints 'hello'" | A new file appears. |

All three green? You are ready.

---

# 7. Node.js

- Check: open a terminal and run `node -v`
- You need the **LTS** version (an even major number, like 22 or 24)
- Missing or old? Install it: [nodejs.org](https://nodejs.org) → LTS

---

# 8. Create the project

```bash
npx create-expo-app Pokedex
cd Pokedex
npx expo start
```

- The default template: TypeScript, tabs, Expo Router. Exactly what we need.
- This is **the** project. Days 1, 2 and 3 build on it.

---

# 9. Run it on your phone

- Install **Expo Go** from the App Store or Play Store
- Phone and laptop on the **same Wi-Fi**
- Scan the QR code in your terminal (iPhone: camera app; Android: Expo Go app)
- Wi-Fi blocks it? Run `npx expo start --tunnel`

![bg right fit](../assets/expo-start.png)

---

# Windows?

- Expo Go on your phone works the same
- Android emulator (Android Studio) is **optional** homework
- No iOS simulator on Windows. That is fine for this course.

---

# Done when

- ✅ Copilot tests A, B and C are green
- ✅ The Pokedex app runs on your phone
- ✅ You change one text in `app/(tabs)/index.tsx` and see it reload

Stuck? Raise your hand. Wait for the rest: open exercise 2.
