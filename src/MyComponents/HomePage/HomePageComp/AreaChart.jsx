import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const data = {

  labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun","July"],
  
  datasets: [
    {
      label: "First dataset",
      data: [0, 10, 20, 10, 20, 30.5, 25,35,70,80,90,100],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
  ]
};

export default function AreaChart() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}

