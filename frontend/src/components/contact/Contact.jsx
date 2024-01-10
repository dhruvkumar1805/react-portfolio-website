import React, { useRef, useState } from "react";
import "./contact.css";
import { motion, useInView } from "framer-motion";
import axios from "axios";

const variants = {
  initial: {
    y: 100,
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/send-email", formData);
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

  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="contact">
      <motion.div
        className="contactWrapper"
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
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
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              rows={8}
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button className="submitButton">Submit</button>
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
