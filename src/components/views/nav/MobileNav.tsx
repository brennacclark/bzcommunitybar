import { Component } from "react";

export default class MobileNav extends Component {
  render() {
    const customStyles = `
      /* Increase the size of social media icons */
      .social-icon {
        width: 30px;
        height: 30px;
      }

      /* Center the social media icons vertically */
      .social-icons-container {
        display: flex;
        align-items: center;
      }

      /* Right-align navbar items when expanded */
      .navbar-collapse.show {
        justify-content: flex-end;
      }
    `;

    return (
      <header>
        <style>{customStyles}</style>
        <nav
          className="navbar navbar-expand-md navbar-dark"
          style={{
            backgroundColor: "var(--dark-bg-color)",
            color: "var(--dark-text-color)",
          }}
        >
          <div className="container-fluid">
            <div className="d-flex justify-content-between w-100 align-items-center">
              {/* Image Div */}
              <div>
                <a href="#" className="navbar-brand">
                  <img
                    className="mx-auto d-block bz-sign"
                    src="/Bz_Sign_Clean.png"
                    alt="B'z Community Bar Logo"
                    style={{ width: "100px", height: "auto" }}
                  />
                </a>
              </div>

              {/*  Menu Content */}
              <div className="d-flex align-items-center">
                {/*  Social Media Icons */}
                <div className="social-icons-container">
                  <a
                    href="https://www.instagram.com/bz.communitybar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link px-2"
                  >
                    <img
                      src="/instagram.svg"
                      alt="Instagram"
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553721551152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link px-2"
                  >
                    <img
                      src="/facebook.svg"
                      alt="Facebook"
                      className="social-icon"
                    />
                  </a>
                </div>

                {/* Menu Toggle */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ marginLeft: "auto" }} // Align to flex end
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {" "}
                {/* Changed to ml-auto */}
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
          </div>
        </nav>
      </header>
    );
  }
}
