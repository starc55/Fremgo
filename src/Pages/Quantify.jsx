import React from "react";
import "./page.css";
import { vipData } from "../data/quantifyData";
import { useState, useEffect } from "react";

const Quantify = () => {
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
          <div>
            <p>Today's Earnings</p>
            <span>0</span>
          </div>
          <div>
            <p>Quantifiable Users</p>
            <span>180</span>
          </div>
          <div>
            <p>Countdown</p>
            <span>176</span>
          </div>
        </div>
        <div className="reset-time">
          <p>Quantify Reset Time:</p>
          <span>{resetTime}</span>
        </div>
      </div>

      {/* Start Quantify Button */}
      <div className="quantify-start">
        <button className="start-btn">0 / 0 Start Quantify</button>
        <p className="records-link">Transaction Records</p>
      </div>

      {/* VIP Levels */}
      <div className="vip-section">
        {vipData.map((vip, i) => (
          <div key={i} className="vip-card">
            <h3 className="vip-title">{vip.level}</h3>
            <div className="vip-details">
              <p>
                Qunt Per Day: <span>{vip.quntPerDay}</span>
              </p>
              <p>
                Profit Ratio: <span>{vip.ratio}</span>
              </p>
              <p>
                Promoter : <span>{vip.promoter}</span>
              </p>
              <p>
                Minimum Unlock Amount: <span>{vip.unlock}</span>
              </p>
              <p>
                Minimum Quantify Days: <span>{vip.quantDays}</span>
              </p>
            </div>

            <div className="strategies">
              {vip.strategies.map((s, idx) => (
                <span key={idx} className="strategy">
                  {s}
                </span>
              ))}
            </div>

            {vip.current ? (
              <button className="current-btn">Current Level</button>
            ) : (
              <button className="unlock-btn">Click To Unlock</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quantify;
