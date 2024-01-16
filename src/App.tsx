// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/views/nav/Navbar";
import Hero from "./components/views/Hero";
import Menu from "./components/views/menu/Menu";
import Events from "./components/views/Events";
import Socials from "./components/views/Socials";
import Footer from "./components/views/Footer";

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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
