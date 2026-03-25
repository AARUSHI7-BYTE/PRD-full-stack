import { useEffect, useState } from "react";
import API from "../../services/api";
import Card from "../../components/Card";
import AdminChart from "../../components/AdminChart";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/admin/stats").then((res) => setStats(res.data));
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    
      <div className="space-y-6">

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <Card title="Users">{stats.users}</Card>
          <Card title="Scores">{stats.scores}</Card>
          <Card title="Winnings">₹{stats.winnings}</Card>
        </div>

        {/* Chart */}
        <AdminChart stats={stats} />

      </div>
  );
}