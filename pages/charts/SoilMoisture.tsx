import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
} from "chart.js";

import { useData } from "../../context/GetData";

function SoilMoist() {
  const { soilWater, timeStamp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Soil Moisture",
        data: soilWater,
        backgroundColor: "#4b9fc4",
        borderColor: "#296985",
        borderWidth: 1.5,
      },
    ],
  };
  ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    BarElement
  );
  return <Bar data={data} />;
}
export default SoilMoist;
