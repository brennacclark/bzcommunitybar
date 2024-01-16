import { Component } from "react";

export default class Sandwiches extends Component {
  render() {
    return (
      <div className="container mt-4 text-center">
        <div className="row">
          <div className="col-md-6 mb-4">
            <span>Sausage & Peppers - $14.99</span>
          </div>
          <div className="col-md-6 mb-4">
            <span>Steak & Cheese - $15.99</span>
          </div>
          <div className="col-md-6 mb-4">
            <span>Meatball - $13.99</span>
          </div>
          <div className="col-md-6 mb-4">
            <span>Eggplant Parm - $13.99</span>
          </div>
        </div>
      </div>
    );
  }
}
