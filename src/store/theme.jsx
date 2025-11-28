import { create } from 'zustand';

const useThemeStore = create((set) => {
  // Check localStorage for saved theme preference, default to 'light'
  const getSavedTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const initialTheme = getSavedTheme();

  return {
    theme: initialTheme,
    setTheme: (theme) =>
      set(() => {
        localStorage.setItem('theme', theme);
        if (document.documentElement) {
          document.documentElement.classList.toggle('dark', theme === 'dark');
        }
        return { theme };
      }),
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (document.documentElement) {
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        return { theme: newTheme };
      }),
  };
});

export default useThemeStore;
