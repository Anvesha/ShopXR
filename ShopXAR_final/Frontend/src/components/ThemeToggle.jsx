import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-md text-sm"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
