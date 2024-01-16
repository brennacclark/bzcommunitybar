import React from "react";

const socialIconStyles = {
  width: "30px",
  height: "30px",
};

const logoImgStyles = {
  width: "100px",
  height: "auto",
};

const DesktopNav: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{
          backgroundColor: "var(--dark-bg-color)",
          color: "var(--dark-text-color)",
          display: "flex",
          justifyContent: "space-between", // Align the three sections
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        {/* Left Section - Menu and Events Links */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <a href="#menu" className="nav-link">
                Menu
              </a>
            </li>
            <li className="nav-item px-2">
              <a href="#events" className="nav-link">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Center Section - Logo */}
        <a href="#" className="navbar-brand">
          <img
            className="bz-sign"
            src="/Bz_Sign_Clean.png"
            alt="B'z Community Bar Logo"
            style={logoImgStyles}
          />
        </a>

        {/* Right Section - Social Media Icons */}
        <div className="d-flex align-items-center">
          <a
            href="https://www.instagram.com/bz.communitybar"
            target="_blank"
            className="nav-link px-2"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="social-icon"
              style={socialIconStyles}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61553721551152"
            target="_blank"
            className="nav-link px-2"
            rel="noopener noreferrer"
          >
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="social-icon"
              style={socialIconStyles}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNav;
