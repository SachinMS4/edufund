import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data }) {
  console.log(data[2].data.data);

  return (
    <div>
      Chart
      <Line />
    </div>
  );
}

export default Chart;
