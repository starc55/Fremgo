import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./component.css";

export default function BackHeader({ title }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="back-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="back-btn"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate(-1)}
      >
        ←
      </motion.button>

      <h2 className="back-title">{title}</h2>
    </motion.div>
  );
}
