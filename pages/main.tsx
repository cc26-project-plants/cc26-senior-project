import React, { useDebugValue, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlantData } from "./charts/Data";
// import Link from "next/link";
// import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";
import LightLevel from "./charts/lightlevel";
import Temp from "./charts/Temp";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
  const [showLight, setShowLight] = useState(false)
  const [showTemp, setShowTemp] = useState(false)
  const [showSoilWater, setSoilWater] = useState(false)
  const hideEverything = () =>{
    setShowLight(false);
    setShowTemp(false);
    setSoilWater(false)
  }
  const displayLight = () =>{
    hideEverything()
    // setShowLight(true);
    // setShowLight(prevState => !prevState)
    setShowLight(true);
    // setShowTemp(false);
  }
  const displayTemp = () =>{
    hideEverything()
    // setShowTemp(true);
    // setShowTemp(prevState => !prevState)
    // setShowLight(false);
    setShowTemp(true);
  }
  const displaySoilWater = () =>{
    // hideEverything()
    // setShowTemp(true);
    // setShowTemp(prevState => !prevState)
    setShowLight(false);
    setShowTemp(false);
    setSoilWater(true)
  }

  const [tempData, setTempData] = useState({
    labels: PlantData.map((val) => val.id),
    datasets: [
      {
        labels: "Temp",
        data: PlantData.map((val) => val.temperature),
      },
    ],
  });
  return (
    <div>
      <div className="font-mono max-w-screen h-14 bg-green-100 align-middle ">
        Happa
      </div>
      <div className="flex flex-row  ">
        <Navbar />
        <div className="font-mono  w-screen h-screen  bg-green-600">
          {/* Main Field here */}
          <div>
            <button
            onClick={displayLight}
            className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >light</button>
            {/* {showLight && <LightLevel chartData={tempData} />} */}

            <button
            onClick={displayTemp}
            className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Temperature</button>
            
            <button
            // onClick={displayTemp}
            className="w-40 inline-block text-sm px-4 py-2 leading-none border rounded
            no-underline text-yellow-100 border-white 
            hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Soil Moisture</button>

            {showLight && <LightLevel chartData={tempData} />}
            {showTemp && <Temp chartData={tempData} />}
            {/* {showSoilWater && <Temp chartData={tempData} />} */}
            {/* <LightLevel chartData={tempData} /> */}
          </div>
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        </div>
      </div>
    </div>
  );
};

export default Main;