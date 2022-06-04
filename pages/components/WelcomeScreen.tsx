import React, { useEffect } from "react";
import next from "next";
import { useData } from "../../context/GetData";

const WelcomeScreen = () => {
  const { userData, setUserData } = useData();
  // useEffect(() => {

  //   };
  // }, []);

  return (
      <div
      className="w-screen  flex flex-col justify-center  items-center 
    shadow-lg overscroll-contain bg-apple-200"
    >
      <div className="">
        <h1 className="text-7xl mt-20 mb-10">Welcome {userData.userName}!</h1>
      </div>
      <div className="flex flex-row gap-36 p-20 mb-24">
        <div className="bg-aloe scale-100  bg-center bg-cover w-52 h-60 text-center rounded-xl shadow-lg shadow-apple-300 border-white border-5 cursor-pointer transition duration-300 hover:scale-105"></div>
        <div className="bg-cactus scale-100 bg-center bg-cover w-52 h-60 text-center rounded-xl shadow-lg shadow-apple-300 border-white border-5 cursor-pointer transition duration-300 hover:scale-105"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
