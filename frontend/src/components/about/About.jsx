import React, { useRef } from "react";
import "./about.css";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const containerVariants = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  const { isLightMode } = useTheme();
  const aboutStyle = {
    background: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };
  const ref = useRef();

  const isSmallScreen = window.innerWidth <= 400;
  const isInView = useInView(ref, { margin: isSmallScreen ? "0px" : "-200px" });

  return (
    <div className="about" style={aboutStyle}>
      <div className="aboutWrapper">
        <motion.div
          className="aboutContainer"
          variants={containerVariants}
          initial="initial"
          animate={isInView && "animate"}
          ref={ref}
        >
          <motion.h1 variants={childVariants}>About</motion.h1>
          <motion.div className="aboutContent" variants={childVariants}>
            <img src="/assets/about.jpg" alt="" />
            <motion.div
              className="aboutRightContainer"
              variants={childVariants}
            >
              <motion.p variants={childVariants}>
                Greetings! I am a passionate developer hailing from Ludhiana,
                Punjab, India. Currently pursuing BCA at Chandigarh University,
                Mohali. I completed my 12th grade at BVM Sr. Sec. School,
                Ludhiana. Fueled by a passion for coding, I'm on a continuous
                learning journey dedicated to transforming creative ideas into
                digital realities.
              </motion.p>
              <motion.p className="textPara" variants={childVariants}>
                Explore my portfolio to witness the synergy between my education
                and coding proficiency. It reflects my evolution as a committed
                developer, showcasing projects that encapsulate my growth in the
                dynamic world of development. Join me in this exciting
                exploration of innovation!
              </motion.p>
              <motion.a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resumeButton"
                whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
                variants={childVariants}
              >
                Get Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
