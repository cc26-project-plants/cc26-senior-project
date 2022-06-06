import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ChartBox from "./components/ChartBox";

const Main = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row h-full">
        <Navbar />
        <ChartBox />
      </div>
    </div>
  );
};

export default Main;
