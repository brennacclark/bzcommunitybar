import { Component } from "react";

export default class Mocktails extends Component {
  render() {
    return (
      <div className="container mt-4">
        <p className="text-center">
          Ask us about our <strong>Non-Alcoholic</strong> options! All cocktails
          can be made without alcohol!
        </p>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-4">
            <strong>Atomic Cider - $11</strong>
            <p>
              Apple cider with whiskey and Drambuie honey liqueur. Served hot or
              cold.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <strong>Snow Marg - $10</strong>
            <p>
              Tequila, orange liqueur, coconut milk, and rosemary simple syrup.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <strong>Beez Kneez - $10</strong>
            <p>Gin, orange juice, lemon juice, and honey simple syrup.</p>
          </div>
          <div className="col-md-6 mb-4">
            <strong>Hot Choc-A-Lot - $12</strong>
            <p>
              Hot chocolate with dark chocolate red wine, vanilla vodka, and
              whipped cream.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <strong>Tropical Holiday - $11</strong>
            <p>
              Passion fruit rum, ginger beer, lemon juice, and simple syrup.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <strong>Zero Buzz Apple Spritz - $11</strong>
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
