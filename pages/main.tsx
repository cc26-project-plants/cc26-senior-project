import React, { useDebugValue, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import PlantData from "./charts/Data.json";
// import Link from "next/link";
// import { withProtected } from "../src/hook/route";
import Navbar from "./Navbar ";
import TempLevel from "./charts/TempLevel";
import LightLevel from "./charts/LightLevel";

interface PlantData {
  Data: any;
}

const Main = () => {
  const [showLight, setShowLight] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showSoilWater, setSoilWater] = useState(false);
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
  let plantTemperatureArray: string[] = [];
  let plantTemperatureTimeArray: number[] = [];
  function getTemp() {
    // let plantDataValues =
    // PlantData.data._fieldsProto.sensorData.arrayValue.values;

    //Return Data
    // plantTemperatureArray = plantDataValues.map(
    //   (val: any) => val.mapValue.fields.temperature.integerValue
    // );
    // plantTemperatureTimeArray = plantDataValues.map(
    //   (val: any) => val.mapValue.fields.timestamp.timestampValue.nanos
    // );
    // console.log(plantTemperatureArray);
    // console.log(plantTemperatureTimeArray);
  }

  const [tempData, setTempData] = useState({
    labels: plantTemperatureTimeArray,
    datasets: [
      {
        label: "Temperature",
        data: plantTemperatureArray,
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    getTemp();
  }, []);

  return (
    <div>
      <div className="flex justify-between font-mono max-w-screen h-20 bg-green-100 align-middle ">
        <div className="align-text-bottom bg-hutaba bg-contain bg-no-repeat bg-center ">
          Happa
        </div>
        <button
          className="w-40 inline-block text-sm leading-none border rounded
          no-underline text-white border-teal-500 bg-green-600
          hover:border-transparent hover:text-white hover:bg-teal-500"
        >My Page</button>
      </div>

      <div className="flex flex-row">
        <Navbar />
        <div className="font-mono  w-screen h-screen  bg-green-600">
          <div className="flex justify-around mb-10">
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
            <button
              // onClick={displayTemp}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Humidity
            </button>
          </div>
            <div className="h-50 w-50 mx-10">
              {showLight && <LightLevel chartData={tempData} />}
              {showTemp && <TempLevel chartData={tempData} />}
              {/* {showSoilMoist && <SoilMoist chartData={tempData} />}
              {showHumidity && <Humidity chartData={tempData} />} */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;