# Svelte MiniApps (SvelteKit 4 Version)

> **⚠️ ARCHIVED: This project has been archived in favor of our new [Svelte 5 version](https://svelte-apps.me). Please visit the new version for the latest updates and improvements.**

## Repository Migration Notice
- **Repository Changes**:
  - This repository has been renamed from `Svelte-MiniApps` to `Svelte-MiniApps-sv4`
  - The new Svelte 5 version is now available at [Svelte-MiniApps](https://github.com/Michael-Obele/Svelte-MiniApps)

## Important Migration Information
- **Authentication Changes**: 
  - OAuth logins will no longer be supported
  - Username/password login will continue to work
  - Users can export their passwords as text before migrating
- **Website Availability**:
  - The old website (this version) will remain accessible for an extended period
  - This ensures a smooth transition for all users

## Table of Contents

- [About](#about) 📝
- [Built for Efficiency](#built-for-efficiency) 🛠️
- [Getting Started](#getting-started) 🏁
- [List of Apps](#list-of-apps) 📋
- [Contributing](#contributing) 🤝
- [License](#license) 📄

## About

Svelte MiniApps offers tools to streamline specific tasks. Whether converting units, generating passwords, or managing to-do lists, there's a mini-app to simplify your day.

## Built for Efficiency

Svelte MiniApps is a single Progressive Web App (PWA) featuring a collection of tools built for various web users. It enhances productivity and organization with the following features:

- **Versatile Tools:** Designed for different needs and difficulty levels.
- **Web-Based:** Built specifically for web users.
- **High Performance:** Fast and efficient.
- **Installable:** Can be added to your device for quick access.
- **Offline Capability:** Works offline once accessed.

## Getting Started

> **Note**: This is the archived SvelteKit 4 version. For the latest version, visit [svelte-apps.me](https://svelte-apps.me)

**Prerequisites:**
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm

**Explore the Mini-Apps:**

```bash
# Clone the archived version
git clone https://github.com/Michael-Obele/Svelte-MiniApps-sv4.git
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

###### **Note**: This version uses SQLite by default. For production environments, it's recommended to use PostgreSQL or MySQL.

### Installable

You can install either version as a PWA:

1. Open the app in your browser
2. Click the browser's install button or menu (three dots)
3. Select "Install" or "Add to Home Screen"

### Live Versions
- **Archived (SvelteKit 4)**: [sv4.svelte-apps.me](https://sv4.svelte-apps.me)
- **Current (Svelte 5)**: [svelte-apps.me](https://svelte-apps.me)

## List of Apps

Explore the full list of mini-apps designed to boost your productivity. Visit [svelte-apps.me/#apps](https://svelte-apps.me/#apps) for details.

## Contributing

We welcome contributions! Fork the repository, make your changes, and submit a pull request.

**Guidelines:**

- **Single-purpose tools:** Each mini-app should focus on a specific task.
- **User-friendly:** Ensure the mini-app is easy to use with clear instructions.
- **Clean code:** Follow Svelte best practices and keep code organized.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/mit).

- You can freely use, modify, and distribute this software.
- You must retain the copyright and license notice in all copies.
- The full license text is in the [`LICENSE`](LICENSE) file in the repository.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d21d41b-36d1-4e3e-9d4a-897788f50b7b/deploy-status)](https://app.netlify.com/sites/svelte-mini-apps/deploys)

<div style="position: relative; padding-bottom: calc(46.40625% + 41px); height: 0;">
	<iframe src="https://story-api.livedemo.ai/workspaces/6740395d9ead5e00083ae87f/stories/6740b5d8037561001dab57aa/preview?step=1&embed" frameBorder="0" loading="lazy"
			webkitallowfullscreen mozallowfullscreen allowFullScreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 6px;"></iframe>
</div>
