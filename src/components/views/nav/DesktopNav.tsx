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
        className="navbar navbar-expand-md px-3 navbar-dark"
        style={{
          backgroundColor: "var(--dark-bg-color)",
          color: "var(--dark-text-color)",
        }}
      >
        <div id="navbar-logo">
          <img
            className="mx-auto d-block bz-sign"
            src="/Bz_Sign_Clean.png"
            alt="B'z Community Bar Logo"
            style={logoImgStyles}
          />
        </div>
        <div id="navbar-links" className="container-fluid">
          {/* Navbar Links */}
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

          {/* Social Media Icons */}
          <div className="social-icons-container d-flex">
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
                style={socialIconStyles} // Apply the constant style
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
                style={socialIconStyles} // Apply the constant style
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNav;
