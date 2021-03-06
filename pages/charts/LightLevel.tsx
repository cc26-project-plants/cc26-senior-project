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
  Legend,
  Tooltip,
} from "chart.js";

import { useData } from "../../context/GetData";

const LightLevel = () => {
  const { timeStamp, light } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Light Level",
        data: light,
        backgroundColor: "#C4D9D0",
        borderColor: "#6CA28B",
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
