import React from "react";
import "./page.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Detail",
      path: "/detail",
      icon: "https://cdn.lordicon.com/hmpomorl.json",
    },
    {
      title: "Transfer",
      path: "/transfer",
      icon: "https://cdn.lordicon.com/qzfzkbxi.json",
    },
    {
      title: "News",
      path: "/news",
      icon: "https://cdn.lordicon.com/xovdoewm.json",
    },
    {
      title: "Security Center",
      path: "/security",
      icon: "https://cdn.lordicon.com/fgxwhgfp.json",
    },
    {
      title: "Quantization Tutorial",
      path: "/quant-tutorial",
      icon: "https://cdn.lordicon.com/edcgvlnw.json",
    },
    {
      title: "Common Problem",
      path: "/problems",
      icon: "https://cdn.lordicon.com/lltgvngb.json",
    },
    {
      title: "About Us",
      path: "/about",
      icon: "https://cdn.lordicon.com/tebysptx.json",
    },
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
        <motion.div
          className="profile-header"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {" "}
          <div className="avatar"></div>{" "}
          <div>
            {" "}
            <h2>My Account</h2>{" "}
            <p className="subtitle">Profile and account details</p>{" "}
          </div>{" "}
        </motion.div>{" "}
        {/* Stats */}{" "}
        <motion.div
          className="stats"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {" "}
          <div className="stat-box">
            {" "}
            <h3>Profit Assets (USDT)</h3> <p className="stat-value">0.00</p>{" "}
          </div>{" "}
          <div className="stat-box">
            {" "}
            <h3>Total Revenue (USDT)</h3> <p className="stat-value">0.00</p>{" "}
          </div>{" "}
        </motion.div>{" "}
        {/* Revenue Row */}{" "}
        <motion.div
          className="today-revenue"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, staggerChildren: 0.1 }}
        >
          {" "}
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
              {" "}
              <h2 className="revenue-header">{label}</h2>{" "}
              <p className="revenue-sub">0</p>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>
        <motion.div className="services">
          {services.map((item, idx) => (
            <motion.button
              key={idx}
              className="service-btn"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              onClick={() => navigate(item.path)}
            >
              <lord-icon src={item.icon} trigger="loop" className="icon" />
              {item.title}
            </motion.button>
          ))}
        </motion.div>
        <motion.button className="signout-btn">Sign Out</motion.button>
      </motion.div>
    </motion.div>
  );
}
