import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Female Students', 'Male Students'],
  datasets: [
    {
      data: [650, 350],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
    },
  ],
};

function AdminStuentChart() {
  return (
    <Doughnut data={data} />
  )
}

export default AdminStuentChart