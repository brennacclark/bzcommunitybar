// import { useState } from 'react'
import "./App.css";
import Navbar from "./containers/nav/Navbar";
import Hero from "./containers/Hero";
import Menu from "./containers/menu/Menu";
import Events from "./containers/Events";
import Socials from "./containers/Socials";
import Footer from "./containers/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <div className="canvas">
          <Navbar />
          <Hero />
          <Menu />
          <Events />
          <Socials />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
