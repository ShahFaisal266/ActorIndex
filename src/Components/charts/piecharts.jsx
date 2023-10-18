import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['India', 'Austraila ', 'New Zeland','Spain'],
    datasets: [
      {
        data: [30, 20, 15,35], // Values for each slice
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FFCE10'], // Colors for each slice
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FFCE10'],
        exploded: [true, false, true], // Specify which slices should be exploded
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 20, // Adjust label font size
          },
          
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 15, // Remove the border for slices
      },
    },
    tooltips: {
        callbacks: {
          label: (context) => {
            const data = context.dataset.data;
            const total = data.reduce((acc, value) => acc + value, 0);
            const value = data[context.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return `${data[context.dataIndex]} (${percentage})`;
          },
        },
      },
  };

 
   
        
      return (
        <div> 
          <Pie data={data} options={options} style={{width:'300px',height:'350px'}} />
        </div>
  );
};

export default PieChart;
