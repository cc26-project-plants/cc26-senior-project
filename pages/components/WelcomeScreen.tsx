import React from "react";
import { useRouter } from "next/router";
import { useData } from "../../context/GetData";

const WelcomeScreen = () => {
  const router = useRouter();

  const { userData, setUserData, setCurrentPlantId } = useData();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center 
      shadow-lg  bg-roppongi-200"
    >
      <div>
        <h1 className="text-roppongi-900 font-light text-4xl md:text-6xl mt-10 md:mt-0 mb-12 md:mb-32 text-center">
          Welcome {userData.userName}!
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-12 md:gap-16 flex-wrap mb-16">
        {userData.plantName.map((plant: string, index: number) => {
          return (
            <div
              onClick={() => {
                userData.currentPlantId = userData.plantId[index];
                router.push("/main");
              }}
              key={index}
              className="bg-aloe scale-100 bg-center bg-cover w-48 h-36 md:w-52 md:h-72 text-center rounded-xl shadow-lg border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse"
            >
              <div className="text-roppongi-700 shadow-inner shadow-gray-200 bg-white rounded-b-md pt-0.5 pb-0.5">
                {plant}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WelcomeScreen;
