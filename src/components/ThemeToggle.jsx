import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-all duration-300 hover:scale-105 hover:text-[var(--accent)]"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}

export default ThemeToggle;