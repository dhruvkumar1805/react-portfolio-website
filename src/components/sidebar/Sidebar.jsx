import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.css";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 49px 47px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
