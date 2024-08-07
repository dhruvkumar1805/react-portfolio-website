import React, { useRef, useState } from "react";
import "./contact.css";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext";

const variants = {
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

const Contact = () => {
  const { isLightMode } = useTheme();
  const contactStyle = {
    background: isLightMode ? "#eaeaea" : "#0c0c1d",
    color: isLightMode ? "#333333" : "lightgray",
  };

  const formStyle = {
    borderColor: isLightMode && "#333333",
    color: isLightMode ? "#333333" : "lightgray",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState(null);

  const backendUrl = process.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${backendUrl}/send-email`, formData);
      setSubmitMessage("Success :)");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage("Error sending email. Please try again later.");
    }

    setTimeout(() => {
      setSubmitMessage(null);
    }, 3000);
  };

  const ref = useRef();

  const isSmallScreen = window.innerWidth <= 400;
  const isInView = useInView(ref, { margin: isSmallScreen ? "0px" : "-200px" });
  return (
    <div className="contact" style={contactStyle}>
      <motion.div
        className="contactWrapper"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
      >
        <motion.div className="textContainer" variants={variants}>
          <h1>Let's work together</h1>
          <div className="textItems">
            <motion.div className="item" variants={variants}>
              <h2>Mail</h2>
              <span>dhruvkumar1805@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Address</h2>
              <span>Ludhiana, Punjab, India</span>
            </motion.div>
          </div>
        </motion.div>
        <div className="formContainer">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              style={formStyle}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={formStyle}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              rows={8}
              placeholder="Message"
              value={formData.message}
              style={formStyle}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <motion.button
              className="submitButton"
              whileHover={{ boxShadow: "0 0 1rem #1756dd" }}
            >
              Submit
            </motion.button>
            {submitMessage && (
              <motion.div
                className="submitMessage"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
