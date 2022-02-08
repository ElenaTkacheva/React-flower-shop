import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";

function App() {


  return (
    <div>
      <Router>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/about">ABOUT</Link>
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
