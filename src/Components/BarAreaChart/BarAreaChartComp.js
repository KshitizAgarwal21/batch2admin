import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

export default function BarAreaChartComp(props) {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <ComposedChart
        width={500}
        height={400}
        data={props.data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="unitsSold" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="inStock" stroke="#ff7300" />
        <Scatter dataKey="discountPercent" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
