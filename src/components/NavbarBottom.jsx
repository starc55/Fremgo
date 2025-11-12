import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarBottom = () => {
  const { pathname } = useLocation();

  const tabs = [
    {
      path: "/",
      name: "Home",
      icon: "https://cdn.lordicon.com/jeuxydnh.json",
    },
    {
      path: "/quantify",
      name: "Quantify",
      icon: "https://cdn.lordicon.com/bsdkzyjd.json",
    },
    {
      path: "/invite",
      name: "Invite friends",
      icon: "https://cdn.lordicon.com/vjgknpfx.json",
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "https://cdn.lordicon.com/kdduutaw.json",
    },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((t, i) => (
        <Link
          key={i}
          to={t.path}
          className={`nav-item ${pathname === t.path ? "active" : ""}`}
        >
          <lord-icon
            src={t.icon}
            trigger="loop"
            colors="primary:#007bff,secondary:#66aaff"
            style={{ width: "28px", height: "28px" }}
          ></lord-icon>
          <p>{t.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavbarBottom;
