import NewPlantBody from "./components/NewPlantBody"
import MyPageTopBar from "./components/MyPageTopBar";
import SideBar from "./components/SideBar";

const newPlant = () => {
  return (
    <div className="h-screen w-screen">
      <MyPageTopBar />
      <div className="flex flex-row h-full">
        <SideBar />
        <NewPlantBody />
      </div>
    </div>
  );
};

export default newPlant;