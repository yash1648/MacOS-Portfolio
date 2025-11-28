# Known Issues

- Finder item positions are defined via Tailwind classes; drag updates inline `left/top` but does not persist across reloads.
- HTML5 drag-and-drop behavior varies slightly across browsers; current implementation targets modern evergreen browsers.
- Automated tests run with jsdom; GSAP window dragging is not covered by unit tests.

