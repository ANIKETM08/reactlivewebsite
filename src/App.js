import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {

  return(
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>}>Home</Route>
      <Route exact path="/contact" element={<Contact/>}>Contact</Route>
      <Route exact path="/about" element={<About/>}>About</Route>
      <Route exact path="/service" element={<Service/>}>Service</Route>
    </Routes>
    <Footer />
      
    </>
  )
}

export default App;