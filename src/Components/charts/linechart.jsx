import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Open Project',
        data: [10, 15, 7, 20, 12, 25],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  }; const chartStyle = {
    width: '280px', // Set the desired width
    height: '200px', // Set the desired height
  };
    

  return (
    <div style={chartStyle}> 
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
