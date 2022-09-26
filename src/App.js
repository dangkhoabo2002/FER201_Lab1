import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Film from "./Film";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <i class="fa-thin fa-house"></i>
      <Navigation/>
      <Film/>
      
    </div>
  );
}

export default App;
