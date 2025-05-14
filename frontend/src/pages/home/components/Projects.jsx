import { Slider, SliderCard } from "@components";
import { PROJECTS } from "@constants/content";
import { cardFadeUp } from "@styles/animations";
import { responsiveText } from "@styles/responsiveText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-200px" });

  return (
    <section ref={sectionRef} id="projects" className="section overflow-hidden">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {PROJECTS.title} <span>{PROJECTS.tagline}</span>
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col items-center justify-between h-[300px] sm:h-[400px] lg:h-[500px]"
      >
        <motion.div variants={cardFadeUp} className="relative w-[70%] h-full">
          <Slider>
            {PROJECTS.points.map((project, index) => (
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
