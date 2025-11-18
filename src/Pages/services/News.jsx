import React from "react";
import BackHeader from "../../components/BackHeader";
import "./services.css";

const News = () => {
  const newsList = [
    {
      title: "Fremgo Launches New VIP System",
      date: "Nov 18, 2025",
      desc: "Fremgo introduces a new VIP system offering higher daily rewards and a more transparent referral program to maximize user profits.",
    },
    {
      title: "AI Trading Algorithm Update",
      date: "Nov 12, 2025",
      desc: "Our AI algorithm has been upgraded for more accurate market predictions, ensuring safer and more profitable trading for all users.",
    },
    {
      title: "Fremgo Expands Multi-Exchange Support",
      date: "Nov 05, 2025",
      desc: "Now Fremgo supports more top global exchanges for seamless cross-platform arbitrage and higher profit opportunities.",
    },
    {
      title: "New Security Features Added",
      date: "Oct 28, 2025",
      desc: "Enhanced security protocols, two-factor authentication, and AI risk management tools ensure safer investment experience.",
    },
  ];

  return (
    <div className="news-page">
      {/* Back Header */}
      <BackHeader title="News" />

      <div className="news-container">
        {newsList.map((news, index) => (
          <div className="news-card" key={index}>
            <div className="news-header">
              <h3>{news.title}</h3>
              <span className="news-date">{news.date}</span>
            </div>
            <p className="news-desc">{news.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
