import { ContactForm, EnvelopeCanvas } from "@components";
import { CONTACT } from "@constants/content";
import { cardFadeLeft, cardFadeRight } from "@styles/animations";
import { responsiveText } from "@styles/responsiveText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section ref={sectionRef} id="contact" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {CONTACT.title}
        <span>{CONTACT.tagline}</span>
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col lg:flex-row justify-around"
      >
        <motion.div variants={cardFadeLeft} className="w-full lg:w-[40%]">
          <ContactForm />
        </motion.div>
        <motion.div
          variants={cardFadeRight}
          className="w-full lg:w-[50%] cursor-grab"
        >
          <EnvelopeCanvas />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
