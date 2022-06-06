import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

import LightLevel from "../charts/LightLevel";
import TempLevel from "../charts/TempLevel";
import SoilMoist from "../charts/SoilMoisture";
import HumidityLevel from "../charts/HumidityLevel";
import TestChart from "../charts/TestChart";

const ChartBox = () => {
  const [showLight, setShowLight] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showHumidity, setShowHumidity] = useState(false);
  const [showSoilMoist, setShowSoilWater] = useState(false);

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
    <div className="font-mono  w-full  bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
      <div className="flex justify-around mt-7 mb-10">
        <button
          onClick={displayLight}
          className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
          no-underline text-apple-500 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          light
        </button>

        <button
          onClick={displayTemp}
          className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
          no-underline text-apple-500 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Temperature
        </button>
        <button
          onClick={displaySoilWater}
          className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
          no-underline text-apple-500 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Soil Moisture
        </button>
        <button
          onClick={displayHumidity}
          className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
          no-underline text-apple-500 border-white 
          hover:border-transparent hover:text-teal-500 hover:bg-white focus:bg-white focus:text-teal-500 mt-4 lg:mt-0
          shadow-apple-400 shadow-md
          "
        >
          Humidity
        </button>
      </div>
      <div className="w-8/12 ml-52 bg-apple-100 shadow-lg shadow-gray-600 rounded-lg p-3">
        <Form className="w-28">
          <Form.Select>
            <option value="0">All</option>
            <option value="1">Month</option>
            <option value="2">Week</option>
            <option value="3">Day</option>
          </Form.Select>
        </Form>
        {/* {showLight && <TestChart />} */}
        {showLight && <LightLevel />}
        {showTemp && <TempLevel />}
        {showSoilMoist && <SoilMoist />}
        {showHumidity && <HumidityLevel />}
      </div>
    </div>
  );
};

export default ChartBox;
