import { useState } from "react";

import NewPlantBody from "./components/NewPlantBody";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import MobileNavbar from "./components/MobileNavbar";

const NewPlant = () => {
  interface makeRoute {
    btnText: string;
    route: string;
  }

  const [routesMain, setRoutesMain] = useState<makeRoute>({
    btnText: "My Page",
    route: "/myPage",
  });

  return (
    <div className="h-screen w-screen">
      <div className=" bg-apple-200  md:hidden">
        <MobileNavbar />
      </div>    
      <TopBar routesMain={routesMain} />
      <div className="flex flex-row h-full">
        <SideBar />
        <NewPlantBody />
      </div>
    </div>
  );
};

export default NewPlant;
