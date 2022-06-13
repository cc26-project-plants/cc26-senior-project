import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import moment from "moment";

const DataContext = createContext<any>({});
export function useData() {
  return useContext(DataContext);
};

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [temp, setTemp] = useState<number>(0);
  const [humdidity, setHumidity] = useState<number>(0);
  const [light, setLight] = useState<number>(0);
  const [soilWater, setSoilWater] = useState<number>(0);
  const [timeStamp, setTimeStamp] = useState<number>(0);

  interface testUserInput {
    userId: string;
    userName: string;
    plantName: string[];
    plantId: string[];
    currentPlantId: string;
  }
  const [userData, setUserData] = useState<any>({});

  interface newPlantInput {
    newPlantId: string;
    newPlantName: string;
  }
  const [newPlantData, setNewPlantData] = useState<newPlantInput>({
    newPlantId: "",
    newPlantName: "",
  });

  const getAllData = async () => {
    const currentPlantId = userData.currentPlantId;

    const response = await axios.get(
      `https://happa-26-backend.an.r.appspot.com/plantStats/${currentPlantId}`
    );

    if (!response.data.success) return;
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
    if (userData.currentPlantId) getAllData();
  }, [userData.currentPlantId]);

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
        newPlantData,
        setNewPlantData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
