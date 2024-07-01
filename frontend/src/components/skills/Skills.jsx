import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.css";
import { skills } from "./skillsData";
import { useTheme } from "../../context/ThemeContext";

const containerVariants = {
  initial: {
    y: 100,
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

const Skills = () => {
  const { isLightMode } = useTheme();
  const skillsStyle = {
    background: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };
  const skillStyle = {
    borderColor: isLightMode && "#878787",
    color: isLightMode ? "#333333" : "lightgray",
  };

  const ref = useRef();

  const isSmallScreen = window.innerWidth <= 400;
  const isInView = useInView(ref, { margin: isSmallScreen ? "0px" : "-200px" });

  return (
    <div className="skills" style={skillsStyle}>
      <div className="skillsWrapper">
        <motion.div
          className="skillsContainer"
          variants={containerVariants}
          initial="initial"
          animate={isInView && "animate"}
          ref={ref}
        >
          <div>
            <h1>Skills</h1>
            <p className="skillsContainerDescription">
              Over the past 2 years, I've developed skills in various domains,
              here are those languages and tools
            </p>
            <motion.div
              className="skillsBoxContainer"
              variants={containerVariants}
              initial="initial"
              animate={isInView && "animate"}
            >
              {skills.map((skill) => (
                <motion.div
                  className="skill"
                  style={skillStyle}
                  key={skill.title}
                  variants={childVariants}
                >
                  <h1 className="skillTitle">{skill.title}</h1>
                  <ul className="skillList">
                    {skill.skills.map((item) => (
                      <motion.li
                        className="skillItem"
                        style={skillStyle}
                        whileHover={{
                          scale: 1.05,
                          border: "none",
                          backgroundColor: isLightMode
                            ? "#474747"
                            : "lightgray",
                          color: isLightMode ? "lightgray" : "black",
                        }}
                        key={item.name}
                        variants={childVariants}
                      >
                        <img
                          className="skillImage"
                          src={item.image}
                          alt={item.name}
                        />
                        <p className="skillItemName">{item.name}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
