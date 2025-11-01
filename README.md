# 🌓 Fast.com Dark Mode Extension

A lightweight Chrome/Edge extension that adds a **dark theme** to [Fast.com](https://fast.com), lets you **toggle it on/off**, and even shows a **mini preview of the site** when you’re browsing elsewhere.

---

## ✨ Features

-   🌑 **Dark Mode** — Clean, eye-friendly theme for Fast.com
-   ⚡ **Keyboard Shortcut** — Instantly toggle with `Ctrl + Shift + F`
-   🧭 **Popup Toggle** — Enable or disable from the popup UI
-   🔍 **Mini Preview** — When you’re not on Fast.com, see a live embedded view of it
-   💾 **Persistent Setting** — Remembers your dark mode preference using Chrome Storage

---

## 🧩 Folder Structure

```

fast-dark-theme/
├── manifest.json
├── popup.html
├── popup.js
├── dark.css
├── cleaner.js
├── background.js
└── icon48.png

```

---

## ⚙️ Installation (Dev Mode)

1. Open **chrome://extensions**
2. Enable **Developer mode** (top right)
3. Click **“Load unpacked”**
4. Select your `fast-dark-theme/` folder
5. Visit [https://fast.com](https://fast.com) — dark mode ready! 🌙

---

## ⌨️ Keyboard Shortcut

-   Default: **Ctrl + Shift + F**
-   Change it anytime at [chrome://extensions/shortcuts](chrome://extensions/shortcuts)

---

## 💡 Notes

-   The embedded Fast.com preview may be **non-interactive** (due to iframe restrictions by Netflix).
-   You can modify `dark.css` to fine-tune the look.
-   Works in **Chrome, Edge, Brave**, and other Chromium-based browsers.
