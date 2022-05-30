import React, { useDebugValue, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlantData } from "./charts/Data";
// import Link from "next/link";
// import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";
import LightLevel from "./charts/lightlevel";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
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
          Main Field here
          <div>
            <LightLevel chartData={tempData} />
          </div>
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        </div>
      </div>
    </div>
  );
};

export default Main;