import { navLinks } from "@constants/links";
import { cardFadeUp, gridContainerMotions } from "@styles/animations";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function HomeMenu() {
  return (
    <div className="w-full flex justify-end">
      <motion.ul
        variants={gridContainerMotions}
        initial="hidden"
        animate="show"
        className="hidden list-none md:flex items-center gap-12"
      >
        {navLinks.map((link) => (
          <motion.li key={link.id} variants={cardFadeUp}>
            <Link
              to={link.id}
              smooth={true}
              duration={100}
              className="nav"
              spy={true}
              offset={-150}
              activeClass="text-secondary"
            >
              {link.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default HomeMenu;
