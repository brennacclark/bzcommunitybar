import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div>
        <iframe
          title="Location Map" // Unique title for accessibility
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.200889080051!2d-71.41437522353789!3d41.82397217124796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4451403969ad7%3A0x15052136a69fd63d!2s10%20Dorrance%20St%2C%20Providence%2C%20RI%2002903!5e0!3m2!1sen!2sus!4v1705376031534!5m2!1sen!2sus"
          width="400"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }} 
        ></iframe>
      </div>
    );
  }
}
