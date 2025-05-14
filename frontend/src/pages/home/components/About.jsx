import { profilePic } from "@assets";
import { ABOUT_ME } from "@constants/content";
import { cardFadeLeft, cardFadeRight } from "@styles/animations";
import { responsiveText } from "@styles/responsiveText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {ABOUT_ME.title} <span>{ABOUT_ME.tagline}</span>
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col lg:flex-row items-center justify-between"
      >
        <motion.div
          variants={cardFadeLeft}
          className="w-full mb-10 lg:w-[50%] lg:mb-0"
        >
          <p className="text-base lg:text-xl tracking-[4px] text-center uppercase">
            {ABOUT_ME.subtitle}
          </p>
          <p className={`${responsiveText.sectionContent} text-justify`}>
            {ABOUT_ME.content}
          </p>
          <p
            className={`text-gray-500 text-justify mt-2 text-xs sm:text-sm lg:text-base xl:text-lg`}
          >
            {ABOUT_ME.subcontent}
          </p>
          <p
            className={`${responsiveText.sectionContent} text-center italic mt-1 sm:mt-2 lg:mt-5`}
          >
            {ABOUT_ME.quote}
            <span
              className={`${responsiveText.sectionContent} not-italic block`}
            >
              {ABOUT_ME.quoteAuthor}
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={cardFadeRight}
          className="rounded-xl w-full lg:w-[40%] box-shadow-light dark:box-shadow-dark"
        >
          <img
            src={profilePic}
            alt="My profile picture"
            className="object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
