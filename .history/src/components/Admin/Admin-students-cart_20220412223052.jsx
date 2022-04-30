import React from 'react';
import ReactApexChart from "react-apexcharts"
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Female Students', 'Male Students'],
//   datasets: [
//     {
//       data: [650, 350],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//       ],
//     },
//   ],
// };

function AdminStuentChart() {
  const series = [44, 55, 67, 83]
  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    series: [44, 55, 67, 83],
    labels: ['Computer', 'Tablet', 'Laptop', 'Mobile'],
    colors: ['#3b5de7', '#45cb85', '#eeb902', '#ff715b'],
  }
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="370"
      className="apex-charts"
    />
  )
}

export default AdminStuentChart