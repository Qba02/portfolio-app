import React from "react";
import { hero } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { externalLinks } from "../constants/links";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { textFadeUp } from "../styles/animations";

const Hero = () => {
  const ytLink = externalLinks.find((link) => link.id === "yt");
  const instaLink = externalLinks.find((link) => link.id === "insta");

  return (
    <section
      id="hero"
      className="
                bg-[url('/hero-bg-light.png')]
                dark:bg-[url('/hero-bg-dark.png')]
                relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        initial="hidden"
        animate="show"
        className="
        p-2 rounded-lg bg-white/30 backdrop-blur-sm dark:bg-transparent 
        md:backdrop-blur-0 md:bg-transparent absolute 
        w-[50%] md:w-[33%]
        left-[5%] md:left-[7%]
        dark:left-[5%] dark:sm:left-[7%] dark:md:left-[10%] dark:lg:left-[15%]
        bottom-[10%] sm:bottom-[20%] lg:bottom-[40%] sm:translate-y-1/2"
      >

        <motion.h1
          variants={textFadeUp}
          className={`${responsiveText.heroHeading} text-center w-fit`}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          variants={textFadeUp}
          className={`${responsiveText.heroContent} text-justify mt-1 sm:mt-2 lg:mt-5 w-fit`}
        >
          {hero.content}
        </motion.p>

        <motion.div variants={textFadeUp} className="flex gap-1 sm:gap-6 flex-wrap justify-around sm:justify-start mt-5 w-full">
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-sm lg:text-lg border-[3px] rounded-md font-medium
              border-secondary text-secondary py-2 px-3 xs:px-5 lg:px-7 
              dark:hover:text-light dark:hover:border-light hover:text-dark hover:border-dark
              transition duration-500 ease-in-out`}
            offset={-120}
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-sm lg:text-lg border-[3px] border-dark dark:border-light rounded-md font-medium 
                 dark:bg-light bg-dark dark:text-dark text-light py-2 px-3 xs:px-5 lg:px-7 
                  dark:hover:bg-transparent hover:bg-transparent dark:hover:border-light dark:hover:text-light hover:text-dark 
                  transition duration-500 ease-in-out`}
            offset={-120}
          >
            &nbsp;Oferta&nbsp;
          </Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-3 right-3 sm:bottom-[5%] sm:right-[2%] flex flex-col space-y-5 items-center">
        <div
          className="rounded-sm hidden xl:block w-[3px] h-80 bg-gradient-to-b from-light dark:from-dark
           via-gray-500 to-dark dark:to-light opacity-90"
          aria-hidden="true"
        ></div>
        <a href={ytLink.href} target="_blank" rel="noopener noreferrer">
          <SiYoutube className="social-icon text-white xl:text-inherit"></SiYoutube>
        </a>

        <a href={instaLink.href} target="_blank" rel="noopener noreferrer">
          <SiInstagram className="social-icon text-white xl:text-inherit"></SiInstagram>
        </a>
      </div>
    </section>
  );
};

export default Hero;
