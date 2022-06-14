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
  Filler,
  Tooltip,
  Scale,
} from "chart.js";

import { useData } from "../../context/GetData";

const TempLevel = () => {
  const { timeStamp, temp } = useData();
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: "rgba(243, 147, 82, 1)",
        borderWidth: 2,
        fill: {
          target: "start",
          above: "rgba(255, 184, 63, 0.61)", // Area will be red above the origin
          below: "rgba(101, 64, 255, 1)", // And blue below the origin
        },
        pointRadius: 3,
        pointHitRadius: 5,
        pointBackgroundColor: "rgba(243, 147, 82, 1)",
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
};

export default TempLevel;
