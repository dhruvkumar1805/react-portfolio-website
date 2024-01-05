import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dhruv
        </motion.span>
        <div className="social">
          <a href="#">
            <motion.img
              src="/src/assets/github.png"
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
          <a href="#">
            <motion.img
              src="/src/assets/instagram.png"
              alt=""
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
