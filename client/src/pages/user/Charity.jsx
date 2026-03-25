import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Charity() {
  const [charities, setCharities] = useState([]);
  const [selected, setSelected] = useState("");
  const [percentage, setPercentage] = useState(10);
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH CHARITIES
  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const res = await API.get("/charities");
        console.log("Charities:", res.data);
        setCharities(res.data);
      } catch (err) {
        console.error("Error fetching charities:", err);
        alert("Failed to load charities");
      }
    };

    fetchCharities();
  }, []);

  // 🔥 SAVE CHARITY
  const updateCharity = async () => {
    if (!selected) {
      return alert("Please select a charity");
    }

    try {
      setLoading(true);

      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/charities/select", {
        user_id: user.id,
        charity_name: selected,
        charity_percentage: percentage,
      });

      alert("Charity updated successfully ✅");
    } catch (err) {
      console.error("Error saving charity:", err);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Select Charity</h2>

        <div className="bg-white p-4 rounded-xl shadow">

          {/* DROPDOWN */}
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="border p-2 w-full mb-3"
          >
            <option value="">Select Charity</option>

            {charities.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          {/* PERCENTAGE */}
          <input
            type="number"
            min="10"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="border p-2 w-full mb-3"
          />

          {/* BUTTON */}
          <button
            onClick={updateCharity}
            disabled={loading}
            className="bg-green-500 text-white px-4 py-2 rounded w-full disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>

        </div>
      </div>
   
  );
}