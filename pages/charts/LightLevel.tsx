import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
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
  Legend,
  Tooltip,
} from "chart.js";

function LightLevel() {
  const { timeStamp, light } = useData();
  const [dates, setDates] = useState(timeStamp);

  const data = {
    labels: timeStamp,

    datasets: [
      {
        label: "Light Level",
        data: light,
        backgroundColor: "#ebde81",
        borderColor: "#fad45c",
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
    BarElement,
    Legend,
    Tooltip
  );

  return <Bar data={data} />;
}
export default LightLevel;
