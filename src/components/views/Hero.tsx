import { Component } from "react";

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

      /* Style for the image */
      .responsive-image {
        max-width: 70%; /* Default size on large screens */
        height: auto; /* Maintain aspect ratio */
        transition: max-width 0.3s ease-in-out; /* Smooth transition */
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

        .responsive-image {
          max-width: 100%; /* Full width on smaller screens */
        }
      }
    `;

    return (
      <section className="text-light text-center">
        <style>{customStyles}</style>
        <div className="container">
          <div className="my-4 content-container">
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
          <div>
            <img
              className="responsive-image" // Add this class to your image
              src="https://scontent-atl3-1.cdninstagram.com/v/t39.30808-6/405667427_122107798520124051_5933981201947852795_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTEuc2RyIn0&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=-p4CmEfADrcAX8iSssn&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDQxODI1MjIyMjU2Ng%3D%3D.2-ccb7
-5&oh=00_AfDYvVVKueom_kFtXagSBYDoGb9AtokMucDSjl7_bj-SIA&oe=65AB90C2"
              alt="Mocktail at B'z Community Bar"
            />
          </div>
        </div>
      </section>
    );
  }
}
