import { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <section className="bg-dark text-light p-5 text-center">
        <div className="container">
          {/* Centered Image */}
          <img
            className="img-fluid mx-auto d-block w-50"
            src="src/assets/Bz_Sign.png"
            alt="B'z Community Bar Logo"
          />
          <div className="d-flex flex-column align-items-center">
            <div>
              <h2 className="mt-4">Mocktails, Cocktails, and Grub</h2>
              <p className="my-4">Tuesday - Sunday | 5pm - 1am</p>
              <hr />

              <p className="my-4">
                B'z Community Bar provides a safe space for the community to
                engage in art, music, collaboration, and networking in the
                creative capital.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
