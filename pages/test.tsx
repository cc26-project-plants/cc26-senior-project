import React from "react";
import DoughnutLevel from "./charts/TestCHart";
const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      data: [3, 5, 6, 2, 7],
    },
  ],
};

export default function test() {
  return (
    <div>
      <DoughnutLevel chartData={data} />
    </div>
  );
}
