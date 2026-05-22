import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        padding: "8px 12px",
        cursor: "pointer",
        fontSize: "18px",
        transition: "all 0.3s ease",
        color: "#FFFFFF"
      }}
      title="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}