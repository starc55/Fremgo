import React, { useEffect, useState } from "react";
import BackHeader from "../components/BackHeader";
import "./page.css";

const TransactionRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    setRecords(saved);
  }, []);

  return (
    <div className="records-page">
      <BackHeader title="Transaction Records" />

      <div className="records-container">
        {records.length === 0 ? (
          <p className="no-records">No transaction records found.</p>
        ) : (
          records.map((item, index) => (
            <div className="record-card" key={index}>
              <div className="record-row">
                <p>Type:</p>
                <span>{item.type}</span>
              </div>

              <div className="record-row">
                <p>Amount:</p>
                <span>{item.amount} USDT</span>
              </div>

              <div className="record-row">
                <p>Date:</p>
                <span>{item.date}</span>
              </div>

              <div className="record-row">
                <p>Status:</p>
                <span
                  className={item.status === "Success" ? "success" : "pending"}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionRecords;
