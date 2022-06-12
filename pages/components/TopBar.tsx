import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";

const TopBar = ({ routesMain }) => {
  const router = useRouter();

  const { logout, setCurrentUser } = useAuth();

  const handleLogOut = async (e: any) => {
    await logout();
    setCurrentUser(null);
    router.push("/");
  };

  //Refactor
  const createBtn = () => {
    for (const keys in routesMain) {
      return (
        <button
          className="topBarBtn
        "
          onClick={() => router.push(routesMain.route)}
        >
          {routesMain.btnText}
        </button>
      );
    }
  };

  return (
    <div>
      <div className="hidden md:flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className=" flex flex-row  text-center mt-0 ml-12">
          <h4 className="flex justify-start mt-10  text-apple-500">
            {routesMain.header}
          </h4>
          <div className=" w-32 h-16 bg-logo bg-contain bg-no-repeat bg-center -ml-9"></div>
        </div>
        <div className="flex gap-2 mr-2 ">
          {createBtn()}
          <button
            onClick={(e: any) => {
              handleLogOut(e);
            }}
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
