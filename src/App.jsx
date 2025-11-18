import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Home from "./Pages/Home";
import Quantify from "./Pages/Quantify";
import Invite from "./Pages/Invite";
import "./App.css";
import Profile from "./Pages/Profile";
import Detail from "./Pages/services/Detail";
import Transfer from "./Pages/services/Transfer";
import News from "./Pages/services/News";
import Security from "./Pages/services/Securtity";
import QuantTutorial from "./Pages/services/QuantTutorial";
import Problems from "./Pages/services/Problems";
import About from "./Pages/services/About";

function Layout() {
  const location = useLocation();

  // Services pagelar ro'yxati
  const hideNavbarRoutes = [
    "/detail",
    "/transfer",
    "/news",
    "/security",
    "/quant-tutorial",
    "/problems",
    "/about",
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!hideNavbar && <NavbarTop />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/news" element={<News />} />
        <Route path="/security" element={<Security />} />
        <Route path="/quant-tutorial" element={<QuantTutorial />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/about" element={<About />} />
        <Route path="/quantify" element={<Quantify />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {!hideNavbar && <NavbarBottom />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
