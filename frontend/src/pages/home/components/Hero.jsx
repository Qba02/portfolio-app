import { hero } from "@constants/content";
import { externalLinks } from "@constants/links";
import { textFadeUp } from "@styles/animations";
import { responsiveText } from "@styles/responsiveText";
import { motion } from "framer-motion";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { Link } from "react-scroll";

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

        <motion.div
          variants={textFadeUp}
          className="flex gap-1 sm:gap-6 flex-wrap justify-around sm:justify-start mt-5 w-full"
        >
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className="secondary-button"
            offset={-120}
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={100}
            className="primary-button"
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
