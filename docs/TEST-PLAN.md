# Test Plan

## Scope
- Verify existing windows open/close behavior
- Validate Finder draggable content feature
- Ensure photo gallery opens images
- Confirm resume PDF loads

## Manual Tests
- Dock icons open/close windows and preserve z-index focus
- Finder:
  - Drag icons within content area; items move with visual feedback
  - Click icons to open files/folders; drag should not trigger open
  - Drop outside content boundaries clamps position
- Resume: PDF renders first page
- Photo: Clicking a gallery tile opens image window

## Automated Tests
- Unit: `src/windows/__tests__/Finder.drag.test.jsx`
  - Drag start toggles `aria-grabbed` and adds `dragging`
  - Drop sets `left/top` inline style and resets state

## Regression
- Run `npm run build` and preview
- Sanity check in dev and Docker runner

