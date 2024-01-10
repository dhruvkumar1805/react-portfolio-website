import React, { useRef } from "react";
import "./about.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="about">
      <div className="aboutWrapper">
        <motion.div
          className="aboutContainer"
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          ref={ref}
        >
          <h1>About</h1>
          <div className="aboutContent">
            <img src="/src/assets/about.jpg" alt="" />
            <div className="aboutRightContainer">
              <p>
                Greetings! I am a passionate developer hailing from Ludhiana,
                Punjab, India. Currently pursuing BCA at Chandigarh University,
                Mohali. I completed my 12th grade at BVM Sr. Sec. School,
                Ludhiana. Fueled by a passion for coding, I'm on a continuous
                learning journey dedicated to transforming creative ideas into
                digital realities.
              </p>
              <p className="textPara">
                Explore my portfolio to witness the synergy between my education
                and coding proficiency. It reflects my evolution as a committed
                developer, showcasing projects that encapsulate my growth in the
                dynamic world of development. Join me in this exciting
                exploration of innovation!
              </p>
              <motion.a
                href="/path/to/your/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resumeButton"
                whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
              >
                Get Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
