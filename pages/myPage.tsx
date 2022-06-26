import { useState } from "react";

import MyPageBody from "./components/MyPageBody";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import MobileNavbar from "./components/MobileNavbar";

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
    <div className="h-screen w-screen md:overflow-hidden">
      <div className=" bg-roppongi-200 md:hidden">
        <MobileNavbar routesMain={routesMain} />
      </div>
      <TopBar routesMain={routesMain} />
      <div className="flex flex-row">
        <SideBar />
        <MyPageBody />
      </div>
    </div>
  );
};

export default MyPage;
