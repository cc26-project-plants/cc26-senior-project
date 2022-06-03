import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import WelcomeScreen from "./components/WelcomeScreen";

export default function welcome() {
  return (
    <div className="flex flex-col h-screen ">
      <TopBar />
      <div className="flex flex-row h-full">
        <Navbar />
        <WelcomeScreen />
      </div>
    </div>
  );
}
