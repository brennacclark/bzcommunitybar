import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      // <!-- ### FOOTER CONTENT ### -->
      <footer id="sticky-footer" className="py-4 bg-black text-white-50">
        <div className="container text-center">
          <div>
            <strong>Hours of Operation: </strong> Tuesday-Sunday: 5pm - 1am |
            Closed Monday
          </div>
          <div>
            <strong>Address: </strong>10 Dorrance Street, Providence, RI 02903
          </div>

          <div className="mt-3">
            &copy; 2024 B'z Community Bar. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
}
