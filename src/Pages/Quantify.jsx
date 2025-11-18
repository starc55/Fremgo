import React, { useState, useEffect } from "react";
import "./page.css";
import { vipData } from "../data/quantifyData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VipCard = ({ vip }) => {
  return (
    <motion.div
      className="vip-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="vip-title">{vip.level}</h3>
      <div className="vip-details">
        {[
          { label: "Qunt Per Day", value: vip.quntPerDay },
          { label: "Profit Ratio", value: vip.ratio },
          { label: "Promoter", value: vip.promoter },
          { label: "Minimum Unlock Amount", value: vip.unlock },
          { label: "Minimum Quantify Days", value: vip.quantDays },
        ].map((item, idx) => (
          <p key={idx}>
            {item.label}: <span>{item.value}</span>
          </p>
        ))}
      </div>

      <div className="strategies">
        {vip.strategies.map((s, idx) => (
          <span key={idx} className="strategy">
            {s}
          </span>
        ))}
      </div>

      <button className={vip.current ? "current-btn" : "unlock-btn"}>
        {vip.current ? "Current Level" : "Click To Unlock"}
      </button>
    </motion.div>
  );
};

const Quantify = () => {
  const navigate = useNavigate();
  const [resetTime, setResetTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(23 - now.getHours()).padStart(2, "0");
      const minutes = String(59 - now.getMinutes()).padStart(2, "0");
      const seconds = String(59 - now.getSeconds()).padStart(2, "0");
      setResetTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTransaction = () => {
    const newRecord = {
      type: "Quantify Start",
      amount: 0,
      date: new Date().toLocaleString(),
      status: "Success",
    };

    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    saved.push(newRecord);
    localStorage.setItem("transactions", JSON.stringify(saved));
  };

  return (
    <div className="quantify-container">
      <div className="quantify-header">
        <div className="header-stats">
          <div className="current-level">
            <p>vip0</p>
          </div>
          <div>
            <p>Total Revenue</p>
            <h2>0.00 USDT</h2>
          </div>
          <div>
            <p>Profit Assets</p>
            <h2>0.00 USDT</h2>
          </div>
        </div>

        <div className="header-info">
          {[
            { label: "Today's Earnings", value: 0 },
            { label: "Quantifiable Users", value: 180 },
            { label: "Countdown", value: 176 },
          ].map((item, idx) => (
            <div key={idx}>
              <p>{item.label}</p>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="reset-time">
          <p>Quantify Reset Time:</p>
          <span>{resetTime}</span>
        </div>
      </div>

      <div className="quantify-start">
        <button className="start-btn" onClick={addTransaction}>
          0 / 0 Start Quantify
        </button>
        <p className="records-link" onClick={() => navigate("/records")}>
          Transaction Records
        </p>
      </div>

      <motion.div
        className="vip-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {vipData.map((vip, i) => (
          <VipCard key={i} vip={vip} />
        ))}
      </motion.div>
    </div>
  );
};

export default Quantify;
