import React, { useEffect, useState } from "react";
import "./page.css";
import QRCode from "qrcode";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"; // <-- Framer Motion
import "react-toastify/dist/ReactToastify.css";

export default function Invite() {
  const referralCode = "990156";
  const referralLink = `http://localhost:3000/invite?ref=${referralCode}`;
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(referralLink);
        setQrCode(url);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
      }
    };
    generateQR();
  }, [referralLink]);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } catch (err) {
      toast.error("Failed to copy!", { theme: "light" });
    }
  };

  const socialPlatforms = [
    {
      name: "Twitter",
      icon: "fa-x-twitter",
      share: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            referralLink
          )}&text=Join%20me!`,
          "_blank"
        ),
    },
    {
      name: "Facebook",
      icon: "fa-facebook",
      share: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        ),
    },
    {
      name: "Telegram",
      icon: "fa-telegram",
      share: () =>
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(
            referralLink
          )}&text=Join%20me!`,
          "_blank"
        ),
    },
    {
      name: "LinkedIn",
      icon: "fa-linkedin",
      share: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        ),
    },
    {
      name: "WhatsApp",
      icon: "fa-whatsapp",
      share: () =>
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            "Join me here: " + referralLink
          )}`,
          "_blank"
        ),
    },
  ];

  const rewards = [
    { level: "L1", percent: "12%" },
    { level: "L2", percent: "3%" },
    { level: "L3", percent: "2%" },
  ];

  return (
    <motion.div
      className="invite-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer />

      {/* Invitation Card */}
      <motion.div
        className="invite-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="qr-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="qr-box">
            {qrCode && <img src={qrCode} alt="QR" />}
          </div>
        </motion.div>

        <motion.div
          className="info-box"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="label">My Invitation Code</p>
          <div className="info-line">
            <span className="code">{referralCode}</span>
            <button className="copy-btn" onClick={() => copyText(referralCode)}>
              Copy
            </button>
          </div>
        </motion.div>

        <motion.div
          className="info-box"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="label">Invite Link</p>
          <div className="info-line">
            <span className="link">{referralLink}</span>
            <button className="copy-btn" onClick={() => copyText(referralLink)}>
              Copy
            </button>
          </div>
        </motion.div>

        <motion.p
          className="share-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Share To
        </motion.p>

        <motion.div
          className="social-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, staggerChildren: 0.1 }}
        >
          {socialPlatforms.map((platform, idx) => (
            <motion.i
              key={idx}
              className={`fa-brands ${platform.icon}`}
              onClick={platform.share}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
            ></motion.i>
          ))}
        </motion.div>

        <motion.button
          className="team-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View The Team
        </motion.button>
      </motion.div>

      {/* Rewards Card */}
      <motion.div
        className="rewards-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="rewards-title">Build a team and get generous rewards</h3>
        <div className="reward-box">
          <p className="reward-subtitle">Recharge</p>
          <p className="reward-text">
            Invited friends can get corresponding rebates when they recharge:
          </p>

          <motion.div
            className="reward-lines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.45 }}
          >
            {rewards.map((r, idx) => (
              <motion.div
                key={idx}
                className="reward-line"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span>{r.level}</span>
                <span>{r.percent}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
