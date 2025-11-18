import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const Transfer = () => {
  const [profitAssets, setProfitAssets] = useState(0);
  const [quantAccount, setQuantAccount] = useState(0);
  const [amount, setAmount] = useState("");
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    const savedCode = localStorage.getItem("userCode");
    if (savedCode) {
      setUserCode(savedCode);
    }
  }, []);

  const confirmHandler = () => {
    console.log("Transfer Amount:", amount);
    console.log("User Code:", userCode);
  };

  return (
    <motion.div
      className="transfer-box"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <BackHeader title="Transfer" />

      {/* TOP BOX */}
      <motion.div
        className="top-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <motion.div
          className="left"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p>Profit Assets</p>
          <h2>{profitAssets}</h2>
        </motion.div>

        <motion.div
          className="arrow-box"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <span>➡️</span>
        </motion.div>

        <motion.div
          className="right"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p>Quantitative Account</p>
          <h2>{quantAccount}</h2>
        </motion.div>
      </motion.div>

      {/* Amount input */}
      <motion.input
        type="number"
        placeholder="Transfer Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        whileFocus={{ scale: 1.02 }}
      />

      {/* User code */}
      <motion.input
        type="text"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        className="input"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      />

      {/* Confirm BTN */}
      <motion.button
        className="confirm-btn"
        onClick={confirmHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
      >
        Confirm
      </motion.button>
    </motion.div>
  );
};

export default Transfer;
