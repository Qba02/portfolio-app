import React, { useRef } from "react";
import { EnvelopeCanvas, ContactForm } from "../components/index";
import { responsiveText } from "../styles/responsiveText";
import { contact } from "../constants/content";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { cardFadeLeft, cardFadeRight } from "../styles/animations";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section ref={sectionRef} id="contact" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {contact.title}
        <span>{contact.tagline}</span>
      </h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col lg:flex-row justify-around"
      >
        <motion.div variants={cardFadeLeft} className="w-full lg:w-[40%]">
          <ContactForm />
        </motion.div>
        <motion.div variants={cardFadeRight} className="w-full lg:w-[50%]">
          <EnvelopeCanvas />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
