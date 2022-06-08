import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ChartBox from "./components/ChartBox";
import ControlPanel from "./components/ControlPanel";
import { useVisibility } from "../context/VisibilityContext";
import MobileNavbar from "./components/mobileNavbar";

const Main = () => {
  const { chart, control } = useVisibility();
  return (
    <div className="h-screen w-screen overflow-hidden bg-apple-200">
        <MobileNavbar />
        <TopBar />
      <div className="md:flex md:flex-row h-full">
        <Navbar />
        {control && <ControlPanel />}
        {chart && <ChartBox />}
       
        <div className=" bg-apple-200 md:hidden">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Main;