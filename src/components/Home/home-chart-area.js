import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function HomeChartArea({ json }) {
  let data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr"].reverse(),
      },
    },
    series: [
      {
        name: "จำนวน",
        data: json,
      },
    ],
  };


  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        width="100%"
      />
    </div>
  );
}
