import React from "react";
import { Line } from "react-chartjs-2";
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

import { useData } from "../../context/GetData";

const HumidityLevel = () => {
  const { humdidity, timeStamp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Humidity Levels",
        data: humdidity,
        borderColor: "rgba(89, 121, 251, 0.66)",
        borderWidth: 1,
        fill: {
          target: "start",
          above: "rgba(116, 141, 223, 0.55)",
        },
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
};

export default HumidityLevel;
