import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    const customStyles = `
      /* Default style for content */
      .content-container {
        display: flex;
        flex-direction: row; /* Initially in a row */
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; /* Allow content to wrap on smaller screens */
      }

      .day-time,
      .address {
        margin: 0;
        text-align: center;
        flex-basis: 50%; /* Initially 50% width, so two items in a row */
      }

      /* Media query for stacking on smaller screens */
      @media (max-width: 768px) {
        .content-container {
          flex-direction: column; /* Change to column layout on smaller screens */
        }

        .day-time,
        .address {
          flex-basis: 100%; /* Full width for stacked items */
        }
      }

      /* Styles for the Bz_Sign image */
      .bz-sign {
        max-width: 300px; /* Maximum width of the image */
        width: 100%; /* Make the image responsive */
        height: auto; /* Maintain aspect ratio */
      }

      /* Media query for phone screen sizes */
      @media (max-width: 600px) {
        .bz-sign {
          max-width: 250px; /* Smaller maximum width for phone screens */
        }
      }
    `;

    return (
      <section className="text-light text-center">
        <style>{customStyles}</style> {/* Include customStyles */}
        <div className="container">
          {/* Centered Image with responsive width control */}
          <img
            className="mx-auto d-block bz-sign"
            src="/Bz_Sign_Clean.png"
            alt="B'z Community Bar Logo"
          />
          <div className="my-4 content-container">
            {/* Headings within divs for semantic correctness */}
            <div className="day-time">
              <h6>Tuesday - Sunday | 5pm - 1am</h6>
            </div>
            <div className="address">
              <h6>10 Dorrance St, Providence RI</h6>
            </div>
          </div>
          <hr />
          <p className="my-4">
            B'z Community Bar provides a safe space for the community to engage
            in art, music, collaboration, and networking in the creative
            capital.
          </p>
        </div>
      </section>
    );
  }
}
