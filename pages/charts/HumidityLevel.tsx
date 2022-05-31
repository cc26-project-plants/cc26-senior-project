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
  BarElement,
} from "chart.js";

function HumidityLevel({ chartData }) {
  ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    BarElement
  );
  return <Line data={chartData} />;
}
export default HumidityLevel;
