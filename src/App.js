import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import image from'./img/logo1.webp';

function App() {


  return (
    <div>
      <Router>
        <nav>
          <div>
            <img className="logo" src={image} alt="logo" />
          </div>
          <div>
            <Link to="/" className="link">
              HOME
            </Link>
            <Link to="/shop" className="link">
              SHOP
            </Link>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
