import React from 'react'
import ReactApexChart from "react-apexcharts"

function AdminEarnings() {
    const options = {
        colors: ["#DC2626"],
        chart: {
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 0.1,
        },
        grid: {
          borderColor: "#f8f8fa",
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sarterday", "Sunday"],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
      }
      const series = [
        {
          name: "Fees Collection R",
          data: [3000, 4500, 650, 360, 5000, 240, 100],
        },
      ]
    
      return (
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          className="apex-charts"
          height={450}
        />
      )
    }
export default AdminEarnings