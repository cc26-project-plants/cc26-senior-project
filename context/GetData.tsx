import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import moment from "moment";

const DataContext = createContext<any>({});

export function useData() {
  return useContext(DataContext);
}

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [temp, setTemp] = useState(0);
  const [humdidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soilWater, setSoilWater] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);
  const [userData, setUserData] = useState({
    userId: "vcDJMzX0O1JLUU1Tzkch",
    userName: "Grace",
    plantName: ["Bob", "Rob", "Job"],
    plantId: ["wdNtSRStxaQU9gc2QWM7", "5hGtJpjctQeSPJGmPE4P", "xb7nEiSy2N3gkCRw5bDL"],
  });

  const getCurrentPlantId = () => {
    const currentPlantId = userData["currentPlantId"];
    return currentPlantId;
  }

  const getAllData = async () => {
    const currentPlantId = getCurrentPlantId() || "wdNtSRStxaQU9gc2QWM7";
    const response = await axios.get(
      `https://happa-26-backend.an.r.appspot.com/plantStats/${currentPlantId}`
    );
    let allPlantStats = response.data.data.data.status;

    setTemp(
      allPlantStats.map(
        (element: { temperature: string }) => element.temperature)
    );

    setHumidity(
      allPlantStats.map(
        (element: { humidityLevel: string }) => element.humidityLevel)
    );

    setLight(
      allPlantStats.map((element: { lightLevel: string }) => element.lightLevel)
    );

    setSoilWater(
      allPlantStats.map(
        (element: { soilWaterLevel: string }) => element.soilWaterLevel)
    );

    setTimeStamp(
      allPlantStats.map((element: { timestamp: any }) => {
        let dates = moment.unix(element.timestamp._seconds);
        return moment(dates).format("MMM Do, h:mm:ss a");
      })
    );
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        temp,
        humdidity,
        soilWater,
        timeStamp,
        setTimeStamp,
        light,
        userData,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
