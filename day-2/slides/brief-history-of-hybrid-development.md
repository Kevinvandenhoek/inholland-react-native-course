---
marp: true
theme: default
class: invert
---

# Brief History of Hybrid Development

"Write once, run anywhere"

![bg right fit](../assets/freeza.png)

---

# Hybrid Techniques over the years

![timeline h:380](../assets/timeline-hybrid-techniques.png)

[Timeline](https://app.excalidraw.com/s/7WzUqRCDEgA/2LptH1giHHK)

---

# Performance Evolution

| Approach | Performance Level | Examples |
|----------|------------------|----------|
| **Webview-based** | Lowest | PhoneGap, Cordova, Ionic, Capacitor |
| **JS with native views** | Near-native | React Native, NativeScript |
| **Custom Engine** | Near-native | Flutter |
| **Compiled native** | Native | .NET MAUI (was Xamarin), Kotlin Multiplatform |

---

# Code Sharing Approaches

| Framework Type | Code Sharing | Approach |
|----------------|--------------|----------|
| **Webview** | ~100% | Nearly complete sharing, compromised UX |
| **React Native/NativeScript** | ~70-90% | Shared code with platform-specific adjustments |
| **Flutter** | ~90-95% | Shared code with custom rendering |
| **Kotlin Multiplatform / .NET MAUI** | ~50-90% | Shared logic. UI per platform, or shared (Compose Multiplatform, MAUI) |
| **PWA/Capacitor** | Variable | Web-first with optional native capabilities |

---

# It is all about balance

---
<!-- class: default -->

![bg fit right](../assets/machine-lang.png)

# Flutter / .NET MAUI

---

![bg fit right](../assets/webview-only.png)

# PhoneGap / Cordova / Ionic

---

![bg fit right](../assets/react-native.png)

# React Native

---

<!-- class: invert -->

![bg fit](../assets/js-frameworks.png)

---

<style scoped>section { padding: 24px 40px; font-size: 22px; text-align: center; } p { margin: 0 0 8px; }</style>

State of JS 2016–2024: share of respondents who have used each tool

![h:620](../assets/mobile-frameworks.png)

---

<style scoped>section { padding: 24px 40px; font-size: 22px; text-align: center; } p { margin: 0 0 8px; }</style>

State of JS 2024: “Which of these tools do you use in a professional context?” % of the 10,091 who answered

![w:1180](../assets/mobile-frameworks-chart.png)

---

![bg fit](../assets/rn-is-the-best.png)

---

![bg fit](../assets/chasm.png)

---

# Future of Hybrid Development

> "Write ~~once~~ less, run ~~any~~ somewhere"

- Aim for the best platform experience
- Share what makes sense
- One size doesn't fit all
- Line between web and app continues to blur
