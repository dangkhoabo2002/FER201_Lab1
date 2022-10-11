import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation";
import  Film from "./Film";
import Details from "./components/Details";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Film/>}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
