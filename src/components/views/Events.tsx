import { Component } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Event_Image_Comedy from "../../assets/events/Comedy_Brett_Davey.png";
// import Event_Image_214 from "../../assets/events/Valentines.jpg";

export default class Events extends Component {
  render() {
    const customStyles = `
    .event-card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin-bottom: 20px;
    }
    .container {
        padding: 20px; /* Adds padding inside the container */
    }

    .custom-carousel .carousel-item img {
      margin: 0 auto; // Centers the image in the carousel item
    }

    .custom-carousel {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 50%; // Adjust this as needed
    }

    .carousel-image {
      width: 50%; /* or use 'w-50' as you are currently using */
      height: 450; /* Adjust this value as needed */
      object-fit: cover; /* This helps maintain the aspect ratio */
    }

    .event-card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: none;
    }

    .event-card:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }

    .event-header {
      background-color: #d2772e;
      color: white;
    }

    .event-body {
      background-color: #f8f9fa;
    }

    .event-title {
      color: #d2772e;
    }

    .equal-content {
      display: flex;
      flex-direction: column;
    }

    .equal-content h5 {
      flex-grow: 0;
    }

    .equal-content p {
      flex-grow: 1;
    }
    `;
    return (
      //  <!-- ### EVENTS CONTENT ### -->
      <div id="events" className="container mt-5">
        <style>{customStyles}</style>
        <h2 className="text-center mb-4">Weekly Event Calendar</h2>
        <div className="row">
          {/* <!-- Tuesday --> */}
          <div className="col-md col-12">
            <div className="card event-card h-100">
              <div className="card-header event-header">Tuesday</div>
              <div className="card-body event-body equal-content">
                <h5 className="card-title event-title">Karaoke</h5>
                <p className="card-text">Come sing your favorites with us!</p>
              </div>
            </div>
          </div>
          {/* <!-- Wednesday --> */}
          <div className="col-md col-12">
            <div className="card event-card h-100">
              <div className="card-header event-header">Wednesday</div>
              <div className="card-body event-body equal-content">
                <h5 className="card-title event-title">Weekend Wednesday</h5>
                <p className="card-text">
                  A night of music, art, games, poetry and collaboration.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Thursday --> */}
          <div className="col-md col-12">
            <div className="card event-card h-100">
              <div className="card-header event-header">Thursday</div>
              <div className="card-body event-body equal-content">
                <h5 className="card-title event-title">Open Jam</h5>
                <p className="card-text">Come jam with the city!</p>
                <p className="card-text">Music at 8:30pm.</p>
              </div>
            </div>
          </div>
          {/* <!-- Friday/Saturday --> */}
          <div className="col-md col-12">
            <div className="card event-card h-100">
              <div className="card-header event-header">Friday/Saturday</div>
              <div className="card-body event-body equal-content">
                <h5 className="card-title event-title">Live Music</h5>
                <p className="card-text">Live music every weekend!</p>
              </div>
            </div>
          </div>
          {/* <!-- Sunday --> */}
          <div className="col-md col-12">
            <div className="card event-card h-100">
              <div className="card-header event-header">Sunday</div>
              <div className="card-body event-body equal-content">
                <h5 className="card-title event-title">Open Mic</h5>
                <p className="card-text">Sign up at 7pm</p>
                <p className="card-text">Music at 8pm.</p>
              </div>
            </div>
          </div>
        </div>

        {/* UPCOMING EVENTS */}

        <div className="text-center">
          {/* <h4>Upcoming Events</h4>
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <img
                src={Event_Image_214}
                className="d-block carousel-image"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Event_Image_Comedy}
                className="d-block carousel-image"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel> */}

          <p className="p-3">
            For booking and inquiries, contact us at{" "}
            <a href="mailto:bzcommunitybar@gmail.com">
              bzcommunitybar@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
