import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function FundChart({ fundData }) {
  const len = fundData[0].data.data.length;
  const linePoint = fundData[0].data.data;

  const chartData = [
    linePoint[len - 1],
    linePoint[parseInt(len / 4)],
    linePoint[parseInt(len / 3)],
    linePoint[parseInt(len / 2)],
    linePoint[0],
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.date.slice(3)),
    datasets: [
      {
        label: fundData[0].data.meta.scheme_name,
        data: chartData.map((data) => data.nav),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="overview line-chart">
      <Line options={options} data={userData} />
    </div>
  );
}

export default FundChart;
