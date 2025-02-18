# Svelte MiniApps (SvelteKit 4 Version)

> ⚠️ **ARCHIVED:** This project is no longer maintained. Please use our new [Svelte 5 version](https://svelte-apps.me) for the latest features and improvements.

---

## 🚚 Migration Notice
- **Repository renamed:** Now `Svelte-MiniApps-sv4`. The Svelte 5 version is at [Michael-Obele/Svelte-MiniApps](https://github.com/Michael-Obele/Svelte-MiniApps).
- **Authentication:** OAuth logins are discontinued; username/password login remains. Export your data before migrating.
- **Legacy site:** This version will remain accessible for a smooth transition.

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [List of Apps](#list-of-apps)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)

---

## 📝 About
Svelte MiniApps is a collection of focused, single-purpose tools to make your day easier—convert units, generate passwords, manage to-dos, and more—all in one fast, installable PWA.

## ⚡ Features
- **Versatile tools:** From productivity to utilities, all in one place
- **Web-based & installable:** Add to your device as a PWA
- **Offline support:** Works after first load
- **Fast & efficient:** Built with SvelteKit 4
- **Open source:** MIT licensed

## 🚀 Getting Started
> **Note:** This is the archived SvelteKit 4 version. For the latest, visit [svelte-apps.me](https://svelte-apps.me)

**Requirements:**
- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (recommended) or npm

```bash
# Clone the repo
bun create svelte-app Svelte-MiniApps-sv4
cd Svelte-MiniApps-sv4

# Set up environment
cp .env.example .env

# Install dependencies (using Bun)
bun install
bun add @prisma/client
bun add -d prisma

# Start development server
bun run dev
```

> **Note:** Uses SQLite by default. For production, use PostgreSQL or MySQL.

### Install as a PWA
1. Open the app in your browser
2. Use the browser menu (three dots) → "Install" or "Add to Home Screen"

### Live Versions
- **Archived (SvelteKit 4):** [old.svelte-apps.me](https://old.svelte-apps.me)
- **Current (Svelte 5):** [svelte-apps.me](https://svelte-apps.me)

---

## 📱 Demo

> **Note:** GitHub READMEs do not support embedded iframes.
> For an interactive step-by-step preview, visit the LiveDemo link below.
> For a full experience, use the main app link or see the screenshots.

[![Open Demo](https://api.netlify.com/api/v1/badges/0d21d41b-36d1-4e3e-9d4a-897788f50b7b/deploy-status)](https://old.svelte-apps.me)

**🔗 [Interactive LiveDemo Preview (Storybook/Walkthrough)](https://story-api.livedemo.ai/workspaces/6740395d9ead5e00083ae87f/stories/6740b5d8037561001dab57aa/preview?step=1&embed)**

<!--
<div style="position: relative; padding-bottom: calc(46.40625% + 41px); height: 0;">
	<iframe src="https://story-api.livedemo.ai/workspaces/6740395d9ead5e00083ae87f/stories/6740b5d8037561001dab57aa/preview?step=1&embed" frameBorder="0" loading="lazy"
			webkitallowfullscreen mozallowfullscreen allowFullScreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 6px;"></iframe>
</div>
-->


---

## 📋 List of Apps
See the full list at [old.svelte-apps.me/#apps](https://old.svelte-apps.me/#apps)

---

## 🤝 Contributing
We welcome contributions! Fork, make your changes, and submit a pull request.

**Guidelines:**
- Each mini-app should focus on a single task
- Prioritize usability and clarity
- Follow Svelte best practices

---

## 📄 License
MIT License. See [`LICENSE`](LICENSE) for details.

---
