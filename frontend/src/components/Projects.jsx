import React, { useRef } from "react";
import { Slider, SliderCard } from "../components/index";
import { projects } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";
import { motion, useInView } from "framer-motion";
import { cardFadeUp } from "../styles/animations";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-200px" });

  return (
    <section ref={sectionRef} id="projects" className="section overflow-hidden">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {projects.title} <span>{projects.tagline}</span>
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col items-center justify-between h-[300px] sm:h-[400px] lg:h-[500px]"
      >
        <motion.div variants={cardFadeUp} className="relative w-[70%] h-full">
          <Slider>
            {projects.points.map((project, index) => (
              <SliderCard
                key={index}
                title={project.title}
                bgImg={project.bgImg}
                url={project.url}
              />
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
