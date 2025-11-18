import React from "react";
import { motion } from "framer-motion";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const About = () => {
  return (
    <>
      <BackHeader title="About Us" />

      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Introduction */}
        <motion.div
          className="about-section"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="about-title">
            📣 Fremgo — Leading the Future of Smart Digital Investment
          </h1>
          <p className="about-text">
            Fremgo is a modern investment platform designed to provide safe,
            transparent, and highly efficient opportunities in the
            cryptocurrency market. Our mission is to empower users with powerful
            financial tools that create stable daily returns and long-term
            financial freedom.
          </p>
          <p className="about-text">
            Built upon advanced investment technologies from 2025, Fremgo today
            offers users a structured VIP system, referral rewards, and a
            scalable team-growth model that ensures sustainable and consistent
            profit.
          </p>
        </motion.div>

        {/* VIP Levels */}
        <h2 className="section-header">⭐ VIP LEVELS MENU</h2>

        <div className="vip-list">
          {[
            { level: "VIP 1", min: "$10 – $199", profit: "2.5% Daily Profit" },
            { level: "VIP 2", min: "$200 – $499", profit: "3.5% Daily Profit" },
            { level: "VIP 3", min: "$500 – $999", profit: "4% Daily Profit" },
            {
              level: "VIP 4",
              min: "$1000 – $4999",
              profit: "4.5% Daily Profit",
            },
          ].map((vip, index) => (
            <motion.div
              className="vip-card"
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>💎 {vip.level}</h3>
              <p>Minimum Deposit: {vip.min}</p>
              <p className="vip-profit">{vip.profit}</p>
            </motion.div>
          ))}
        </div>

        {/* VIP Upgrade Requirements */}
        <h2 className="section-header">🔄 VIP LEVEL UPGRADE REQUIREMENTS</h2>

        <div className="upgrade-box">
          <p>
            <b>VIP 1:</b> Activated with a minimum $10 deposit
          </p>
          <p>
            <b>VIP 2:</b> Invite 3 friends who reach VIP 1
          </p>
          <p>
            <b>VIP 3:</b> Invite 3 friends who reach VIP 2
          </p>
          <p>
            <b>VIP 4:</b> Invite 3 friends who reach VIP 3
          </p>
          <p className="highlight">
            ➡️ The higher the level, the higher the daily rewards.
          </p>
        </div>

        {/* Referral Program */}
        <h2 className="section-header">🤝 REFERRAL PROGRAM & REWARDS</h2>

        <div className="about-section">
          <p className="about-text">
            Fremgo values community growth. You earn bonuses every time you
            bring in new members.
          </p>
          <div className="ref-box">
            <p>
              🎁 <b>You receive 5%</b> from each invited friend’s deposit.
            </p>
            <h4>👑 3-Level Daily Referral Earnings:</h4>

            <div className="ref-table">
              <div className="ref-row">
                <span>1st Generation</span>
                <span>10%</span>
              </div>
              <div className="ref-row">
                <span>2nd Generation</span>
                <span>5%</span>
              </div>
              <div className="ref-row">
                <span>3rd Generation</span>
                <span>2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <h2 className="section-header">🚀 Why Choose Fremgo?</h2>

        <div className="why-grid">
          {[
            "✔ Stable daily profits",
            "✔ Clear and transparent reward system",
            "✔ Strong team-growth benefits",
            "✔ Fast and secure operations",
            "✔ Designed for long-term sustainable success",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="why-item"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;
