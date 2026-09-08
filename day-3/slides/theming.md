---
marp: true
theme: default
class: invert
---

# Theming your React App

![bg right fit](../assets/theme-intro.png)

---

# Table of Contents

1. **Understanding Theme Architecture**
2. **How to define presets**
3. **How to define themes**
4. **Consuming themes in components**

---

# Understanding Theme Architecture
## Goals
- 🎯 High level of granularity
- 🧩 Components are agnostic
- 🚀 Scalable design (rebranding, user preferences, etc.)

---

![bg fit](../assets/preset-to-theme.png)

---

# How to define presets
## Goals
- Separation of concerns
- Focus on range of values
- Provides a set to define themes

---

![bg fit](../assets/preset-font-sizes.png)

---

![bg fit](../assets/preset-colors.png)

---

# Notes on presets

- Defines Fonts, font sizes, colors, effects, etc.
- Color scales (e.g. `{color}50`, `{color}100`, etc.)
- Text sizes (e.g. `textSm`, `textMd`, `textX2l`, etc.)
- Don’t use light, lighter, lightest or large, larger, largest you will get stuck (largesterst 💁‍♀️)

---

# How to define themes
## It is all about providing context

---
<!-- class: default -->

![design-token-naming](../assets/design-token-naming.webp)

[_Source: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676_
](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

---
<!-- class: default -->

![bg w:1024](../assets/design-token-example.png)

---
<!-- class: invert -->

# Notes on design tokens

- Provide context for the theme value.
- Ranges from basic to super granular:
    - `textInfo`
    - `textColorHeadingOnBrandFocused`

---

# Consuming themes in components

![bg right fit](../assets/theme-consumption.png)

[Excalidraw diagram](https://link.excalidraw.com/readonly/7acA0ZMzjrApQ6diOEMX?darkMode=true)


