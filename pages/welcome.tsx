import React from "react";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen ">
      <TopBar />
      <Navbar />
    </div>
  );
}

export default Welcome;
