import React from "react";
import "./main.css";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const slidingTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      delay: 0.2,
    },
  },
};

const Main = () => {
  const { isLightMode } = useTheme();

  const mainStyle = {
    background: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };

  const descriptionStyle = {
    color: isLightMode && "#2F302D",
  };

  return (
    <div className="main" style={mainStyle}>
      <div className="mainWrapper">
        <motion.div
          className="container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="pfp">
            <img src="/assets/hero.png" alt="" />
            <div className="pfpIcons">
              <motion.img
                className="reactLogo"
                src="/assets/react.png"
                alt=""
                animate={{
                  x: [0, 7, -7, 0],
                  rotate: [0, 7, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />
              <motion.img
                className="javascriptLogo"
                src="/assets/javascript.png"
                alt=""
                animate={{
                  y: [0, 7, -7, 0],
                  rotate: [0, 7, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />
              <motion.img
                className="githubLogo"
                src="/assets/github.png"
                alt=""
                animate={{
                  x: [0, 7, -7, 0],
                  rotate: [0, 7, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />
              <motion.img
                className="linuxLogo"
                src="/assets/linux.png"
                alt=""
                animate={{
                  y: [0, 7, -7, 0],
                  rotate: [0, 7, -7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />
            </div>
          </div>
          <motion.h1 variants={textVariants}>Hi, I'm Dhruv</motion.h1>
          <motion.p variants={textVariants} className="mainDescription">
            Crafting Seamless Code for Unparalleled Digital Excellence.
          </motion.p>
          <motion.p
            variants={textVariants}
            className="description"
            style={descriptionStyle}
          >
            Versatile Web and Android Developer, crafting impactful experiences.
            Let's collaborate on innovative projects.
          </motion.p>
          <motion.a
            href="#Projects"
            variants={textVariants}
            className="mainButton"
            whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
          >
            See my works
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Tech Enthusiast Developer Designer
      </motion.div>
    </div>
  );
};

export default Main;
