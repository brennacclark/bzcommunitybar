import React, { Component } from "react";
import Mocktails from "./menu/Mocktails";
import Snacks from "./menu/Snacks";
import Sandwiches from "./menu/Sandwiches";

export default class Menu extends Component {
  state = {
    activeTab: "drinks",
  };

  setActiveTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container my-4">
        <h1 className="text-center mb-4">Our Menu</h1>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs" id="menuTab" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "drinks" ? "active" : ""}`}
              id="drinks-tab"
              onClick={() => this.setActiveTab("drinks")}
              role="tab"
            >
              Mocktails & Cocktails
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "snacks" ? "active" : ""}`}
              id="snacks-tab"
              onClick={() => this.setActiveTab("snacks")}
              role="tab"
            >
              Snacks and Grub
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "sandwiches" ? "active" : ""
              }`}
              id="sandwiches-tab"
              onClick={() => this.setActiveTab("sandwiches")}
              role="tab"
            >
              Sandwiches
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="menuTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "drinks" ? "show active" : ""
            }`}
            id="drinks"
            role="tabpanel"
          >
            <Mocktails />
          </div>

          {/* Snacks and Grub Tab */}
          <div
            className={`tab-pane fade ${
              activeTab === "snacks" ? "show active" : ""
            }`}
            id="snacks"
            role="tabpanel"
          >
            <Snacks />
          </div>

          {/* Sandwiches Tab */}
          <div
            className={`tab-pane fade ${
              activeTab === "sandwiches" ? "show active" : ""
            }`}
            id="sandwiches"
            role="tabpanel"
          >
            <Sandwiches />
          </div>
        </div>
      </div>
    );
  }
}
