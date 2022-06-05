import React, { useEffect } from "react";
import next from "next";
import { useData } from "../../context/GetData";

const WelcomeScreen = () => {
  const { userData, setUserData } = useData();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center 
    shadow-lg  bg-apple-200"
    >
      <div>
        {/* <h1 className="text-7xl mt-22 mb-32">Welcome {userData.userName}!</h1> */}
      </div>
      <div className="flex flex-row  justify-center gap-16 flex-wrap mb-11">
        {/* {userData.plantName.map((plant: any) => {
          return (
            <div className="bg-aloe scale-100  bg-center bg-cover w-52 h-72 text-center rounded-xl shadow-lg  border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse ">
              <div className=" shadow-inner shadow-gray-200  bg-white rounded-b-md">
                Name: {plant}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default WelcomeScreen;
