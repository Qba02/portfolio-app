import { logo, logoDark } from "@assets";
import { ThemeSwitch } from "@components";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ children }) => {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setOnTop(false) : setOnTop(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex items-center justify-between w-full py-3 px-10 transition-all duration-300 ease-in ${
        onTop
          ? "bg-transparent py-8"
          : "bg-light/80 border-b-[1px] border-dark dark:border-0 dark:bg-darkGrey/80 dark:nav-shadow backdrop-blur-md"
      }`}
    >
      <Link to="hero" className="flex items-center">
        <img
          src={logoDark}
          alt="PabloVisuals logo - spartan helmet"
          className="dark:hidden cursor-pointer w-16 h-16 object-contain hover:scale-110 
            hover:-rotate-6 transition-transform duration-300"
        />
        <img
          src={logo}
          alt="PabloVisuals logo - spartan helmet"
          className="hidden dark:block cursor-pointer w-16 h-16 object-contain hover:scale-110 
            hover:-rotate-6 transition-transform duration-300"
        />
      </Link>
      {children}
      <ThemeSwitch className="absolute right-0" />
    </nav>
  );
};

export default Navbar;
