import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NOT_FOUND_PAGE } from "@constants/content";
import { PAGES_URL } from "@constants/links";
import { light_404, dark_404 } from "@assets";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="min-h-screen bg-light dark:bg-dark flex flex-col items-center justify-center p-6"
    >
      <div className="mb-5 w-fit h-fit">
        <img
          src={dark_404}
          alt="PabloVisuals custom 404 error"
          className="dark:hidden cursor-pointer h-80 object-contain hover:scale-105 
            hover:-rotate-6 transition-transform duration-300"
        />
        <img
          src={light_404}
          alt="PabloVisuals custom 404 error"
          className="hidden dark:block cursor-pointer h-80 object-contain hover:scale-105
            hover:-rotate-6 transition-transform duration-300"
        />
      </div>

      <p className="text-xl text-tertiary dark:text-gray-200 mb-8">
        {NOT_FOUND_PAGE.tagline}
      </p>
      <Link
        to={PAGES_URL.home}
        className="inline-block px-6 py-3 bg-dark text-light dark:text-dark dark:bg-light 
        font-medium rounded-lg hover:scale-110 transition"
      >
        {NOT_FOUND_PAGE.returnToMainPage}
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;
