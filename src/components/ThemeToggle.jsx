import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useThemeStore from '#store/theme.jsx';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-gray-600" />
      ) : (
        <Sun size={18} className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
