import React from "react";
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
  Tooltip,
} from "chart.js";

function HumidityLevel() {
  const { humdidity, timeStamp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Humidity Levels",
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
    Legend,
    Tooltip
  );
  return <Line data={data} />;
}
export default HumidityLevel;
