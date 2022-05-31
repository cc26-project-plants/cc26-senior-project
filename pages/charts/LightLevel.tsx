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

function LightLevel({ chartData }) {
  ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    BarElement
  );
  return <Bar data={chartData} />;
}
export default LightLevel;
