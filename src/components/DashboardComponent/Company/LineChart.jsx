import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "New Clients",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [8, 12, 9, 11, 8, 12, 9]
    }
  ]
};

export default function LineChart({ isDark }) {
  return (
    <div>
      <Line
        data={data}
        height={280}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: isDark ? "white" : "black"
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: isDark ? "white" : "black"
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: isDark ? "white" : "black"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}
