import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaSmsSolid } from "react-icons/lia";

const NavbarTop = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [openInstall, setOpenInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    console.log("Install result:", result);
    setDeferredPrompt(null);
    setOpenInstall(false);
  };

  return (
    <nav className="navbar-top">
      <div className="navbar_top-header">
        <span className="navbar_top-logo">
          <img src={logo} alt="" />
          <h4>Fremgo</h4>
        </span>

        <div className="header-action">
          {/* Phone icon → open install modal */}
          <button onClick={() => setOpenInstall(true)}>
            <IoIosPhonePortrait />
          </button>

          <button>
            <LiaSmsSolid />
          </button>
        </div>
      </div>

      {/* Account Info */}
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

      {/* INSTALL MODAL */}
      {openInstall && (
        <div className="install-modal">
          <div className="modal-box">
            <h3>Install Fremgo App</h3>
            <p>Add this app to your home screen for a better experience.</p>

            {deferredPrompt ? (
              <button className="install-btn" onClick={handleInstall}>
                Install Now
              </button>
            ) : (
              <button className="disabled">Not Supported</button>
            )}

            <button className="close-btn" onClick={() => setOpenInstall(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarTop;
