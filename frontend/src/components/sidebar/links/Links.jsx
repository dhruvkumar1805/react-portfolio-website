import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const { isLightMode, toggleTheme } = useTheme();

  const linksStyle = {
    color: isLightMode ? "lightgray" : "#333333",
  };
  const items = ["Homepage", "Skills", "Projects", "About", "Contact"];

  return (
    <motion.div className="links" variants={variants} style={linksStyle}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
