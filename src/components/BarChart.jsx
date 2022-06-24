import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = ["Matthew", "Mark", "Luke", "Johm", "Mary", "Susie", "Jessica"];

const options = {
  fill: true,
  animations: true,
  indexAxis: "x",
  maxBarThickness: 100,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Results",
          tension: 0.3,
          data: scores,
          borderColor: "blue",
          backgroundColor: "blue",
          borderWidth: 10,
          hoverBorderColor: "black",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}
