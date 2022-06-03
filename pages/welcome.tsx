import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import WelcomePage from "./components/WelcomeScreen";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-row h-full">
        <Navbar />
        <WelcomePage />
      </div>
    </div>
  );
};

export default Welcome;
