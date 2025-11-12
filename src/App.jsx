import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Home from "./Pages/Home";
import Quantify from "./Pages/Quantify";
import Invite from "./Pages/Invite";
import "./App.css";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quantify" element={<Quantify />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        <NavbarBottom />
      </div>
    </Router>
  );
}

export default App;
