import { useState } from "react";
import NewPlantBody from "./components/NewPlantBody";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const newPlant = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [routesMain, setRoutesMain] = useState({
    btnText: "My Page",
    route: "/myPage",
    header: "New Plant",
  });
  return (
    <div className="h-screen w-screen">
      <TopBar routesMain={routesMain} />
      <div className="flex flex-row h-full">
        <SideBar />
        <NewPlantBody />
      </div>
    </div>
  );
};

export default newPlant;
