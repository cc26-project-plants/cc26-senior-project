import React, { useDebugValue, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar ";
import TempLevel from "./charts/TempLevel";
import LightLevel from "./charts/LightLevel";
import { useData } from "../context/GetData";

interface PlantData {
  Data: any;
}

const Main = () => {
  const { temp, humdidity, soilWater, timeStamp, light } = useData();
  const [showLight, setShowLight] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showSoilWater, setSoilWater] = useState(false);
  const [tempData, setTempData] = useState({});
  const [lightData, setLightData] = useState({});
  const hideEverything = () => {
    setShowLight(false);
    setShowTemp(false);
    setSoilWater(false);
  };
  const displayLight = () => {
    hideEverything();
    setShowLight(true);
  };
  const displayTemp = () => {
    hideEverything();
    setShowTemp(true);
  };
  const displaySoilWater = () => {
    setShowLight(false);
    setShowTemp(false);
    setSoilWater(true);
  };

  function createChart() {
    setTempData({
      labels: timeStamp,
      datasets: [
        {
          label: "Temperature",
          data: temp,
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    /////
    setLightData({
      labels: timeStamp,
      datasets: [
        {
          label: "Light Level",
          data: light,
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }

  useEffect(() => {
    console.log(timeStamp);
    createChart();
  }, []);

  return (
    <div>
      <div className="font-mono max-w-screen h-14 bg-green-100 align-middle ">
        Happa
      </div>
      <div className="flex flex-row  ">
        <Navbar />
        <div className="font-mono  w-screen h-screen  bg-green-600">
          <div>
            <button
              onClick={displayLight}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              light
            </button>

            <button
              onClick={displayTemp}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Temperature
            </button>

            <button
              // onClick={displayTemp}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Soil Moisture
            </button>

            {showLight && <LightLevel chartData={tempData} />}
            {showTemp && <TempLevel chartData={tempData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
