import React from "react";
import "./ProjectDetail.css";
import { motion } from "framer-motion";

const ProjectDetail = ({ project, onClose }) => {
  return (
    <div className="projectDetailOverlay">
      <div className="projectDetail">
        <svg
          className="closeButton"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onClose}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <img src={project.image} alt={project.name} />
        <div className="projectDetailTags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="projectDetailTextContainer">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className="detailButtons">
            <motion.a
              href={project.code}
              target="_blank"
              whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
            >
              View Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
            >
              See Live
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
