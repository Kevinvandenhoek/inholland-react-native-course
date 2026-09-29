---
marp: true
theme: default
class: invert
---

# Using Expo Go
## The app does not load on your phone? Try these fixes

---

# How it works

- `npx expo start` starts a server on your laptop: **Metro**, on port `8081`.
- Expo Go on your phone downloads your app from that server.
- So your phone must reach your laptop over the network.

Almost every problem comes down to this: **your phone cannot reach your laptop.**

Typical errors: "The network connection was lost", "Could not connect to development server", or a spinner that never ends.

---

# Check these first

1. **Latest Expo Go** from the App Store or Play Store. Expo Go only runs the newest Expo SDK.
2. **Phone and laptop on the same network.**
3. **VPN off** on your laptop.
4. **"Allow"** when your laptop asks if Node can accept incoming connections.
5. **iPhone:** "Allow" when Expo Go asks for access to the local network.

Still not working? Do the test on the next slide.

---

# Test: can your phone reach your laptop?

<style scoped>section { font-size: 25px; }</style>

1. Find your laptop's IP address in the terminal. It is in the line under the QR code: `exp://192.168.x.x:8081`.
2. Open this address in the browser **on your phone**:

   ```
   http://192.168.x.x:8081/status
   ```

   Do not use `localhost`. On your phone, `localhost` is the phone itself.

| You see | Meaning | Go to |
|---|---|---|
| `packager-status:running` | The network works. Expo Go is blocked. | iPhone: local network |
| An error or nothing | Something blocks the connection. | Firewall, wrong IP, then the workarounds |

---

# Fix: iPhone local network

Expo Go needs permission to find your laptop on the network.

- Open **Settings → Expo Go** and turn on **Local Network**.
- No such option? Delete Expo Go, install it again, and tap **Allow** when it asks.

---

# Fix: the firewall blocks Node

You once clicked "Don't allow" or "Cancel"? Then the firewall blocks Node.

**macOS**
- **System Settings → Network → Firewall → Options…**
- Find `node` and set it to **Allow incoming connections**.

**Windows**
- Search for **Allow an app through Windows Firewall**.
- Click **Change settings** and find **Node.js JavaScript Runtime**.
- Tick **Private** and **Public**.

Restart `npx expo start` and scan again.

---

# Fix: Expo uses the wrong IP address

A VPN, Docker or a virtual machine can give your laptop extra IP addresses. Expo can pick the wrong one.

1. Find your real Wi-Fi IP address.
   - macOS: `ipconfig getifaddr en0`
   - Windows: `ipconfig`, look under **Wireless LAN adapter Wi-Fi** → **IPv4 Address**
2. Start Expo with that address:

   ```bash
   # macOS
   REACT_NATIVE_PACKAGER_HOSTNAME=192.168.x.x npx expo start
   ```

   ```powershell
   # Windows (PowerShell)
   $env:REACT_NATIVE_PACKAGER_HOSTNAME="192.168.x.x"; npx expo start
   ```

---

# Workaround: use your phone's hotspot

School Wi-Fi often blocks traffic between devices. Your hotspot does not.

1. Turn on the hotspot on your phone.
2. Connect your laptop to it.
3. Run `npx expo start` and scan the QR code.

The app goes straight from your laptop to your phone. That uses **no** mobile data. Other laptop traffic does, so run `npm install` on a normal Wi-Fi network.

**This is the easiest fix at school.**

---

# Workaround: Expo's tunnel

A tunnel sends the connection through the internet. Then the network between your phone and laptop does not matter.

```bash
npx expo start --tunnel
```

Setup: see day 1, "Wi-Fi blocks it? Use a tunnel".

This tunnel runs on a shared account that Expo limits. It often fails with `failed to start tunnel` or `remote gone away`. Then use the Cloudflare tunnel on the next slide.

---

# Workaround: Cloudflare tunnel

Free, no account. You need two terminals.

**1. Install `cloudflared`** (one time)
- macOS: `brew install cloudflared`
- Windows: `winget install Cloudflare.cloudflared`

**2. Terminal 1: start the tunnel**

```bash
cloudflared tunnel --url http://localhost:8081
```

Copy the URL it prints, for example `https://abc-def.trycloudflare.com`.

Keep this terminal open.

---

# Cloudflare tunnel: start Expo

**3. Terminal 2: start Expo with that URL**

```bash
# macOS
EXPO_PACKAGER_PROXY_URL=https://abc-def.trycloudflare.com npx expo start
```

```powershell
# Windows (PowerShell)
$env:EXPO_PACKAGER_PROXY_URL="https://abc-def.trycloudflare.com"; npx expo start
```

The URL changes every time you start the tunnel. Repeat steps 2 and 3.

---

# Workaround: Android phone over USB

No network needed. Android only.

1. Install [Android platform-tools](https://developer.android.com/tools/releases/platform-tools) (this gives you `adb`).
2. On your phone, turn on **Developer options** and **USB debugging**.
3. Connect your phone with a USB cable. Tap **Allow** on the phone.
4. Start Expo and press `a` in the terminal:

   ```bash
   npx expo start --localhost
   ```

Check the connection with `adb devices`. Your phone must be in the list.

---

# Last resort: simulator or emulator

Runs the app on your laptop. No network, no phone.

| | Windows | macOS |
|---|---|---|
| **Android Emulator** | [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/), press `a` | Same |
| **iOS Simulator** | Not possible | [Xcode](https://docs.expo.dev/workflow/ios-simulator/), press `i` |

Heavy install: many GB. Use this only when your phone really does not work.

---

# Other problems

| You see | Fix |
|---|---|
| "Project is incompatible with this version of Expo Go" | Update Expo Go from the store |
| Red errors in VS Code after `npm install`, for example "Cannot use JSX" | Command palette (`Ctrl/Cmd+Shift+P`) → **TypeScript: Restart TS Server** |
| Old code on your phone | Shake your phone → **Reload**, or press `r` in the terminal |
| Strange errors after you changed packages | `npx expo start --clear` |

---

# Still stuck?

Raise your hand, or ask in Teams. Send:

- a screenshot of the error on your phone
- the output of your terminal
- which fixes you tried

[Expo docs: Expo CLI](https://docs.expo.dev/more/expo-cli/)
