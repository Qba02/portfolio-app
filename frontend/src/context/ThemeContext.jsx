import { COLOR_MODE_KEY } from "@constants/localstorage";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const DARK = "dark";
const LIGHT = "light";

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(COLOR_MODE_KEY) === DARK;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (isDarkMode) {
      classList.add(DARK);
      localStorage.setItem(COLOR_MODE_KEY, DARK);
    } else {
      classList.remove(DARK);
      localStorage.setItem(COLOR_MODE_KEY, LIGHT);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
