import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bharat-portfolio-theme-mode") || "dark";
  });

  useEffect(() => {

    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bharat-portfolio-theme-mode", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;