import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Navbar from "./components/Navbar";
import LightLevel from "./charts/LightLevel";
import TempLevel from "./charts/TempLevel";
import SoilMoist from "./charts/SoilMoisture";
import HumidityLevel from "./charts/HumidityLevel";
import TestChart from "./charts/TestChart";

const Main = () => {
  const router = useRouter();

  const { setCurrentUser, logout } = useAuth();

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

  const handleLogOut = async (e: any) => {
    e.preventDefault();

    await logout();
    setCurrentUser(null);
    router.push("/login");
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex justify-between font-mono max-w-screen h-20 bg-apple-50 align-middle drop-shadow-lg">
        <div className="w-40 h-16 bg-leaf bg-contain bg-no-repeat bg-center text-center mt-0 ml-24">
          <h4 className="flex justify-start mt-10 ml-0 text-apple-500">
            Happa
          </h4>
        </div>
        <div>
          <Link href="/MyPage">
            <button
              className="w-40 h-20 inline-block text-sm leading-none border rounded
                no-underline text-white border-teal-500 bg-apple-300 
                hover:border-transparent hover:text-white hover:bg-apple-400 
                shadow-gray-200 drop-shadow-md
                "
            >
              My Page
            </button>
          </Link>

          <Link href="/admin">
            <button
              onClick={handleLogOut}
              className="w-40 h-20 inline-block text-sm leading-none border rounded 
              no-underline text-white border-sycamore-500 bg-apple-300
              hover:border-transparent hover:text-white hover:bg-apple-400
              shadow-md
              "
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row h-screen">
        <Navbar />
        <div className="font-mono  w-full  bg-apple bg-apple-200 shadow-gray-400 shadow-lg">
          <div className="flex justify-around mt-7 mb-10">
            <button
              onClick={displayLight}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-400 shadow-md
            "
            >
              light
            </button>

            <button
              onClick={displayTemp}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-400 shadow-md
            "
            >
              Temperature
            </button>
            <button
              onClick={displaySoilWater}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0
            shadow-apple-400 shadow-md
            "
            >
              Soil Moisture
            </button>
            <button
              onClick={displayHumidity}
              className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-apple-500 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 
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
            {showLight && <LightLevel />}
            {showTemp && <TempLevel />}
            {showSoilMoist && <SoilMoist />}
            {showHumidity && <HumidityLevel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
