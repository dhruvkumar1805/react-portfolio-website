import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.css";
import { skills } from "./skillsData";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
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
            <div className="skillsBoxContainer">
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
