import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Admin Navbar */}
        <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Panel</h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user"); // 🔥 also clear user
              window.location.href = "/";
            }}
            className="bg-red-500 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6 overflow-y-auto">
          <Outlet />   {/* 🔥 THIS FIXES EVERYTHING */}
        </div>

      </div>
    </div>
  );
}