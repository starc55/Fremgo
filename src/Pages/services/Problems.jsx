import React from "react";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const Problems = () => {
  const problemsData = [
    {
      icon: "🧠",
      title: "1. Accurate Decision-Making",
      desc: "Fremgo AI analyzes thousands of market data points in real-time to suggest the safest and most profitable investment options.",
    },
    {
      icon: "📊",
      title: "2. Intelligent Matching & Grid Trading",
      desc: "The Intelligent Grid System automatically trades multiple currencies across price ranges for maximum profit based on market conditions.",
    },
    {
      icon: "🛡️",
      title: "3. Strong Risk Management",
      desc: "AI monitors market movements every second to minimize potential losses and protect your balance.",
    },
    {
      icon: "📈",
      title: "4. Personalized Investment Strategy",
      desc: "Fremgo AI tailors the most suitable trading strategy according to your investment goals.",
    },
  ];

  return (
    <div className="problems-page">
      {/* Back Header */}
      <BackHeader title="Problems" />

      <div className="problems-container">
        {problemsData.map((item, index) => (
          <div className="problem-card" key={index}>
            <div className="icon">{item.icon}</div>
            <div className="text">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
