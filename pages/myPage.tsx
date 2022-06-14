import { useState } from "react";
import MyPageBody from "./components/MyPageBody";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const MyPage = () => {
  interface makeRoute {
    btnText: string;
    route: string;
  }
  const [routesMain, setRoutesMain] = useState<makeRoute>({
    btnText: "Back to Main",
    route: "/main",
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
