import { useEffect, useState } from "react";
import API from "../../services/api";
import ScoreChart from "../../components/Scorechart";
import WinningsChart from "../../components/WinningsChart";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/dashboard");
      console.log(res.data);
      setData(res.data);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-bold text-lg">Subscription</h2>
        <p>Status: {data.user.subscription_status}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ScoreChart scores={data.scores} />
        <WinningsChart winnings={data.winnings} />
      </div>

    </div>
  );
}