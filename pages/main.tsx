import React, { useDebugValue, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlantData } from "./charts/Data";
import Link from "next/link";
import { withProtected } from "../src/hook/route";

import Navbar from "./Navbar ";
import TempLevel from "./charts/TempLevel";

const Main = () => {
  // const { user, loginWithGoogle, error }: any = auth;
  const [tempData, setTempData] = useState({
    labels: PlantData.map((val) => val.id),
    datasets: [
      {
        labels: "Temp",
        data: PlantData.map((val) => console.log(val)),
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
          <div className=" w-2/4">
            <TempLevel chartData={tempData} />
          </div>
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        </div>
      </div>
    </div>
  );
};

export default Main;
