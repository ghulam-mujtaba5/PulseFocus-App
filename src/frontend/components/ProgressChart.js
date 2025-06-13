
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChart = ({ dataPoints }) => {
  // Default dataset if no data is passed via props
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Progress',
        data: dataPoints || [10, 25, 45, 70, 90], // Use passed data or fallback to default
        fill: false,
        borderColor: '#007bff',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Progress Over Time',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Custom tooltip callback for better data formatting
            return `Progress: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Progress (%)',
        },
        min: 0,  // Minimum value of Y-axis
        max: 100, // Maximum value of Y-axis
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

// Optional styles for the chart container
const styles = {
  chartContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ProgressChart;
