// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const BarChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Example months
//     datasets: [
//       {
//         label: "Sales",
//         data: [30, 60, 45, 80, 50, 70], // Example data
//         backgroundColor: "#00CFFF",
//         borderRadius: 5,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Hides the legend
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           color: "#FFFFFF",
//         },
//       },
//       y: {
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)",
//         },
//         ticks: {
//           color: "#FFFFFF",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div style={{ color: "#FFFFFF", marginBottom: "10px" }}>
//         <p>On going sale</p>
//         <h2>124.45</h2>
//         <p>16 January 2024 • 12:05 PM</p>
//       </div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from "styled-components";

Chart.register(...registerables);

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  .barchart-wrap {
    width: 100px;
    height: 100px;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
`;

const DataSection = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--white);
  font-weight: 300;
  margin-bottom: 5px;
`;

const Value = styled.h2`
  font-size: 20px;
  color: var(--white);
  margin-bottom: 8px;
`;

const Date = styled.p`
  font-size: 10px;
  color: var(--light-gray);
  word-break: break-word;
`;

const SalesChart = () => {
  const [salesData, setSalesData] = useState([40, 30, 20, 35, 30]);
  const [salesValue, setSalesValue] = useState(124.45);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = salesData.map((value) => Math.floor(Math.random() * 100));
      setSalesData(newData);

      const newValue =
        newData.reduce((sum, val) => sum + val, 0) / newData.length;
      setSalesValue(newValue.toFixed(2));
    }, 2000);

    return () => clearInterval(interval);
  }, [salesData]);

  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        data: salesData,
        backgroundColor: "#4AD9F8",
        borderRadius: 10,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        ticks: {
          stepSize: 30,
        },
      },
    },
  };

  return (
    <ChartContainer>
      <DataSection>
        <Title>On going sale</Title>
        <Value>{salesValue}</Value>
        <Date>16 January 2024 • 12:05 PM</Date>
      </DataSection>
      <div className="barchart-wrap">
        <Bar data={data} options={options} />
      </div>
    </ChartContainer>
  );
};

export default SalesChart;
