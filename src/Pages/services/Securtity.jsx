import React, { useState } from "react";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const Security = () => {
  const [oldCode, setOldCode] = useState("");
  const [newCode, setNewCode] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!oldCode || !newCode) {
      alert("Please enter both old and new codes!");
      return;
    }
    // Simple validation logic; in real app, verify old code from server
    if (oldCode.length < 4 || newCode.length < 4) {
      alert("Codes must be at least 4 digits.");
      return;
    }
    setIsConfirmed(true);
  };

  const handleChangeCode = () => {
    alert("Your security code has been successfully changed!");
    setOldCode("");
    setNewCode("");
    setIsConfirmed(false);
  };

  return (
    <div className="security-page">
      <BackHeader title="Security Center" />

      <div className="security-container">
        {!isConfirmed ? (
          <div className="form-card">
            <h2>Change Security Code</h2>

            <label>Enter Current Code</label>
            <input
              type="password"
              placeholder="Old Code"
              value={oldCode}
              onChange={(e) => setOldCode(e.target.value)}
            />

            <label>Enter New Code</label>
            <input
              type="password"
              placeholder="New Code"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
            />

            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        ) : (
          <div className="form-card">
            <h2>Confirm Your Change</h2>
            <p>Old Code: ****</p>
            <p>New Code: ****</p>
            <button className="change-btn" onClick={handleChangeCode}>
              Change Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
