import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AreaChartComp(props) {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        width={500}
        height={400}
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="maxPrice"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="minPrice"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="unitsSold"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
