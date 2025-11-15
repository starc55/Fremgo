import React, { useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"; // faqat animatsiya uchun
import hero from "../assets/hero.jpg";
import btc from "../assets/btc.png";
import ada from "../assets/ada.png";
import bnb from "../assets/bnb.png";
import doge from "../assets/doge.png";
import dot from "../assets/dot.png";
import eth from "../assets/eth.png";
import ltc from "../assets/ltc.png";
import sol from "../assets/sol.png";
import trx from "../assets/trx.png";
import xrp from "../assets/xrp.png";
import shib from "../assets/shib.png";

// actions, coins, exchanges, coinIcons – o'zgarmaydi
// Coins list
const coins = [
  "BTC",
  "ETH",
  "BNB",
  "XRP",
  "ADA",
  "SOL",
  "DOGE",
  "DOT",
  "LTC",
  "TRX",
  "SHIB",
];

// Exchanges
const exchanges = ["BINANCE", "OKX", "HUOBI", "COINBASE"];

// Actions grid
const actions = [
  ["https://cdn.lordicon.com/ezityrjj.json", "Recharge"],
  ["https://cdn.lordicon.com/shlsuhqu.json", "Withdraw"],
  ["https://cdn.lordicon.com/jdgfsfzr.json", "Help"],
  ["https://cdn.lordicon.com/fqbvgezn.json", "Team"],
  ["https://cdn.lordicon.com/fqbvgezn.json", "Activity"],
  ["https://cdn.lordicon.com/pfvaixkr.json", "Invite Friends"],
  ["https://cdn.lordicon.com/ldyubhgs.json", "Agent"],
  ["https://cdn.lordicon.com/ldyubhgs.json", "News"],
];

// Coin icons
const coinIcons = {
  BTC: btc,
  ETH: eth,
  BNB: bnb,
  XRP: xrp,
  ADA: ada,
  SOL: sol,
  DOGE: doge,
  DOT: dot,
  LTC: ltc,
  TRX: trx,
  SHIB: shib,
};

const Home = () => {
  const [prices, setPrices] = useState({});
  const [activeEx, setActiveEx] = useState("BINANCE");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    let ws;
    let isMounted = true;
    const symbols = coins.map((c) => c.toLowerCase() + "usdt");
    const streams = symbols.map((s) => `${s}@trade`).join("/");
    const url = `wss://stream.binance.com:9443/stream?streams=${streams}`;
    ws = new WebSocket(url);

    ws.onmessage = (event) => {
      if (!isMounted) return;
      const message = JSON.parse(event.data);
      const { s: symbol, p: price } = message.data;

      const coin = symbol.replace("USDT", "").toUpperCase();
      setPrices((prev) => {
        const current = { ...prev };
        const baseEx = current["BINANCE"] ? [...current["BINANCE"]] : [];
        const idx = baseEx.findIndex((x) => x.coin === coin);
        const newEntry = { coin, price: parseFloat(price), change: 0 };

        if (idx >= 0) baseEx[idx] = newEntry;
        else baseEx.push(newEntry);

        const updated = {};
        exchanges.forEach((ex) => {
          updated[ex] = baseEx.map((x) => ({
            ...x,
            price:
              ex === "BINANCE"
                ? x.price
                : x.price * (1 + (Math.random() - 0.5) * 0.001),
            change: ((Math.random() - 0.5) * 2).toFixed(2),
          }));
        });
        return updated;
      });
    };

    return () => {
      isMounted = false;
      ws.close();
    };
  }, []);

  const list = prices[activeEx] || [];

  return (
    <motion.div
      className="home-page"
      style={{ scrollBehavior: "smooth" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Notification */}
      <div className="home-notification">
        <MdNotificationsActive className="notif-icon" />
        <Marquee gradient={false} speed={50}>
          💼 Market is moving fast! Watch live crypto prices update each second
          from Binance.
        </Marquee>
      </div>

      {/* Action Grid */}
      <div className="action-grid">
        {actions.map(([iconUrl, name], i) => (
          <button key={i} className="Btn">
            <lord-icon
              className="lordIcon"
              src={iconUrl}
              trigger="loop"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            <span className="text">{name}</span>
          </button>
        ))}
      </div>

      <div className="home-banner">
        <img src={hero} alt="Home Banner" />
      </div>

      <div className="video-section">
        <video
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        ></video>
      </div>

      {/* Quotes section */}
      <div className="quotes-card">
        <div className="quotes-header">
          <h3>Real-Time Quotes</h3>
          <div className="exchange-tabs">
            {exchanges.map((ex) => (
              <button
                key={ex}
                className={`tab ${activeEx === ex ? "active" : ""}`}
                onClick={() => setActiveEx(ex)}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        <div className="quotes-list-header">
          <span className="col coin-col">Pair</span>
          <span className="col price-col">Price</span>
          <span className="col change-col">24h%</span>
        </div>

        <div className="quotes-list">
          {list.map(({ coin, price, change }) => (
            <motion.div
              className="quote-row"
              key={coin}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pair">
                <img src={coinIcons[coin]} alt={coin} className="coin-icon" />
                <div className="pair-text">
                  <div className="coin-name">{coin}</div>
                  <div className="pair-sub">/USDT</div>
                </div>
              </div>

              <div className="price">{price ? price.toFixed(4) : "-"}</div>

              <div className={`change ${change >= 0 ? "up" : "down"}`}>
                {change >= 0 ? `+${change}` : change}%
              </div>
            </motion.div>
          ))}
          {list.length === 0 && (
            <div className="loading">Connecting live feed…</div>
          )}
        </div>
      </div>

      <div className="footer">
        <p>
          Fremgo Digital Frontier Technology Company was established in 2014 and
          is headquartered in Toronto, Canada. As a company focused on
          innovation and technological development, Fremgo is committed to
          providing cutting-edge intelligent solutions.
        </p>
        <div className="footer-bottom">
          <div className="card">
            <p className="card-header">Safe Operation</p>
            <p className="card-body">4195 Day</p>
          </div>
          <div className="card">
            <p className="card-header">Cumulative Income</p>
            <p className="card-body">816430 USDT</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
