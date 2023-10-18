import React from 'react';
import { Line } from 'react-chartjs-2';

const CurvedLineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Open Project',
        data: [10, 15, 7, 20, 12, 25],
        fill: true, // Fill the area under the line
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.4, // Control the curvature of the line
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
        stepSize: 10,
      },
    },
  };
  const chartStyle = {
    width: '280px', // Set the desired width
    height: '200px', // Set the desired height
  };
    

  return (
    <div style={chartStyle}> 
      <Line data={data} options={options} />
    </div>
  );
};

export default CurvedLineChart;
