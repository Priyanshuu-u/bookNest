import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Abouts() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <About />
      </div>
      <Footer></Footer>
    </>
  );
}
