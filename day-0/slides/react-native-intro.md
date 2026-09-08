---
marp: true
theme: default
class: invert
---

# React Native Introduction
## Mobile Development Minor

![bg right fit](./assets/showcase.png)

---

# About Me 🏸 🍳 🛹 🎵

![bg right fit](./assets/profile.jpg)

- 10+ years of web development
- 3+ years of mobile development
- Communication & Multimedia Design
- Working at Triple, Alkmaar



---

# Meet the React Native Team

<style>
.profile {
   width: 100px;
   height: 100px;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   border-radius: 50%;
   border: 2px solid #fff;
   display: inline-block;
}
</style>

<table style="width:100%; table-layout:fixed; border:none;">
  <tr style="border:none;">
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/levi.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/max.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/thomas.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/silvan.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/danique.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/leon.png');"></div>
    </td>
    <td style="border:none; text-align:center;">
      <div class="profile" style="background-image: url('./assets/damisa.png');"></div>
    </td>
  </tr>
  <tr style="border:none;">
    <td style="border:none; text-align:center;">Levi</td>
    <td style="border:none; text-align:center;">Max</td>
    <td style="border:none; text-align:center;">Thomas</td>
    <td style="border:none; text-align:center;">Silvan</td>
    <td style="border:none; text-align:center;">Danique</td>
    <td style="border:none; text-align:center;">Leon</td>
    <td style="border:none; text-align:center;">Damisa</td>
  </tr>
  <tr style="border:none;">
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Team lead</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Web/RN Dev</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Web/RN Dev</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Web/RN Dev</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Web/RN Dev</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Tech lead</td>
    <td style="border:none; text-align:center; font-size:1rem; color:#888;">Intern</td>
  </tr>
</table>


---

# Our React Native Projects

<style>
.projects-flex {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 1.5rem;
}
.project-item {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}
.project-item video {
  width: 100%;
  max-width: 220px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background: #000;
  display: block;
}
.project-caption {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}
@media (max-width: 900px) {
  .projects-flex {
    flex-direction: column;
    gap: 2rem;
  }
  .project-item video {
    max-width: 100%;
  }
}
</style>

<div class="projects-flex">
  <div class="project-item">
    <video src="./assets/demo-fleurametz.mp4" autoplay loop muted controls></video>
    <div class="project-caption">Fleurametz</div>
  </div>
  <div class="project-item">
    <video src="./assets/demo-knvb.mp4" autoplay loop muted controls></video>
    <div class="project-caption">KNVB</div>
  </div>
  <div class="project-item">
    <video src="./assets/demo-mind-oasis.mp4" autoplay loop muted controls></video>
    <div class="project-caption">Rituals</div>
  </div>
  <div class="project-item">
    <video src="./assets/demo-new-black.mp4" autoplay loop muted controls></video>
    <div class="project-caption">New Black</div>
  </div>
  <div class="project-item">
    <video src="./assets/demo-vfz.mp4" autoplay loop muted controls></video>
    <div class="project-caption">VodafoneZiggo</div>
  </div>
</div>


---

# Course Overview
<style>
.col-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
}
</style>

<div class="col-4">

<section>

#### Day 0 👈
- Intro
- Web vs Native

</section>

<section>

#### Day 1
- Hybrid development
- Setup
- Pages
- Components
- Stack vs Tabs

</section>

<section>

#### Day 2
- State management
- Networking
- Presentation
- Dev tools
- Linting
- Advanced TS

</section>

<section>

#### Day 3
- Dependencies
- Structure
- Theming
- Use AI
- Live Coding 😱

</section>

---

# Course Exam

![pokedex](./assets/pokedex.png)

---

# What is React Native?

- **Cross-platform mobile framework** by Meta (Facebook)
- **Write once, run everywhere** - iOS/Android (and more)
- **JavaScript/TypeScript** based
- **Native performance** with web development experience
- **Large community** and ecosystem

---

![bg](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDdmeW1xdDRscnQwM3o3cXR3bXE2YmQ4dXhxbXhoM2ZhbTc4aGl3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s239QJIh56sRW/giphy.gif)

---

# Why use React Native?

