import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    if (theme === "light") {
      root.style.setProperty("--bg-primary", "#F0F4F8");
      root.style.setProperty("--bg-secondary", "#E2E8F0");
      root.style.setProperty("--bg-card", "#FFFFFF");
      root.style.setProperty("--text-primary", "#1A202C");
      root.style.setProperty("--text-secondary", "#4A5568");
      root.style.setProperty("--border", "rgba(0,0,0,0.08)");
      document.body.style.backgroundColor = "#F0F4F8";
      document.body.style.color = "#1A202C";
    } else {
      root.style.setProperty("--bg-primary", "#0D1B2A");
      root.style.setProperty("--bg-secondary", "#1A2744");
      root.style.setProperty("--bg-card", "#162032");
      root.style.setProperty("--text-primary", "#FFFFFF");
      root.style.setProperty("--text-secondary", "#94A3B8");
      root.style.setProperty("--border", "rgba(255,255,255,0.08)");
      document.body.style.backgroundColor = "#0D1B2A";
      document.body.style.color = "#FFFFFF";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}