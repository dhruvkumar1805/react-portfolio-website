import React from "react";
import "./main.css";
import { motion } from "framer-motion";

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
  return (
    <div className="main">
      <div className="mainWrapper">
        <motion.div
          className="container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <img src="/src/assets/hero.png" alt="" />
          <motion.img
            className="reactLogo"
            src="/src/assets/react.png"
            alt=""
            animate={{
              x: [0, 7, -7, 0],
              rotate: [0, 7, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.img
            className="javascriptLogo"
            src="/src/assets/javascript.png"
            alt=""
            animate={{
              y: [0, 7, -7, 0],
              rotate: [0, 7, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.img
            className="githubLogo"
            src="/src/assets/github.png"
            alt=""
            animate={{
              x: [0, 7, -7, 0],
              rotate: [0, 7, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.img
            className="linuxLogo"
            src="/src/assets/linux.png"
            alt=""
            animate={{
              y: [0, 7, -7, 0],
              rotate: [0, 7, -7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.h1 variants={textVariants}>Hi, I'm Dhruv</motion.h1>
          <motion.p variants={textVariants} className="mainDescription">
            Crafting Seamless Code for Unparalleled Digital Excellence.
          </motion.p>
          <motion.p variants={textVariants} className="description">
            Versatile Web and Android Developer, crafting impactful experiences.
            Let's collaborate on innovative projects.
          </motion.p>
          <motion.button
            variants={textVariants}
            className="mainButton"
            whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
          >
            See my works
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
      >
        Developer Tech Enthusiast Programmer Designer
      </motion.div>
    </div>
  );
};

export default Main;
