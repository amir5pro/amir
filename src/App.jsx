import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { ConfigProvider } from "antd";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#ff8c00",
        },
      }}
    >
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
    </ConfigProvider>
  );
};

export default App;
