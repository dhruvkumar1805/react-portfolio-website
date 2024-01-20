import React, { useState, useRef } from "react";
import projectsData from "./projectsData";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./projects.css";
import ProjectDetail from "./ProjectDetail";
import { useTheme } from "../../context/ThemeContext";

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

const Projects = () => {
  const { isLightMode } = useTheme();
  const projectsStyle = {
    background: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };
  const projectStyle = {
    background: isLightMode && "#474747",
    color: isLightMode ? "lightgray" : "#D3D3D3",
  };
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef();

  const isSmallScreen = window.innerWidth <= 400;
  const isInView = useInView(ref, { margin: isSmallScreen ? "0px" : "-200px" });

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div className="projects" style={projectsStyle}>
      <motion.div
        className="projectsWrapper"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
      >
        <motion.div className="projectsContainer">
          <h1>Projects</h1>
          <p>
            Over the past 2 years, I've developed projects in various domains.
          </p>
          <motion.div className="projectsContainerBox">
            {projectsData.map((project) => (
              <motion.div
                className="project"
                style={projectStyle}
                key={project.name}
                onClick={() => openProjectDetail(project)}
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.image} alt="" />
                <motion.div className="tags">
                  {project.tags.map((tag) => (
                    <span>{tag}</span>
                  ))}
                </motion.div>
                <motion.div className="projectTextContainer">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="projectDetailOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectDetail
              project={selectedProject}
              onClose={closeProjectDetail}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
