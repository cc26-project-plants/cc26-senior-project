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
      backgroundColor: "#fff4cc",
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

    series: [
      {
        name: "Light",
        marker: {
          symbol: "circle",
          radius: 5,
          fillColor: "#ffd942",
        },
        fillOpacity: 0.3,
        data: light,
      },
    ],

    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TestChart;

//{
//   y: 26.5,
//   marker: {
//     symbol:
//       "url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/87/loudly-crying-face_1f62d.png)",
//     width: 25,
//     height: 25,
//   },
// },
