import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import { Paper } from "@material-ui/core";

const Graphs = ({
  title,
  text1,
  text2,
  xaxis,
  onelinecolor,
  seclinecolor,
  xlabel,
  ylabel,
  graphData,
  linetwo,
}) => {
  const data = {
    labels: xaxis,
    datasets: [
      {
        label: text1,
        data: graphData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: onelinecolor,
        yAxisID: "y-axis-1",
      },
      {
        label: text2,
        data: linetwo,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: seclinecolor,
        yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: title,
      fontColor: "black",
      fontSize: 16,
    },
    legend: {
      labels: {
        fontColor: "black",
        fontSize: 14,
      },
    },
    scales: {
      fontColor: "white",
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: ylabel,
            fontColor: "black",
            fontSize: 12,
          },
          ticks: {
            beginAtZero: false,
            fontColor: "black",
            padding: 10,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,0.3)",
            zeroLineColor: "rgba(235,237,242,0.7)",
          },
          id: "y-axis-1",
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: xlabel,
            fontColor: "white",
            fontSize: 14,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,0.3)",
            zeroLineColor: "rgba(235,237,242,0.7)",
          },
          ticks: {
            padding: 10,
            fontColor: "black",
            autoSkip: true,
            average: "40",
          },
        },
      ],
    },
  };

  return (
    <Paper
      style={{
        height: "350px",
        backgroundColor: "white",
        alignSelf: "center",
        width: "92%",
      }}
    >
      <Line data={data} options={options} />
    </Paper>
  );
};

export default Graphs;
