import {
  LineChart, Line, XAxis, YAxis, Tooltip
} from "recharts";

export default function ScoreChart({ scores }) {
  const data = scores.map(s => ({
    date: new Date(s.date).toLocaleDateString(),
    score: s.value
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="score" />
      </LineChart>
    </div>
  );
}