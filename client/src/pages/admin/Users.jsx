import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/users").then((res) => setUsers(res.data));
  }, []);

  return (
      <div>

        <h2 className="text-xl font-bold mb-4">Users</h2>

        <table className="w-full bg-white shadow rounded-xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Subscription</th>
              <th>Admin</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t text-center">
                <td className="p-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.subscription_status}</td>
                <td>{u.is_admin ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
  );
}