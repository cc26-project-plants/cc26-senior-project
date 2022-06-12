import { useState } from "react";
import MyPageBody from "./components/MyPageBody";
import MyPageTopBar from "./components/MyPageTopBar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const MyPage = () => {
  const [routesMain, setRoutesMain] = useState({
    btnText: "Back to Main",
    route: "/main",
    header: "My Page",
  });
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <TopBar routesMain={routesMain} />
      <div className="flex flex-row h-full">
        <SideBar />
        <MyPageBody />
      </div>
    </div>
  );
};

export default MyPage;
