import { useEffect, useState } from "react";
import { getScores, addScore } from "../services/scoreService";

export default function Dashboard() {
  const [scores, setScores] = useState([]);
  const [newScore, setNewScore] = useState("");

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    const res = await getScores();
    setScores(res.data);
  };

  const handleAdd = async () => {
    await addScore(Number(newScore));
    fetchScores();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Scores</h1>

      <input
        value={newScore}
        onChange={(e) => setNewScore(e.target.value)}
        className="p-2 text-black"
      />

      <button onClick={handleAdd} className="ml-2 bg-purple-500 px-4 py-2">
        Add
      </button>

      <ul className="mt-4">
        {scores.map((s) => (
          <li key={s.id}>{s.score}</li>
        ))}
      </ul>
    </div>
  );
}