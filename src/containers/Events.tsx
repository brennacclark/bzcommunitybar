// Events.tsx
import React, { Component } from "react";
import EventCard from "../components/EventCard";

export default class Events extends Component {
  render() {
    const customStyles = `/* Your existing CSS styles */`;

    return (
      <div id="events" className="container mt-5">
        <style>{customStyles}</style>
        <h2 className="text-center mb-4">Weekly Event Calendar</h2>
        <div className="row">
          <EventCard
            day="Tuesday"
            title="Karaoke"
            description="Come sing your favorites with us!"
          />
          <EventCard
            day="Wednesday"
            title="Weekend Wednesday"
            description="A night of music, art, games, poetry and collaboration."
          />
          <EventCard
            day="Thursday"
            title="Open Jam"
            description="Come jam with the city! Music at 8:30pm."
          />
          <EventCard
            day="Friday/Saturday"
            title="Live Music"
            description="Live music every weekend!"
          />
          <EventCard
            day="Sunday"
            title="Open Mic"
            description="Sign up at 7pm. Music at 8pm."
          />
        </div>

        {/* Additional content, such as a Carousel or contact information, goes here */}

        <div className="text-center p-3">
          For booking and inquiries, contact us at{" "}
          <a href="mailto:bzcommunitybar@gmail.com">bzcommunitybar@gmail.com</a>
          .
        </div>
      </div>
    );
  }
}
