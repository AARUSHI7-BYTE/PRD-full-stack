import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    API.get("/my-results").then((res) => setResults(res.data));
  }, []);

  return (

      <div>

        <h2 className="text-xl font-bold mb-4">Draw Results</h2>

        <div className="bg-white p-4 rounded-xl shadow">

          {results.length === 0 && <p>No results yet</p>}

          {results.map((r) => (
            <div key={r.id} className="border-b py-2">
              <p>Matches: {r.matches}</p>
              <p>Prize: ₹{r.prize}</p>
              <p>Status: {r.status}</p>
            </div>
          ))}

        </div>

      </div>
   
  );
}