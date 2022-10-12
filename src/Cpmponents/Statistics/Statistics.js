import React from "react";
import { useLoaderData } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  console.log(data.data);
  return (
    <div className="md:w-9/12 w-1/2 mx-auto p-3">
      <div className="flex justify-center mt-28 p-5"></div>
    </div>
  );
};

export default Statistics;
