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
  const TEST_USER_ID = "wp2jBNN3c8Ydd075zYSI";
  const TEST_PLANT_ID = "LKZvyihQuUbrszjk1h1u";

  const [temp, setTemp] = useState(0);
  const [humdidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soilWater, setSoilWater] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);
  const [userData, setUserData] = useState({
    userId: TEST_USER_ID,
    userName: "Grace",
    plantName: ["Bob", "Rob", "Job"],
    plantId: [TEST_PLANT_ID, TEST_PLANT_ID, TEST_PLANT_ID],
    currentPlantId: TEST_PLANT_ID,
  });

  const getAllData = async () => {
    const currentPlantId = userData.currentPlantId;

    const response = await axios.get(
      `https://happa-26-backend.an.r.appspot.com/plantStats/${currentPlantId}`
    );
    const allData = response.data.data.data.status;
    const allPlantStats = allData.slice(1);

    setTemp(
      allPlantStats.map(
        (element: { temperature: string }) => element.temperature
      )
    );

    setHumidity(
      allPlantStats.map(
        (element: { humidityLevel: string }) => element.humidityLevel
      )
    );

    setLight(
      allPlantStats.map((element: { lightLevel: string }) => element.lightLevel)
    );

    setSoilWater(
      allPlantStats.map(
        (element: { soilWaterLevel: string }) => element.soilWaterLevel
      )
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
