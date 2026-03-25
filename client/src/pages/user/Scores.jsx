import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Scores() {
  const [scores, setScores] = useState([]);
  const [value, setValue] = useState("");

  const fetchScores = async () => {
    const res = await API.get("/dashboard");
    setScores(res.data.scores);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const addScore = async () => {
    if (value < 1 || value > 45) {
      alert("Score must be between 1–45");
      return;
    }

    await API.post("/add-score", { value: Number(value) });
    setValue("");
    fetchScores();
  };

  return (
 
      <div className="space-y-6">

        <h2 className="text-xl font-bold">Scores</h2>

        {/* Input */}
        <div className="bg-white p-4 rounded-xl shadow">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Enter score"
          />

          <button
            onClick={addScore}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Score
          </button>
        </div>

        {/* List */}
        <div className="bg-white p-4 rounded-xl shadow">
          {scores.map((s) => (
            <div key={s.id}>
              {s.value} - {new Date(s.date).toLocaleDateString()}
            </div>
          ))}
        </div>

      </div>
   
  );
}