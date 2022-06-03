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
  const [temp, setTemp] = useState();
  const [humdidity, setHumidity] = useState();
  const [light, setLight] = useState();
  const [soilWater, setSoilWater] = useState();
  const [timeStamp, setTimeStamp] = useState();

  const getAllData = async () => {
    const res = await axios.get(
      //store id in variable
      "https://happa-26-backend.an.r.appspot.com/plantStats/wdNtSRStxaQU9gc2QWM7"
    );
    let allPlantStats = res.data.data.data.sensorData;
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
        // console.log(moment(dates).format("L"));
        return moment(dates).format("MMM Do, h:mm:ss a");
      })
    );
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{ temp, humdidity, soilWater, timeStamp, setTimeStamp, light }}
    >
      {children}
    </DataContext.Provider>
  );
}
