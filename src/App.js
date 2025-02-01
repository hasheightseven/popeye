/*

import "./App.css";
//import SVGLogoElement from "./SVGLogoElement.js";
import Home from "./pages/Home.js";

function App() {
    return (
        <main className="App">
            <div className="AppOverlay">
                <Home />
            </div>
        </main>
    );
};

export default App;


*/

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";

const App = () => {
  return (
    <Router>
      <div style={{ paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/add" element={<h1>Add New Item</h1>} />
          <Route path="/notifications" element={<h1>Alerts</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
};

export default App;
