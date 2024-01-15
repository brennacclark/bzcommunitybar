import { Component } from "react";
import Mocktails from "./menu/Mocktails";
import Snacks from "./menu/Snacks";
import Sandwiches from "./menu/Sandwiches";

// Additional CSS for the inactive tab
const customStyles = `
  .inactive-tab {
    color: #d2772e;
  }
`;

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
      <div id="menu" className="container my-4">
        <style>{customStyles}</style>
        <h1 className="text-center mb-4">Our Menu</h1>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs centered-tabs" id="menuTab" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "drinks" ? "active" : "inactive-tab"
              }`}
              id="drinks-tab"
              onClick={() => this.setActiveTab("drinks")}
              role="tab"
            >
              Mocktails & Cocktails
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "snacks" ? "active" : "inactive-tab"
              }`}
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
                activeTab === "sandwiches" ? "active" : "inactive-tab"
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
