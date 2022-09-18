import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Film from "./Film";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Film/>
    </div>
  );
}

export default App;
