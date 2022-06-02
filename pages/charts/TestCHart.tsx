import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useData } from "../../context/GetData";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";

function DoughnutLevel() {
  const { humdidity, timeStamp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Temperature",
        data: humdidity,
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "black",
        borderWidth: 2,
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
    BarElement,
    ArcElement,
    Legend,
    Tooltip
  );

  return (
    <>
      <h1>Chart</h1>
      <Line data={data} />;
    </>
  );
}

export default DoughnutLevel;
