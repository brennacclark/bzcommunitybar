import { Component } from "react";

export default class Header extends Component {
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
    `;

    return (
      // HEADER CONTENT
      <header>
        <style>{customStyles}</style>
        <nav
          className="navbar navbar-expand-md px-3 navbar-dark"
          style={{
            backgroundColor: "var(--dark-bg-color)",
            color: "var(--dark-text-color)",
          }}
        >
          <div className="container-fluid">
            {/* <a href="#" className="navbar-brand">
              B'z Community Bar
            </a> */}

            {/*  Menu Toggle  */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*  Menu Content */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link px-2">
                  <a href="#menu" className="nav-link">
                    Menu
                  </a>
                </li>
                <li className="nav-link px-2">
                  <a href="#events" className="nav-link">
                    Events
                  </a>
                </li>
              </ul>

              {/*  Social Media Icons */}
              <div className="social-icons-container">
                <a
                  href="https://www.instagram.com/bz.communitybar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
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
                  className="nav-link px-2"
                >
                  <img
                    src="/facebook.svg"
                    alt="Facebook"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
