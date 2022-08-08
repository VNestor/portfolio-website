import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Routes></Routes>
    </Router>
  );
}

export default App;
