import { FlipCard } from "@components";
import { OFFER } from "@constants/content";
import { gridContainerMotions } from "@styles/animations";
import { responsiveText } from "@styles/responsiveText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Offer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-200px" });

  return (
    <section ref={sectionRef} id="offer" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {OFFER.title}
        <span>{OFFER.tagline}</span>
      </h2>
      <p className="mb-4 text-center text-dark dark:text-light lg:text-xl">
        Kliknij na karte by dowiedzie się więcej!
      </p>
      <motion.div
        variants={gridContainerMotions}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(310px,1fr))] justify-center"
      >
        {OFFER.points.map((offer, index) => (
          <FlipCard
            key={index}
            index={index}
            title={offer.title}
            icon={
              <offer.icon className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mt-2" />
            }
            subtitle={offer.subtitle}
          ></FlipCard>
        ))}
      </motion.div>
      <p
        className={`${responsiveText.sectionContent} relative text-center p-6 mt-8 border-[1px] border-tertiary rounded-lg`}
      >
        <BsExclamationCircle className="inline absolute -top-2 -left-2 w-7 h-7 text-tertiary dark:text-tertiary bg-light dark:bg-dark"></BsExclamationCircle>
        {OFFER.description}
      </p>
    </section>
  );
};

export default Offer;
