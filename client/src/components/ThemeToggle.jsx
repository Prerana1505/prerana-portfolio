import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <FiSun size={19} />
      ) : (
        <FiMoon size={19} />
      )}
    </button>
  );
}

export default ThemeToggle;