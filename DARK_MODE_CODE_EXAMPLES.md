# Dark Mode Implementation - Code Examples

## 1. Using the Theme Store

### In Any Component
```jsx
import useThemeStore from '#store/theme.jsx';

const MyComponent = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};
```

## 2. Adding Dark Mode to New Components

### Basic Component Styling
```jsx
// Without dark mode
<div className="bg-white text-black">
  Content
</div>

// With dark mode
<div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
  Content
</div>
```

### Using the ThemeToggle Component
```jsx
import { ThemeToggle } from '#components';

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1>My App</h1>
      <ThemeToggle />
    </header>
  );
};
```

## 3. CSS Patterns Used

### Window Components
```css
#window {
  @apply bg-white dark:bg-gray-900 transition-colors;
}

#window-header {
  @apply bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700;
}
```

### Text Elements
```css
p {
  @apply text-gray-800 dark:text-gray-100;
}
```

### Borders and Backgrounds
```css
.container {
  @apply border border-gray-200 dark:border-gray-700;
  @apply bg-white dark:bg-gray-900;
}
```

### Hover States
```css
.button {
  @apply hover:bg-gray-200 dark:hover:bg-gray-700;
}
```

## 4. Color Palette Reference

### Light Mode
- Background: `white` (#ffffff)
- Secondary Background: `gray-50` (#f9fafb)
- Text: `black` to `gray-800`
- Borders: `gray-200` (#e5e7eb)
- Accents: Blues, pinks (unchanged)

### Dark Mode
- Background: `gray-900` (#111827)
- Secondary Background: `gray-800` (#1f2937)
- Text: `white` to `gray-100`
- Borders: `gray-700` (#374151)
- Accents: Blues, pinks (slightly lighter)

## 5. localStorage API

### Getting Theme
```javascript
const savedTheme = localStorage.getItem('theme');
// Returns: 'light', 'dark', or null
```

### Setting Theme
```javascript
localStorage.setItem('theme', 'dark');
```

### Clearing Theme
```javascript
localStorage.removeItem('theme');
// Will use system preference on next load
```

## 6. System Preference Detection

### Detecting System Preference
```javascript
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
// Returns: true or false
```

### Listening for Changes
```javascript
const query = window.matchMedia('(prefers-color-scheme: dark)');

query.addEventListener('change', (e) => {
  const isDark = e.matches;
  // Update theme accordingly
});
```

## 7. Common Use Cases

### Conditional Rendering Based on Theme
```jsx
const { theme } = useThemeStore();

return (
  <div>
    {theme === 'dark' && <DarkModeIcon />}
    {theme === 'light' && <LightModeIcon />}
  </div>
);
```

### CSS-in-JS with Theme
```jsx
const getStyles = (theme) => ({
  background: theme === 'dark' ? '#111827' : '#ffffff',
  color: theme === 'dark' ? '#f3f4f6' : '#000000',
});

const MyComponent = () => {
  const { theme } = useThemeStore();
  return <div style={getStyles(theme)}>Content</div>;
};
```

### Component Variants
```jsx
const Button = ({ variant = 'default' }) => {
  const buttonClasses = {
    default: 'bg-blue-600 dark:bg-blue-700 text-white',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
  };

  return <button className={buttonClasses[variant]}>Click me</button>;
};
```

## 8. Testing Theme Functionality

### Manual Testing Checklist
- [ ] Click theme toggle button
- [ ] Verify colors change smoothly
- [ ] Refresh page and verify theme persists
- [ ] Clear localStorage and verify system preference applies
- [ ] Check all windows styled properly in both modes
- [ ] Verify no text is illegible in either mode
- [ ] Test on different screen sizes
- [ ] Check hover states in both modes

### Automated Testing Example
```javascript
// Using vitest/jest
describe('Theme Store', () => {
  test('toggles theme', () => {
    const store = useThemeStore();
    const initialTheme = store.theme;
    store.toggleTheme();
    expect(store.theme).toBe(initialTheme === 'light' ? 'dark' : 'light');
  });

  test('persists theme to localStorage', () => {
    const store = useThemeStore();
    store.setTheme('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
```

## 9. Performance Considerations

### CSS Transitions
Theme changes use 200ms transitions:
```css
@apply transition-colors duration-200;
```

This is fast enough for smooth UX but slow enough to see the change.

### Re-renders
Zustand's store efficiently updates only components using the `useThemeStore` hook, preventing unnecessary re-renders of unaffected components.

### localStorage Access
localStorage access is minimal - only on theme change and page initialization, making it performant.

## 10. Accessibility

### ARIA Labels
```jsx
<button
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
>
  {theme === 'light' ? <Moon /> : <Sun />}
</button>
```

### Respecting User Preferences
The implementation respects `prefers-color-scheme` media query, honoring user's system settings.

### Color Contrast
All colors in dark mode maintain WCAG AA contrast ratios for accessibility.
