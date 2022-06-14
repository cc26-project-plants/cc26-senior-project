import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import { useData } from "../../context/GetData";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const TestChart = () => {
  const { timeStamp, light } = useData();
  const options = {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    title: {
      text: "Light Levels",
    },
    subtitle: {
      text: "Brought to you by Happa",
    },
    xAxis: {
      categories: timeStamp.map((date) => date),
      accessibility: {
        description: "Months of the year",
      },
    },
    yAxis: {
      title: {
        text: "Light",
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
    },

    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Light",
        color: "#ebde81",
        borderColor: "#fad45c",
        data: light,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TestChart;
