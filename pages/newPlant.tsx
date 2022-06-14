import { useState } from "react";
import NewPlantBody from "./components/NewPlantBody";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const NewPlant = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

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
      <TopBar routesMain={routesMain} />
      <div className="flex flex-row h-full">
        <SideBar />
        <NewPlantBody />
      </div>
    </div>
  );
};

export default NewPlant;
