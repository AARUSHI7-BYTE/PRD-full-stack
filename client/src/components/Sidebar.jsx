import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "hover:bg-gray-200 text-gray-700"
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4">

      <h1 className="text-xl font-bold mb-6">
        {user?.is_admin ? "Admin Panel" : "Dashboard"}
      </h1>

      <nav className="space-y-2">

        {/* 👤 USER LINKS */}
        {!user?.is_admin && (
          <>
            <Link to="/dashboard" className={linkClass("/dashboard")}>
              Dashboard
            </Link>

            <Link to="/scores" className={linkClass("/scores")}>
              Scores
            </Link>

            <Link to="/charity" className={linkClass("/charity")}>
              Charity
            </Link>

            <Link to="/results" className={linkClass("/results")}>
              Results
            </Link>
          </>
        )}

        {/* 👑 ADMIN LINKS */}
        {user?.is_admin && (
          <>
            <Link to="/admin" className={linkClass("/admin")}>
              Admin Dashboard
            </Link>

            <Link to="/admin/users" className={linkClass("/admin/users")}>
              Users
            </Link>

            <Link to="/admin/draws" className={linkClass("/admin/draws")}>
              Draws
            </Link>

            <Link to="/admin/winnings" className={linkClass("/admin/winnings")}>
              Winnings
            </Link>
          </>
        )}

      </nav>
    </div>
  );
}