import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const TopBar = ({ routesMain }) => {
  const router = useRouter();
  const { logout, setCurrentUser } = useAuth();

  const handleLogOut = () => {
    logout();
    router.push("/");
  };

  const createBtn = () => {
    return (
      <button
        className="topBarBtn"
        onClick={() => router.push(routesMain.route)}
      >
        {routesMain.btnText}
      </button>
    );
  };

  return (
    <div>
      <div className="hidden md:flex justify-between font-sans max-w-screen h-20 bg-roppongi-50 align-middle drop-shadow-lg">
        <div className=" flex flex-row text-center mt-0 ml-12">
          <h4 className="flex justify-start mt-10 text-roppongi-500 font-sans">
            {routesMain.header}
          </h4>
          <div
            onClick={() => router.push("/main")}
            className=" w-32 h-14 bg-logo2 bg-contain bg-no-repeat bg-center -ml-14 mt-3 cursor-pointer"
          ></div>
        </div>
        <div className="flex flex-row items-center gap-1.5 mr-5 font-sans font-extralight">
          {createBtn()}
          <button onClick={handleLogOut} className="topBarBtn">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
