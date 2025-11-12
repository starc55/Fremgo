import React from "react";
import logo from "../assets/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaSmsSolid } from "react-icons/lia";

const NavbarTop = () => {
  return (
    <nav className="navbar-top">
      <div className="navbar_top-header">
        <span className="navbar_top-logo">
          <img src={logo} alt="" />
          <h4>Fremgo</h4>
        </span>
        <div className="header-action">
            <button><IoIosPhonePortrait /></button>
            <button><LiaSmsSolid /></button>
        </div>
      </div>

      <div className="account-info">
        <div>
          <p>Total Assets</p>
          <h2>8888 USDT</h2>
        </div>
        <div>
          <p>Quantitative Account</p>
          <h2>0.00 USDT</h2>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
