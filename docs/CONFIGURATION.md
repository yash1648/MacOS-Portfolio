# Configuration Guide

## Overview

The portfolio UI and content are configured via `src/constants/index.js`. Update entries there to customize apps, links, projects, tech stack, and gallery images.

## Key Areas

- `dockApps`: Controls Dock items and which windows can open.
- `locations`: Defines Finder folders and their files (projects, about, resume, trash).
- `techStack`, `socials`, `gallery`: Data sources for UI sections.

## Changing Portfolio Content

1. Edit `src/constants/index.js` and update project folders under `locations.work.children`.
2. For images, place assets under `public/images/` and reference with paths like `/images/your-image.png`.
3. For PDFs, place in `public/files/` and reference accordingly.

## Dev Server Configuration

- Vite dev server is configured in `vite.config.js` with `server.host: true` so it is reachable across the network.
- Default dev port is `5173`. You can change preview or container port mappings when running.

## Build Output

- Production build outputs to `dist/` via `npm run build`.
- Docker production image serves this directory via Nginx.

