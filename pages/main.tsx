import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useVisibility } from "../context/VisibilityContext";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import ChartBox from "./components/ChartBox";
import ControlPanel from "./components/ControlPanel";
import MobileNavbar from "./components/MobileNavbar";

const Main = () => {
  const { chart, control } = useVisibility();

  interface makeRoute {
    btnText: string;
    route: string;
  }

  const [routesMain, setRoutesMain] = useState<makeRoute>({
    btnText: "My Page",
    route: "/myPage"
  });

  return (
    <div className="h-screen w-screen md:overflow-hidden justify-center fle flex-row bg-roppongi-200">
      <TopBar routesMain={routesMain} />
      <div className="md:flex md:flex-row hidden h-full">
        <Navbar />
        {control && <ControlPanel />}
        {chart && <ChartBox />}
      </div>
      <div className="bg-roppongi-200 md:hidden overflow-auto">
        <MobileNavbar />
        <ChartBox />
        <ControlPanel />
      </div>
    </div>
  );
};

export default Main;
