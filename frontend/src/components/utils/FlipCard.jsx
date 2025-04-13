import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardFadeUp } from "../../styles/animations";

export const FlipCard = ({ title, icon, subtitle, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative min-h-36 sm:min-h-48 lg:min-h-56"
      variants={cardFadeUp}
      whileHover={{
        scale: 0.95,
        // rotate: index % 2 === 0 ? 3 : -3,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      <motion.div
        className="preserve-3d cursor-pointer w-ful h-full 
                   text-center rounded-2xl border-[2px] dark:border-tertiary dark:border-[1px]
                   flipcard-shadow-light dark:flipcard-shadow-dark"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
      >
        <div className="flipcard-front">
          <div className="flex w-full h-[70%] justify-center items-center px-4 dark:text-light text-darkGrey">
            {icon}
          </div>
          <div
            className="flex flex-col w-full rounded-b-2xl  h-[30%] justify-center items-center 
                        px-2 bg-white/10"
          >
            <h3 className="text-base lg:text-lg">{title}</h3>
            <p className="text-sm lg:text-base font-light dark:text-light">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flipcard-back">
          <p>BACK !!!</p>
          {/* TEMPORARY <p> ^ */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
