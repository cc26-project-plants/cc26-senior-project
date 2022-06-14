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
        className="topBarBtn
      "
        onClick={() => router.push(routesMain.route)}
      >
        {routesMain.btnText}
      </button>
    );
  };

  return (
    <div>
      <div className="hidden md:flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className=" flex flex-row  text-center ml-28 ">
          <h4 className="flex justify-start mt-10 text-2xl text-apple-500 font-bold">
            Happa
          </h4>
          <div className=" w-32 h-16 bg-logo2 bg-contain bg-no-repeat bg-center -ml-12 mt-3"></div>
        </div>
        <div className="flex flex-row items-center gap-2 mr-2">
          {createBtn()}
          <button
            onClick={handleLogOut}
            className="topBarBtn
              "
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
