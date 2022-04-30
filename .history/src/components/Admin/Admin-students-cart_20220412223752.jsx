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

const series = [
  {
    name: "Net Profit",
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
  },
  {
    name: "Revenue",
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
  },
]
const options = {
  chart: {
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: !1,
      columnWidth: '45%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: !1
  },
  stroke: {
    show: !0,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
  }, {
    name: 'Revenue',
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
  }],
  colors: ['#45cb85', '#3b5de7', '#eeb902'],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  grid: {
    borderColor: '#f1f1f1',
  },
  fill: {
    opacity: 1

  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
}

return (
  <ReactApexChart options={options} series={series} type="bar" height={350} className="apex-charts" />
)

export default AdminStuentChart