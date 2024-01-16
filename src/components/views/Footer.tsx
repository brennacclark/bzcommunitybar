import React, { Component } from "react";
import Map from "./Map";

export default class Footer extends Component {
  render() {
    const customStyles = `
      #sticky-footer {
        flex-shrink: none;
      }
      .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: start;
        max-width: 900px;
        margin: 0px auto;
      }
      .footer-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .contactLinkText {
        color: gray;
        text-decoration: none;
      }

      .contactLinkText:hover {
        color: #f4b348;
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .footer-container {
          flex-direction: column;
        }
        .footer-column {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%; // Ensure each column takes full width
        }
      }
    `;

    return (
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <style>{customStyles}</style>
        <div className="container footer-container">
          <div className="map footer-column">
            <Map />
          </div>
          <div className="map-info footer-column text-center">
            <div>
              <p>
                {" "}
                <strong>Address: </strong>10 Dorrance Street, Providence, RI
                02903
              </p>
              <p>
                <strong>Hours of Operation: </strong> Tuesday-Sunday: 5pm - 1am
                | Closed Monday
              </p>
              <p>
                <strong>Feedback or Questions?</strong> Email us at{" "}
                <a href="mailto:bzcommunitybar@gmail.com" className="contactLinkText">
                  bzcommunitybar@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          &copy; 2024 B'z Community Bar. All Rights Reserved.
        </div>
      </footer>
    );
  }
}
