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
    <div className="h-screen w-screen md:overflow-hidden justify-center fle flex-row bg-apple-200">
      <TopBar />
      <div className="md:flex md:flex-row hidden h-full">
        <Navbar />
        {control && <ControlPanel />}
        {chart && <ChartBox />}
      </div>
      <div className=" bg-apple-200  md:hidden">
        <MobileNavbar />
        <ChartBox />
        <ControlPanel />
      </div>
    </div>
  );
};

export default Main;
