import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.css";
import Links from "./links/Links";
import { useTheme } from "../../context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const variants = {
  open: {
    clipPath: "circle(1200px at 40px 38px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 53px 48px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const { isLightMode } = useTheme();

  const sidebarStyle = {
    background: isLightMode ? "#333333" : "lightgray",
    color: isLightMode ? "#333333" : "lightgray",
  };
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" style={sidebarStyle} variants={variants}>
        <Links />
      </motion.div>
      <button
        className="toggleButton"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <IconButton style={{ color: isLightMode && "lightgray" }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </button>
    </motion.div>
  );
}

export default Sidebar;
