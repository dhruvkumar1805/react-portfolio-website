import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.css";
import { skills } from "./skillsData";

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

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="skills">
      <div className="skillsWrapper">
        <motion.div
          className="skillsContainer"
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
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
              variants={variants}
              initial="initial"
              animate="animate"
            >
              {skills.map((skill) => (
                <div className="skill">
                  <h1 className="skillTitle">{skill.title}</h1>
                  <ul className="skillList">
                    {skill.skills.map((item) => (
                      <motion.li
                        className="skillItem"
                        whileHover={{
                          scale: 1.05,
                          border: "none",
                          backgroundColor: "lightgray",
                          color: "black",
                        }}
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
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
