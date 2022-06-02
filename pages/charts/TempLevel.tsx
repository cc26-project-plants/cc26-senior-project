import React, { useEffect } from "react";
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
  Legend,
  Filler,
  Tooltip,
  LineOptions,
  BorderRadius,
} from "chart.js";

function TempLevel() {
  const { timeStamp, temp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        backgroundColor: "#d47859",
        borderColor: "black",
        borderWidth: 2,
        fill: true,
        pointRadius: 3,
        pointHitRadius: 10,
        pointBackgroundColor: "red",
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
    Legend,
    Tooltip,
    Filler
  );

  return <Line data={data} />;
}

export default TempLevel;
