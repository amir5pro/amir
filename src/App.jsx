import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="w-full  min-h-screen bg-white font-sora ">
      <ToastContainer position="top-center" />

      <Header />
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
};

export default App;
