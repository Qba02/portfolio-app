import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  const modeName = "theme";
  const darkModeName = "dark";
  const lightModeName = "light";

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add(darkModeName);
      localStorage.setItem(modeName, darkModeName);
    } else {
      document.documentElement.classList.remove(darkModeName);
      localStorage.setItem(modeName, lightModeName);
    }
  };

  return (
    <button className="ml-12" onClick={toggleTheme}>
      {darkMode ? (
        <MdLightMode className="text-white cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-300" />
      ) : (
        <MdDarkMode className="text-dark cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-300" />
      )}
    </button>
  );
}

export default ThemeSwitch;
