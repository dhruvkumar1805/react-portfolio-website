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
          <motion.h1 variants={textVariants}>Hi, I'm Dhruv</motion.h1>
          <motion.p variants={textVariants}>
            Crafting Seamless Code for Unparalleled Digital Excellence.
          </motion.p>
          <motion.p variants={textVariants} className="description">
            Web and Android dev: crafting seamless digital experiences with a
            background in custom ROM development.
          </motion.p>
          <motion.button variants={textVariants} className="mainButton">
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
