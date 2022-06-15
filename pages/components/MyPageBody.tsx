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
    <div className="md:w-screen md:h-screen items-center shadow-lg bg-roppongi-100">
      <div className="overflow-auto flex flex-column justify-center items-center md:flex md:flex-row md:w-screen md:h-screen">
        <div className="md:flex md:flex-row container -ml-2 md:ml-12 my-10 md:h-64 mt-16 md:-mt-10">

          <div className="bg-white my-6 md:my-0 font-sans w-5/6 -mt-14 md:w-1/4 ml-6 p-10 rounded-2xl md:shadow-buttoncolor-300 md:shadow-2xl">
            <div className="flex flex-column font-sans">
              <div className="leading-10">
                <div className="text-roppongi-800 font-light text-4xl">Hello, {userData.userName}!</div>
              </div>
              <div className=" text-roppongi-800 font-extralight text-lg mt-10">Want to add new family?</div>
              <Link href="/addPlant">
                <button className="text-white mt-3 h-fit bg-roppongi-600 outline outline-1 rounded-2xl py-2.5 hover:text-white hover:bg-roppongi-900">
                  Add new Plant
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row font-sans text-roppongi-600 bg-roppongi-200 bg-opacity-60 p-10 w-screen md:w-2/5 min-w-fit md:ml-20 rounded-2xl shadow-buttoncolor-350 shadow-2xl">
            <div
              className="bg-aloe scale-90 bg-center bg-cover w-28 h-28 md:w-40 md:h-40 text-center
          rounded-xl shadow-lg shadow-buttoncolor-350 border-white border-3"
            />
            <div className="ml-2 md:ml-6 text-sm">
              <div>Plant Name: <span className="md:text-xl font-medium text-roppongi-800">{plantName}</span></div>
              <div>Plant Type: <span className="md:text-xl font-medium text-roppongi-800">Aloe</span></div>
              <div>
                Plant Plofile:
                <br />
                <div className="text-sm md:text-lg text-roppongi-800 font-medium ml-5 max-h-20">
                  <div>average temperature: 30</div>
                  <div>average humidity: 50</div>
                  <div>average soilLevel: 250</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="md:flex md:flex-row container -ml-2 md:ml-12 my-10 md:h-64 -mt-14 md:mt-0">

          <div className="my-6 md:my-0 font-sans w-5/6 -mt-14 md:w-1/4 ml-6 p-10 md:shadow-buttoncolor-300">
          </div>

          <div className="container font-sans text-roppongi-600 bg-roppongi-200 bg-opacity-60 p-4 w-screen md:w-2/5 min-w-fit md:ml-20 rounded-2xl shadow-buttoncolor-350 shadow-2xl overflow-x-hidden overflow-y-hidden">
            <p className="text-roppongi-800 font-sans mx-auto text-center text-xl mt-0">your other plants</p>
              <div className="flex flex-row justify-center gap-16 flex-wrap mb-2 py-2 md:py-0 md:mt-2">
                {userData.plantName.map((plant: string, index: number) => {
                  if (plant !== plantName) {
                    return (
                      <div
                        onClick={() => {
                          handleClick(index);
                        }}
                        key={index}
                        className="bg-aloe scale-95 bg-center mt-0 md:mt-0 bg-cover w-40 h-40 md:w-2/5 text-center rounded-xl shadow-lg border-white border-3 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse"
                      >
                        <div className="text-roppongi-700 bg-white rounded-b-md shadow-gray-200 shadow-inner">
                          {plant}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
          </div>

       </div>
      </div>
    </div>
  );
};

export default MyPageBody;
