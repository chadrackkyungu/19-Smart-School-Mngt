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
//   const series = [44, 55, 41, 17, 15]
//   const options = {
//     labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
//     colors: ["#45cb85", "#3b5de7", "#ff715b", "#0caadc", "#eeb902"],
//     legend: {
//       show: !0,
//       position: 'bottom',
//       horizontalAlign: 'center',
//       verticalAlign: 'middle',
//       floating: !1,
//       fontSize: '14px',
//       offsetX: 0
//     },
//     responsive: [{
//       breakpoint: 600,
//       options: {
//         chart: {
//           height: 240
//         },
//         legend: {
//           show: !1
//         },
//       }
//     }]
//   }


//   return (
//    <ReactApexChart
//       options={options}
//       series={series}
//       type="donut"
//       height="320"
//       className="apex-charts"
//     />
//   )
// }

const series = [
  {
    data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
  },
]
const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ["#34c38f"],
  grid: {
    borderColor: "#f1f1f1",
  },
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
}

return (
  <ReactApexChart options={options} series={series} type="bar" height="350" />
)
}

export default AdminStuentChart