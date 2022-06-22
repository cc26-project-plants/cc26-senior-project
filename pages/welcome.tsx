import React, { useState } from "react";

import MobileNavbar from "./components/MobileNavbar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import WelcomePage from "./components/WelcomeScreen";

const Welcome = () => {
  interface makeRoute {
    btnText: string;
    route: string;
  }

  const [routesMain, setRoutesMain] = useState<makeRoute>({
    btnText: "My Page",
    route: "/myPage",
  });

  return (
    <div className="flex flex-col h-screen w-screen overflow-auto">
      <TopBar routesMain={routesMain} />
      <div className="md:hidden">
        <MobileNavbar routesMain={routesMain} />
      </div>
      <div className="flex flex-row h-fit w-full">
        <SideBar />
        <WelcomePage />
      </div>
    </div>
  );
};

export default Welcome;
