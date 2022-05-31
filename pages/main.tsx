import React, { useDebugValue, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import PlantData from "./charts/Data.json";
import Link from "next/link";
import { withProtected } from "../src/hook/route";
import Navbar from "./Navbar ";
import TempLevel from "./charts/TempLevel";

const Main = () => {
  // const [tempData, setTempData] = useState({
  //   labels: PlantData[0].data.map((val) => Date.parse(val.createdAt).toFixed()),
  //   datasets: [
  //     {
  //       label: "Temperature",
  //       data: PlantData[0].data.map((val) => val.temperature),
  //       backgroundColor: ["rgba(75,192,192,1)"],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <div>
      <div className="font-mono max-w-screen h-14 bg-green-100 align-middle ">
        Happa
      </div>
      <div className="flex flex-row  ">
        <Navbar />
        <div className="font-mono  w-screen h-screen ">
          Main Field here
          <div className=" w-1/2 ">
            {/* <TempLevel chartData={tempData} /> */}
          </div>
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
          {/* {modalShow && <FeedPlant onClick={displayModal}/>} */}
        </div>
      </div>
    </div>
  );
};

export default Main;

// const getLightData = () => {
//   let arr: number[] = [];
//   let labels: string[] = [];
//   let datasets: { label: string; data: any }[] = [];
//   PlantData[0].data.map((val) => {
//     labels.push(val.createdAt);
//     datasets.push({
//       label: "Light",
//       data: arr.push(val.lightLevel),
//     });
//   });
//   console.log(datasets);
//   console.log(arr);
//   setTempData({ labels, datasets });
// };

// useEffect(() => {
//   return getLightData();
// }, []);

// const getLightData = () => {
//   let labels: string[] = [];
//   let datasets: { label: string; data: number[] }[] = [
//     {
//       label: "Temperature",
//       data: [],
//     },
//   ];
//   PlantData[0].data.map((val) => {
//     labels.push(val.createdAt);
//     datasets[0].data.push(val.temperature);
//   });

//   setTempData({ labels, datasets });
// };

// useEffect(() => {
//   getLightData();
// }, []);
