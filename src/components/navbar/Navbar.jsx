import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const navVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span variants={navVariants} initial="initial" animate="animate">
          Dhruv
        </motion.span>
        <div className="social">
          <a href="https://github.com/dhruvkumar1805" target="_blank">
            <motion.img
              src="/src/assets/github.png"
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              variants={navVariants}
              initial="initial"
              animate="animate"
            />
          </a>
          <a href="https://instagram.com/dhruvkumar_1805" target="_blank">
            <motion.img
              src="/src/assets/instagram.png"
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              variants={navVariants}
              initial="initial"
              animate="animate"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
