import React, { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import axios from "axios";
export default function GetData() {
  const getAllData = async () => {
    const res = await axios.get(
      "https://happa-26-backend.an.r.appspot.com/plantStats"
    );
    let allPlantStats = res.data.data;
    console.log(typeof allPlantStats);
    console.log(allPlantStats.sensorData);
    // allPlantStats.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <div>GetData</div>;
}

// const getAllData = async () => {
//     const res = await axios.get(
//       "https://happa-26-backend.an.r.appspot.com/plantStats"
//     );
//     let allPlantStats: any = res.data;

//     allPlantStats.forEach((doc: any) => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   };