- **Cost-effective** by cutting down on dev time
- **Easier resourcing** because of JS developers
- **Consistent experience** across platforms

---
# Why not to use React Native? :fire:

- **Less control** over the native side
- **Dependent** on the community and ecosystem
- **Abstracts** away the native side

---

# How React Native Works

## High-Level Architecture (old)

<iframe src="https://link.excalidraw.com/readonly/yWniGs8JWT1nUwdfQDy0?darkMode=true" width="100%" height="100%" style="border: none;"></iframe>

---

# How React Native Works

## High-Level Architecture (current)

<iframe src="https://link.excalidraw.com/readonly/YAEsdqBxbcfiVfr35UlO?darkMode=true" width="100%" height="100%" style="border: none;"></iframe>

---

# What do you need

### Required
- **Node.js**
- **Expo**

### Optional
- **Xcode** (iOS)
- **Android Studio** (Android)
- **React Native CLI**

![bg right fit](./assets/expo-start.png)

---

# What is Expo?

> _Expo is a framework and a platform for building React Native applications._


<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">🚀<br/>CNG</td>
    <td align="center" style="border: none;">📱<br/>Expo Go</td>
    <td align="center" style="border: none;">🔄<br/>OTA</td>
  </tr>
  <tr>
    <td align="center" style="border: none;">🛠️<br/>Native APIs</td>
    <td align="center" style="border: none;">🌐<br/>X Platform</td>
    <td align="center" style="border: none;">⚡<br/>EAS</td>
  </tr>
  <tr>
    <td align="center" style="border: none;">📤<br/>Submission tools</td>
    <td align="center" style="border: none;">🗂️<br/>Asset management</td>
    <td align="center" style="border: none;">📚<br/>Docs & Support</td>
  </tr>
</table>

---
# Why we use Expo?

<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">🚀<br/>CNG</td>
    <td align="center" style="border: none; opacity: 0.5;">📱<br/>Expo Go</td>
    <td align="center" style="border: none; opacity: 0.5;">🔄<br/>OTA</td>
  </tr>
  <tr>
    <td align="center" style="border: none;">🛠️<br/>Native APIs</td>
    <td align="center" style="border: none; opacity: 0.5;">🌐<br/>X Platform</td>
    <td align="center" style="border: none; opacity: 0.5;">⚡<br/>EAS</td>
  </tr>
  <tr>
    <td align="center" style="border: none; opacity: 0.5;">📤<br/>Submission tools</td>
    <td align="center" style="border: none;">🗂️<br/>Asset management</td>
    <td align="center" style="border: none;">📚<br/>Docs & Support</td>
  </tr>
</table>

---
# Why YOU 🫵🏻 use Expo?

<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none; opacity: 0.5;">🚀<br/>CNG</td>
    <td align="center" style="border: none;">📱<br/>Expo Go</td>
    <td align="center" style="border: none; opacity: 0.5;">🔄<br/>OTA</td>
  </tr>
  <tr>
    <td align="center" style="border: none; opacity: 0.5;">🛠️<br/>Native APIs</td>
    <td align="center" style="border: none; opacity: 0.5;">🌐<br/>X Platform</td>
    <td align="center" style="border: none;">⚡<br/>EAS</td>
  </tr>
  <tr>
    <td align="center" style="border: none; opacity: 0.5;">📤<br/>Submission tools</td>
    <td align="center" style="border: none;">🗂️<br/>Asset management</td>
    <td align="center" style="border: none;">📚<br/>Docs & Support</td>
  </tr>
</table>

---

# CNG - Continuous Native Generation

![expo starter clean](./assets/expo-starter-clean.png)

---

# CNG - Continuous Native Generation

![prebuild](./assets/prebuild.png)

---

# CNG - Continuous Native Generation

![cng](./assets/cng.png)

---

# CNG - Continuous Native Generation

- Adding Widgets/Live Activities
- Different build variants (e.g. whitelabeling)
- Customizing App Settings

---

# Important note

![kiss expo](./assets/kiss-expo.png)

---

# Expo Go

![expo go](./assets/expo-go.png)

---

# Let's take a break

## Continue in 5 minutes with Web vs Native

