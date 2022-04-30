import React from 'react';
import { Bar } from "react-chartjs-2"
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

// * LIKE EXCELLE CHART

// const series = [44, 55, 41, 17, 15]
// const options = {
//   labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
//   colors: ["#34c38f", "#5b73e8", "#f1b44c", "#50a5f1", "#f46a6a"],
//   legend: {
//     show: !0,
//     position: 'bottom',
//     horizontalAlign: 'center',
//     verticalAlign: 'middle',
//     floating: !1,
//     fontSize: '14px',
//     offsetX: 0
//   },
//   responsive: [{
//     breakpoint: 600,
//     options: {
//       chart: {
//         height: 240
//       },
//       legend: {
//         show: !1
//       },
//     }
//   }]
// }

// return (
//   <ReactApexChart options={options} series={series} type="pie" height="320" className="apex-charts" />
// )
// }

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Analytics",
      backgroundColor: "rgba(52, 195, 143, 0.8)",
      borderColor: "rgba(52, 195, 143, 0.8)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
      hoverBorderColor: "rgba(52, 195, 143, 0.9)",
      data: [65, 59, 81, 45, 56, 80, 50, 20],
    },
  ],
}

const option = {
  scales: {
    xAxes: [
      {
        barPercentage: 0.4,
      },
    ],
  },
}

return <Bar width={474} height={300} data={data} options={option} />
}

export default AdminStuentChart