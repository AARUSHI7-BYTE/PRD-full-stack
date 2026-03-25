import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) return <Navigate to="/" />;

  // 🔥 ADMIN CHECK
  if (adminOnly && !user?.is_admin) {
    return <Navigate to="/dashboard" />;
  }

  // 🔥 USER BLOCK FROM ADMIN
  if (!adminOnly && user?.is_admin) {
    return <Navigate to="/admin" />;
  }

  return children;
}