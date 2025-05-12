import { useTheme } from "@context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="ml-12" onClick={toggleTheme}>
      {isDarkMode ? (
        <MdLightMode className="text-white cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-300" />
      ) : (
        <MdDarkMode className="text-dark cursor-pointer w-8 h-8 hover:scale-110 transition-all duration-300" />
      )}
    </button>
  );
}

export default ThemeSwitch;
