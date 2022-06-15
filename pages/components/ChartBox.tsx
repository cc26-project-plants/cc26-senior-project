import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LightLevel from "../charts/LightLevel";
import TempLevel from "../charts/TempLevel";
import SoilMoist from "../charts/SoilMoisture";
import HumidityLevel from "../charts/HumidityLevel";

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
    <div className="font-sans flex flex-col w-full bg-roppongi-200 shadow-gray-400 shadow-lg md:pt-12 pl-1 pr-1 md:pl-0 md:pr-0">
      <div className="flex flex-row md:justify-around mt-3 mb-4">
        <button
          onClick={displayLight}
          className="chartBtn"
        >
          Light
        </button>
        <button
          onClick={displayTemp}
          className="chartBtn"
        >
          Temperature
        </button>
        <button
          onClick={displaySoilWater}
          className="chartBtn"
        >
          Soil Moisture
        </button>
        <button
          onClick={displayHumidity}
          className="chartBtn"
        >
          Humidity
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-screen md:w-4/5 bg-roppongi-50 shadow-lg shadow-gray-700 rounded-lg
                        border-8 border-roppongi-50 md:border-4 md:border-white md:px-8 md:py-6 md:mt-6
                        "
        >
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
