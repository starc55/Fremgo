import React from "react";
import "./page.css";
import { motion } from "framer-motion";

export default function Profile() {
  const services = [
    { title: "Detail", icon: "https://cdn.lordicon.com/hmpomorl.json" },
    { title: "Transfer", icon: "https://cdn.lordicon.com/qzfzkbxi.json" },
    { title: "News", icon: "https://cdn.lordicon.com/xovdoewm.json" },
    {
      title: "Security Center",
      icon: "https://cdn.lordicon.com/fgxwhgfp.json",
    },
    {
      title: "Quantization Tutorial",
      icon: "https://cdn.lordicon.com/edcgvlnw.json",
    },
    { title: "Common Problem", icon: "https://cdn.lordicon.com/lltgvngb.json" },
    { title: "About Us", icon: "https://cdn.lordicon.com/tebysptx.json" },
  ];

  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="profile-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="profile-header"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="avatar"></div>
          <div>
            <h2>My Account</h2>
            <p className="subtitle">Profile and account details</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="stat-box">
            <h3>Profit Assets (USDT)</h3>
            <p className="stat-value">0.00</p>
          </div>
          <div className="stat-box">
            <h3>Total Revenue (USDT)</h3>
            <p className="stat-value">0.00</p>
          </div>
        </motion.div>

        {/* Revenue Row */}
        <motion.div
          className="today-revenue"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, staggerChildren: 0.1 }}
        >
          {[
            "Yesterday's Earnings(USDT)",
            "Today's Earnings(USDT)",
            "Commission Today(USDT)",
          ].map((label, idx) => (
            <motion.div
              className="revenue-cards"
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="revenue-header">{label}</h2>
              <p className="revenue-sub">0</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          className="services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {services.map((item, index) => (
            <motion.button
              key={index}
              className="service-btn"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
            >
              <lord-icon src={item.icon} trigger="loop" className="icon" />
              {item.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Sign Out */}
        <motion.button
          className="signout-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Sign Out
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
