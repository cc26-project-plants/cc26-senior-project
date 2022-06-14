import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useData } from "../../context/GetData";


const MyPageBody = () => {
  const { userData, setUserData, setCurrentPlantId } = useData();
  const [plantName, setPlantName] = useState<string>("");

  const handleClick = (index) => {
    const plantId = userData.plantId[index];
    findPlantName();

    setUserData({
      ...userData,
      currentPlantId: plantId,
    });
  };

  const findPlantName = () => {
    const plantIndex = userData.plantId.indexOf(userData.currentPlantId);
    const newPlantName = userData.plantName[plantIndex];
    setPlantName(newPlantName);
  };

  useEffect(() => {
    findPlantName();
  }, [userData]);

   return (
    <div className="md:w-screen md:h-screen items-center shadow-lg  bg-roppongi-200 ">
      <div className="overflow-auto flex flex-column md:flex md:flex-row md:w-screen md:h-screen">
        <div className="md:flex md:flex-row container mg-auto my-10 h-64">

          <div className="bg-gray-400 bg-opacity-50 p-10 font-mono mx-8 rounded-md outline outline-white w-1/4 min-w-fit  min-h-fit">
            <div className="flex flex-column font-mono">
              <div className="leading-10">
                User Name:
                <br />
                <div className="text-2xl">{userData.userName}</div>
              </div>
              <Link href="/addPlant">
                <button className="text-white mt-12 h-10 bg-roppongi-700 outline outline-1 rounded-md outline-white hover:text-white hover:bg-teal-400">
                  Add new Plant
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row font-mono bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-1/2 min-w-fit  ">
            <div
              className="bg-aloe scale-100 bg-center bg-cover w-4/12 h-40 text-center
          rounded-xl shadow-lg shadow-apple-300 border-white border-4
          "
            />
            <div className="ml-6">
              <div>Plant Name: {plantName}</div>
              <div>Plant Type: Aloe</div>
              <div>
                Plant Plofile:
                <br />
                <div className="ml-5 max-h-20 text-sm">
                  <div>average temperature: 30</div>
                  <div>average humidity: 50</div>
                  <div>average soilLevel: 250</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <p className="font-mono text-center">your other plants</p>

        <div className="flex flex-row justify-center gap-16 flex-wrap mb-11 ">
          {userData.plantName.map((plant: string, index: number) => {
            if (plant !== plantName) {
              return (
                <div
                  onClick={() => {
                    handleClick(index);
                  }}
                  key={index}
                  className="bg-aloe scale-100 bg-center mr-5 bg-cover w-40 h-40 text-center rounded-xl shadow-lg  border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse"
                >
                  <div className=" shadow-inner shadow-gray-200  bg-white rounded-b-md">
                    Name: {plant}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPageBody;
