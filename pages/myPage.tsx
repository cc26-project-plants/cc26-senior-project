import MyPageBody from "./components/MyPageBody";
import MyPageTopBar from "./components/MyPageTopBar";
import SideBar from "./components/SideBar";

const MyPage = () => {
  return (
    <div className="h-screen w-screen">
      <MyPageTopBar />
      <div className="flex flex-row h-full">
        <SideBar />
        <MyPageBody />
      </div>
    </div>
  );
};

export default MyPage;
