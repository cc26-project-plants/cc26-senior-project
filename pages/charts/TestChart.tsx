import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const TestChart = () => {
  const options = {
    chart: {
      type: "area",
      backgroundColor: "#fff4cc",
    },

    title: {
      text: "Light Levels",
    },
    subtitle: {
      text: "Brought to you by Happa",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      accessibility: {
        description: "Months of the year",
      },
    },
    yAxis: {
      title: {
        text: "Light",
      },
      labels: {
        formatter: function (value) {
          return value + "°";
        },
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

        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.2,
          21.5,
          25.2,
          {
            y: 26.5,
            marker: {
              symbol:
                "url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/87/loudly-crying-face_1f62d.png)",
              width: 25,
              height: 25,
            },
          },
          23.3,
          18.3,
          13.9,
          9.6,
        ],
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
