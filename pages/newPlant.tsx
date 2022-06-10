import NewPlantBody from "./components/NewPlantBody"
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const newPlant = () => {
  return (
    <div className="h-screen w-screen">
      <TopBar />
      <div className="flex flex-row h-full">
        <SideBar />
        <NewPlantBody />
      </div>
    </div>
  );
};

export default newPlant;