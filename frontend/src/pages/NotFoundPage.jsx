import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6"
    >
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Oops! Strona, której szukasz, nie istnieje.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Wróć na stronę główną
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;
