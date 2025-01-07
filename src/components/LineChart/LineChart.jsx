import React, { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from "styled-components";

Chart.register(...registerables);

const StyledChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .chart {
    width: 100%;
    height: 140px;
    @media screen and (max-width: 575px) {
      height: 120px;
    }
    canvas {
      width: 100%;
      height: 100%;
    }
  }

  .tooltip-values {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .tooltip-item {
      /* flex: 1; */

      p {
        margin: 0;
        color: var(--light-gray);
        font-size: 12px;
      }

      h4 {
        margin: 5px 0 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--white);
      }

      &.highlighted h4 {
        color: #22d780;
      }
    }
  }
`;

const AreaChart = () => {
  const [tooltipValues, setTooltipValues] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Memoize the data to avoid re-creation on every render
  const data = useMemo(
    () => ({
      labels: ["Visitors", "Views", "Leads", "Market"],
      datasets: [
        {
          label: "Sales",
          data: [112400, 1500000, 214500, 241780],
          fill: true,
          tension: 0.4,
          backgroundColor: "rgba(0, 255, 128, 0.2)",
          borderColor: "#00ff80",
          borderWidth: 2,
          pointBackgroundColor: "#00ff80",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#00ff80",
          pointHoverRadius: 6,
          pointRadius: 6,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#3d3d3d",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          color: "#888",
          callback: function (value) {
            if (value >= 1000000000) {
              return (value / 1000000000).toFixed(1) + "B";
            } else if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + "M";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + "K";
            } else {
              return value;
            }
          },
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        const index = chartElement[0].index;
        setHoveredIndex(index);
      } else {
        setHoveredIndex(null);
      }
    },
  };

  useEffect(() => {
    // Dynamically generate tooltip values based on the dataset
    const generatedTooltipValues = data.labels.map((label, index) => {
      const value = data.datasets[0].data[index];
      let formattedValue = "";

      if (value >= 1000000000) {
        formattedValue = (value / 1000000000).toFixed(1) + "B";
      } else if (value >= 1000000) {
        formattedValue = (value / 1000000).toFixed(1) + "M";
      } else if (value >= 1000) {
        formattedValue = (value / 1000).toFixed(1) + "K";
      } else {
        formattedValue = value;
      }

      return {
        label,
        value: formattedValue,
      };
    });

    setTooltipValues(generatedTooltipValues);
  }, [data]); // Only run when `data` changes

  return (
    <StyledChartContainer>
      <div className="tooltip-values">
        {tooltipValues.map((item, index) => (
          <div
            key={index}
            className={`tooltip-item ${
              hoveredIndex === index ? "highlighted" : ""
            }`}
          >
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </StyledChartContainer>
  );
};

export default AreaChart;
