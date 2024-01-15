import React, { Component } from "react";
import { Link, Element, scroller } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      // HEADER CONTENT
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              B'z Community Bar
            </a>

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

              {/*  Social Media Icons */}
              <div className="d-flex align-items-center">
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
