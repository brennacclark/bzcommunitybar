import React, { Component } from "react";

export default class Events extends Component {
  render() {
    return (
      //  <!-- ### EVENTS CONTENT ### -->
      <div className="container mt-5">
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
      </div>
    );
  }
}
