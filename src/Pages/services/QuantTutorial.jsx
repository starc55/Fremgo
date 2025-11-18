import React from "react";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const QuantTutorial = () => {
  const features = [
    {
      icon: "🤖",
      title: "Fully Automatic Trading",
      desc: "Fremgo AI trades 24/7 with intelligent algorithms that capture market opportunities in real time, buying low and selling high, allowing you to profit even while you sleep.",
    },
    {
      icon: "💰",
      title: "Stable Income & Daily Dividends",
      desc: "Purchase VIP packages to enjoy daily automatic dividends, transparent returns, and steady value-added benefits.",
    },
    {
      icon: "🌐",
      title: "Multi-Exchange Arbitrage",
      desc: "Synchronizes data from top exchanges worldwide, instantly completing cross-platform arbitrage and maximizing profits.",
    },
    {
      icon: "⚡",
      title: "Zero Threshold Operation",
      desc: "No market experience required. Turn on automatic quantization with one click and start making steady profits safely.",
    },
  ];

  const aiFeatures = [
    {
      icon: "🔠",
      title: "Pattern Recognition",
      desc: "AI algorithms identify market patterns with high accuracy, enhancing strategies such as momentum and regression trading.",
    },
    {
      icon: "📈",
      title: "Predictive Modeling",
      desc: "AI learning models predict price trends based on historical data, providing actionable insights and competitive advantages.",
    },
    {
      icon: "⚙️",
      title: "Automation & Efficiency",
      desc: "AI-driven automation improves quantitative trading efficiency, including high-frequency trading and dynamic risk management for stable returns.",
    },
  ];

  return (
    <div className="quant-page">
      {/* Back Header */}
      <BackHeader title="Quantization Tutorial" />

      <div className="quant-container">
        {/* Intro */}
        <div className="intro">
          <h1>🔥 Fremgo: Your Automated Quantization Profit Artifact 🔥</h1>
          <p>
            Make steady profits with Fremgo AI. Our intelligent system ensures
            stable returns while simplifying trading for everyone.
          </p>
        </div>

        {/* Features */}
        <h2 className="section-title">🚀 Why Choose Fremgo?</h2>
        <div className="features-list">
          {features.map((item, idx) => (
            <div className="feature-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Management */}
        <div className="risk-section">
          <h2>📈 Intelligent Risk Control</h2>
          <p>
            Fremgo's AI monitors the market in real-time and automatically
            adjusts strategies to ensure the safety of your funds, even during
            high market volatility.
          </p>
        </div>

        {/* AI Quantitative Trading */}
        <h2 className="section-title">😀 AI-Driven Quantitative Trading 😀</h2>
        <div className="features-list">
          {aiFeatures.map((item, idx) => (
            <div className="feature-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta">
          <h2>🎯 Join Now and Enjoy Newbie Benefits!</h2>
          <p>
            💡 Small investment, big rewards! Let Fremgo become your "crypto
            money machine".
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantTutorial;
