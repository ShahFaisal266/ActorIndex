import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Apple', 'Orange', 'Banana', 'Mango', 'Grape'],
    datasets: [
      {
        label: 'Job Add',
        data: [200, 15, 500, 30, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
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
        stepSize: 100, // Set the desired step size
      },
    },
  };

  const chartStyle = {
    width: '280px', // Set the desired width
    height: '200px', // Set the desired height
  };
    
      return (
        <div style={chartStyle}>
          <Bar data={data} options={options} />
        </div>
  );
};

export default BarChart;
