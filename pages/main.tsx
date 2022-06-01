import React, { useDebugValue, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Navbar from "./Navbar ";
import { useRouter } from "next/router";
import TempLevel from "./charts/TempLevel";
import LightLevel from "./charts/LightLevel";
import SoilMoist from "./charts/SoilMoisture";
import HumidityLevel from "./charts/HumidityLevel";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/GetData";

const Main = () => {
  const { temp, humdidity, soilWater, timeStamp, light } = useData();
  const { logout } = useAuth();
  const router = useRouter();
  const [showLight, setShowLight] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showHumidity, setShowHumidity] = useState(false);
  const [showSoilMoist, setShowSoilWater] = useState(false);
  const [tempData, setTempData] = useState({});
  const [lightData, setLightData] = useState({});
  const [soilData, setSoilData] = useState({});
  const [humidityData, setHumidityData] = useState({});
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
    //////
    setLightData({
      labels: timeStamp,
      datasets: [
        {
          label: "Soil Moisture",
          data: light,
          backgroundColor: "#ebde81",
          borderColor: "#fad45c",
          borderWidth: 1.5,
        },
      ],
    });
    //////
    setSoilData({
      labels: timeStamp,
      datasets: [
        {
          label: "Soil Moisture",
          data: soilWater,
          backgroundColor: "#4b9fc4",
          borderColor: "#296985",
          borderWidth: 1.5,
        },
      ],
    });
    ////
    setHumidityData({
      labels: timeStamp,

      datasets: [
        {
          label: "Humidity",
          data: humdidity,
          backgroundColor: "blue",
          defaultFontColor: "black",
          color: "black",
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }

  function handleLogOut(e) {
    e.preventDefault();
    try {
      logout();
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    createChart();
    return;
  }, [showLight, showTemp, showHumidity, showSoilMoist]);

  return (
    <div>
      <div className="flex justify-between font-mono max-w-screen h-20 bg-sycamore-50 align-middle ">
        <div className="w-40 h-20 bg-leaf bg-contain bg-no-repeat bg-center text-center ml-24">
          <h4 className="flex justify-start mt-12 ml-2 text-apple-600">
            Happa
          </h4>
        </div>
        <div>
          <button
            className="w-40 h-20 inline-block text-sm leading-none border rounded
              no-underline text-white border-teal-500 bg-apple-300 
              hover:border-transparent hover:text-white hover:bg-teal-500 
              shadow-gray-200 shadow-lg 
              "
          >
            My Page
          </button>
          <Link href="/admin">
            <button
              onClick={(e) => {
                handleLogOut(e);
              }}
              className="w-40 h-20 inline-block text-sm leading-none border rounded
              no-underline text-white border-sycamore-500 bg-apple-300
              hover:border-transparent hover:text-white hover:bg-teal-500"
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row ">
        <Navbar />
        <div className="font-mono  w-screen h-screen bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
          <div className="flex justify-around mb-10">
            <button
              onClick={displayLight}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-300 shadow-md
            "
            >
              light
            </button>

            <button
              onClick={displayTemp}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-300 shadow-md
            "
            >
              Temperature
            </button>

            <button
              onClick={displaySoilWater}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-300 shadow-md
            "
            >
              Soil Moisture
            </button>
            <button
              onClick={displayHumidity}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 
            shadow-apple-300 shadow-md
            "
            >
              Humidity
            </button>
          </div>
          <div className="m-16">
            {showLight && <LightLevel chartData={lightData} />}
            {showTemp && <TempLevel chartData={tempData} />}
            {showSoilMoist && <SoilMoist chartData={soilData} />}
            {showHumidity && <HumidityLevel chartData={humidityData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
