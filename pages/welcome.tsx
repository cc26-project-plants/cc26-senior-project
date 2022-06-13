import React, { useState } from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import WelcomePage from "./components/WelcomeScreen";

const Welcome = () => {
  const [routesMain, setRoutesMain] = useState({
    btnText: "My Page",
    route: "/myPage",
    header: "Welcome",
  });

  return (
    <div className="flex flex-col h-screen w-screen">
      <TopBar routesMain={routesMain} />
     {/* <TopBar /> */}
      <div className="flex flex-row h-fit w-full">
        <SideBar />
        <WelcomePage />
      </div>
    </div>
  );
};

export default Welcome;
