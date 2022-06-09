import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useData } from "../../context/GetData";

const MyPageBody = () => {
  const { userData, setUserData } = useData();
  const [plantNames, setPlantNames] = useState([]);
  const [displayPlant, setDisplayPlant] = useState({
    plant: userData.plantName[0],
  });

  function handleClick(name) {
    setDisplayPlant({ plant: name });
  }

  useEffect(() => {
    setPlantNames(userData.plantName.slice(1));
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col md:justify-center md:items-center shadow-lg  bg-apple-200">
      <div className="flex flex-col md:flex md:flex-row container mg-auto my-10 h-64">
        <div className="bg-gray-400 bg-opacity-50 p-10 font-mono md:mx-8 rounded-md outline outline-white w-screen md:w-1/4 md:min-w-fit  md:min-h-fit">
          <div className="flex flex-column font-mono">
            <div className="leading-10">
              User Name:
              <br />
              <div className="text-2xl text-teal-900">{userData.userName}</div>
            </div>
            <Link href="/addPlant">
              <button className="text-white mt-12 h-10 bg-teal-600 outline outline-1 rounded-md outline-white hover:text-white hover:bg-teal-400">
                Add new Plant
              </button>
            </Link>
          </div>
        </div>

        <div className="md:flex md:flex-row font-mono bg-gray-400 bg-opacity-50 p-10 rounded-md outline outline-white w-screen md:w-1/2 min-w-fit  min-h-fit">
          <div
            className="bg-aloe scale-100 bg-center bg-cover md:w-4/12 md:h-40 text-center
        rounded-xl shadow-lg shadow-apple-300 border-white md:border-4
        "
          />
          <div className="ml-6">
            <div className="text-teal-900">Plant Name: {displayPlant.plant}</div>
            <div className="text-teal-900">Plant Type: Aloe{/* {userData.plantType} */}</div>
            <div className="text-teal-900">
              Plant Plofile:
              <br />
              <div className="ml-5 mt-3 max-h-20 text-sm text-black">
                <div>average temperature: 30</div>
                <div>average humidity: 50</div>
                <div>average soilLevel: 250</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="md:flex text-lg font-mono">your other plants</div>

      <div className="hidden md:flex md:flex-row  justify-center gap-16 flex-wrap mb-11">
        {plantNames.map((plant: string, index: number) => {
          return (
            <div
              onClick={() => {
                handleClick(plant);
              }}
              key={index}
              className="bg-aloe scale-100 bg-center mr-5 bg-cover w-40 h-40 text-center rounded-xl shadow-lg  border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse"
            >
              <div className=" shadow-inner shadow-gray-200  bg-white rounded-b-md">
                Name: {plant}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPageBody;

{
  /* <div className="flex flex-row">
<div className=" mg-auto my-5 h-64">
  <div className="bg-aloe scale-100 bg-center mr-5 bg-cover w-40 h-40 text-center rounded-xl shadow-lg  border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse">
    <div className=" shadow-inner shadow-gray-200  bg-white rounded-b-md">
      {" "}
      Name: Rob
    </div>
  </div>
</div>
<div className="mg-auto my-5 h-64">
  <div className="bg-aloe scale-100  bg-center bg-cover w-40 h-40 text-center rounded-xl shadow-lg  border-white border-5 cursor-pointer transition duration-300 hover:scale-105 flex flex-col-reverse">
    <div className=" shadow-inner shadow-gray-200  bg-white rounded-b-md">
      {" "}
      Name: Job
    </div>
  </div>
</div>
</div> */
}
