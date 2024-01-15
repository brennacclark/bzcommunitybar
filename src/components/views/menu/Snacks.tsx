import { Component } from "react";

export default class Snacks extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <span>Mozzarella Sticks - $8.99</span>
          </div>
          <div className="col-md-4 mb-4">
            <span>Chicken Wings - $11.99</span>
          </div>
          <div className="col-md-4 mb-4">
            <span>Tenders and Fries - $12.99</span>
          </div>
          <div className="col-md-4 mb-4">
            <span>Fried Ravioli - $9.99</span>
          </div>
          <div className="col-md-4 mb-4">
            <span>Basket of Fries - $6.99</span>
          </div>
        </div>
      </div>
    );
  }
}
