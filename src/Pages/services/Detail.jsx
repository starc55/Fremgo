import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackHeader from "../../components/BackHeader";
import "./services.css";
import { TiFilter } from "react-icons/ti";
import { TbMoodEmpty } from "react-icons/tb";

export default function Detail() {
  const [activeTab, setActiveTab] = useState("quant");
  const [showFilter, setShowFilter] = useState(false);

  const filterOptions = [
    "All",
    "User recharge",
    "Investment Deductions",
    "Transfer income",
    "Invitation rewards",
    "Registration gift",
    "Quantitative earnings",
    "Investment Redemption",
    "Withdrawal deduction",
    "Transfer deduction",
  ];

  return (
    <>
      <BackHeader title="Financial" />

      <motion.div
        className="financial-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Tabs + Filter */}
        <div className="top-tabs">
          {/* Quant Tab */}
          <div
            className={`tab ${activeTab === "quant" ? "active" : ""}`}
            onClick={() => setActiveTab("quant")}
          >
            Quantitative Account
            {activeTab === "quant" && <div className="underline" />}
          </div>

          {/* Profit Tab */}
          <div
            className={`tab ${activeTab === "profit" ? "active" : ""}`}
            onClick={() => setActiveTab("profit")}
          >
            Profit Assets
            {activeTab === "profit" && <div className="underline" />}
          </div>

          {/* Filter */}
          <TiFilter
            className="filter-icon"
            onClick={() => setShowFilter(true)}
          />
        </div>

        {/* EMPTY CONTENT */}
        <div className="empty-box">
          <TbMoodEmpty className="empty-image" />
          <p className="empty-text">Empty</p>
        </div>
      </motion.div>

      {/* BOTTOM SHEET (FILTER) */}
      <AnimatePresence>
        {showFilter && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilter(false)}
            />

            {/* SHEET */}
            <motion.div
              className="bottom-sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="sheet-content">
                {filterOptions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="filter-item"
                    whileTap={{ scale: 0.97 }}
                  >
                    {item}
                  </motion.div>
                ))}

                {/* Cancel */}
                <div
                  className="cancel-btn"
                  onClick={() => setShowFilter(false)}
                >
                  Cancel
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
