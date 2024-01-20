import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "../../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  const { isLightMode, toggleTheme } = useTheme();
  const headerStyle = {
    backgroundColor: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };
  return (
    <div className="navbar" style={headerStyle}>
      <Sidebar />
      <div className="wrapper">
        <motion.span variants={navVariants} initial="initial" animate="animate">
          Dhruv
        </motion.span>
        <div className="social">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            <IconButton
              style={isLightMode ? {} : { color: "#d3d3d3" }}
              href="https://www.linkedin.com/in/dhruvkumar1805"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            <IconButton
              style={isLightMode ? {} : { color: "#d3d3d3" }}
              href="https://github.com/dhruvkumar1805"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={navVariants}
            initial="initial"
            animate="animate"
          >
            {isLightMode ? (
              <IconButton onClick={toggleTheme}>
                <LightModeIcon />
              </IconButton>
            ) : (
              <IconButton style={{ color: "#d3d3d3" }} onClick={toggleTheme}>
                <DarkModeIcon />
              </IconButton>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
