import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

import LightLevel from "../charts/LightLevel";
import TempLevel from "../charts/TempLevel";
import SoilMoist from "../charts/SoilMoisture";
import HumidityLevel from "../charts/HumidityLevel";
import TestChart from "../charts/TestChart";

const ChartBox = () => {
  const [showLight, setShowLight] = useState<boolean>(true);
  const [showTemp, setShowTemp] = useState<boolean>(false);
  const [showHumidity, setShowHumidity] = useState<boolean>(false);
  const [showSoilMoist, setShowSoilWater] = useState<boolean>(false);

  const hideEverything = () => {
    setShowLight(false);
    setShowTemp(false);
    setShowSoilWater(false);
    setShowHumidity(false);
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
    hideEverything();
    setShowSoilWater(true);
  };

  const displayHumidity = () => {
    hideEverything();
    setShowHumidity(true);
  };
  return (
    <div className="font-mono flex flex-col w-full  bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
      <div className="flex flex-row md:justify-around mt-7 md:mb-10 ">
        <button
          onClick={displayLight}
          className="w-full h-24 md:h-14 text-lg md:w-40 md:text-xl inline-block md:px-4 md:py-2 leading-none border rounded
          no-underline text-teal-900 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Light
        </button>

        <button
          onClick={displayTemp}
          className="w-full h-24 md:h-14 text-lg md:text-base md:w-40 inline-block  md:px-4 md:py-2 leading-none border rounded
          no-underline text-teal-900 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Temperature
        </button>
        <button
          onClick={displaySoilWater}
          className="w-full h-24 md:h-14 text-lg md:w-40 inline-block md:text-base md:px-4 md:py-2 leading-none border rounded
          no-underline text-teal-900 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Soil Moisture
        </button>
        <button
          onClick={displayHumidity}
          className="w-full h-24 md:h-14 text-lg md:w-40 inline-block md:text-xl md:px-4 md:py-2 leading-none border rounded
          no-underline text-tesl-900 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Humidity
        </button>
      </div>
      <div className="flex flex-row  justify-center mt-2 ">
        <div className="w-screen  md:w-3/4  bg-apple-100 shadow-lg shadow-gray-600 rounded-lg p-3">
          {showLight && <LightLevel />}
          {showTemp && <TempLevel />}
          {showSoilMoist && <SoilMoist />}
          {showHumidity && <HumidityLevel />}
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
