import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.css";
import { useTheme } from "../../context/ThemeContext";

const Cursor = () => {
  const { isLightMode } = useTheme();
  const cursorStyle = {
    backgroundColor: isLightMode && "#333333",
    borderColor: isLightMode && "#333333",
  };

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const outerCircleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 0.6,
      scale: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const innerCircleVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="cursor">
      <motion.div
        className="outer-circle"
        variants={outerCircleVariants}
        initial="initial"
        animate="animate"
        style={{ borderColor: isLightMode && "#333333" }}
      ></motion.div>
      <motion.div
        className="inner-circle"
        variants={innerCircleVariants}
        initial="initial"
        animate="animate"
        style={{
          left: mousePosition.x - 5,
          top: mousePosition.y - 5,
          backgroundColor: isLightMode && "#333333",
        }}
      ></motion.div>
    </div>
  );
};

export default Cursor;
