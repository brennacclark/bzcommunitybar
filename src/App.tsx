// import { useState } from 'react'
import "./App.css";
import Header from "./components/views/Header";
import Hero from "./components/views/Hero";
import Menu from "./components/views/Menu";
import Events from "./components/views/Events";
import Footer from "./components/views/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Menu />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
