import React from "react";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Main from "./Components/Main";

export default function App() {
  return (
    <div
      className="font-inter grid grid-cols-3 
                 place-content-center 
                 place-items-center
                 h-screen bg-[#1C1C1C]
                 "
    >
      <div className="invisible"></div>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
