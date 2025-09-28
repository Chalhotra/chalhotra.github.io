import { GoMoon, GoSun } from "react-icons/go";
import { useTheme } from "../contexts/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      data-theme={theme}
    >
      {theme === "light" ? <GoSun /> : <GoMoon />}
    </button>
  );
}
