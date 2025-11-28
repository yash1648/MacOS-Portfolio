# Architecture Overview

## Structure
- Frontend: React + Vite
- State management: `zustand` with `immer` middleware
- Windows: Components wrapped by `WindowWrapper` providing animations and drag
- Styling: Tailwind CSS (v4 utility classes) via `index.css`
- Assets: `public/images`, `public/icons`, `public/files`

## Key Components
- `src/windows/Finder.jsx`: Finder window rendering folders/files from `locations`
- `src/windows/Photo.jsx`: Gallery window rendering images from `gallery`
- `src/windows/Resume.jsx`: PDF viewer for resume
- `src/windows/Safari.jsx`: Blog articles list
- `src/hoc/WindowWrapper.jsx`: Adds GSAP animations and draggable window behavior
- `src/store/Window.jsx`: Window open/close/focus state
- `src/store/location.jsx`: Active Finder location state
- `src/constants/index.js`: Data sources for UI and content

## Dependencies
- React, Vite, Zustand, GSAP, Tailwind
- Dev: ESLint, Vitest, React Testing Library, jsdom

## Notes
- Vite dev host is `0.0.0.0`; SPA served by Nginx in Docker

