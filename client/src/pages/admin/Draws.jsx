import { useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

export default function Draws() {
  const [result, setResult] = useState(null);

  const runDraw = async () => {
    const res = await API.post("/admin/run-draw");
    setResult(res.data);
  };

  return (
      <div className="space-y-6">

        <h2 className="text-xl font-bold">Draw System</h2>

        <button
          onClick={runDraw}
          className="bg-red-500 text-white px-6 py-3 rounded-xl"
        >
          Run Monthly Draw
        </button>

        {result && (
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">Draw Numbers:</h3>
            <p>{result.numbers.join(", ")}</p>
          </div>
        )}

      </div>
    
  );
}