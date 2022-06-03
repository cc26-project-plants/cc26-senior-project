import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
export default function welcome() {
  return (
    <div className="flex flex-col h-screen ">
      <TopBar />
      <Navbar />
    </div>
  );
}
