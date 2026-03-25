import { PieChart, Pie, Tooltip, Cell } from "recharts";

export default function AdminChart({ stats }) {
  const data = [
    { name: "Users", value: stats.users || 0 },
    { name: "Scores", value: stats.scores || 0 },
    { name: "Winnings", value: stats.winnings || 0 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Platform Overview</h2>

      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={90}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}