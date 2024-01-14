import React, { Component } from "react";

export default class Mocktails extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h2>Mocktails & Cocktails</h2>
        <p className="text-center">
          Ask us about our Non-Alcoholic options! All cocktails can be made
          without alcohol!
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <span>Atomic Cider - $11</span>
            <p>
              Apple cider with whiskey and Drambuie honey liqueur. Served hot or
              cold.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <span>Snow Marg - $10</span>
            <p>
              Tequila, orange liqueur, coconut milk, and rosemary simple syrup.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <span>Beez Kneez - $10</span>
            <p>Gin, orange juice, lemon juice, and honey simple syrup.</p>
          </div>
          <div className="col-md-6 mb-4">
            <span>Hot Choc-A-Lot - $12</span>
            <p>
              Hot chocolate with dark chocolate red wine, vanilla vodka, and
              whipped cream.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <span>Tropical Holiday - $11</span>
            <p>
              Passion fruit rum, ginger beer, lemon juice, and simple syrup.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <span>Zero Buzz Apple Spritz - $11</span>
            <p>
              Non-alcoholic Apple Vodka, club soda, honey simple syrup, and a
              splash of apple cider.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
