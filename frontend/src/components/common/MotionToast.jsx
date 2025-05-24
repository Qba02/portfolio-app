import { AnimatePresence, motion } from "framer-motion";

const MotionToast = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="toast"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionToast;
