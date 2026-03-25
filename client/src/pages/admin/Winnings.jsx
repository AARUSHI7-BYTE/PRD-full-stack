import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

export default function Winnings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/admin/winnings").then((res) => setData(res.data));
  }, []);

  return (
      <div>

        <h2 className="text-xl font-bold mb-4">Winnings</h2>

        <table className="w-full bg-white shadow rounded-xl">
          <thead>
            <tr className="bg-gray-100">
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((w) => (
              <tr key={w.id} className="border-t text-center">
                <td>{w.user_id}</td>
                <td>₹{w.amount}</td>
                <td>{w.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
   
  );
}