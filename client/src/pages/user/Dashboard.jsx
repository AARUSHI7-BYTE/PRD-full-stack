import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../layouts/DashboardLayout";
import ScoreChart from "../../components/Scorechart";
import WinningsChart from "../../components/WinningsChart";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await API.get("/dashboard");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Subscription */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">Subscription</h2>
          <p>Status: {data.user.subscription_status}</p>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          <ScoreChart scores={data.scores} />
          <WinningsChart winnings={data.winnings} />
        </div>

      </div>
    </DashboardLayout>
  );
}