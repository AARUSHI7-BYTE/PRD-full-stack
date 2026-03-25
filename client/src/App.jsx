import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

// USER
import Dashboard from "./pages/user/Dashboard";
import Scores from "./pages/user/Scores";
import Charity from "./pages/user/Charity";
import Results from "./pages/user/Results";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Draws from "./pages/admin/Draws";
import Winnings from "./pages/admin/Winnings";

// Protected
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="scores" element={<Scores />} />
          <Route path="charity" element={<Charity />} />
          <Route path="results" element={<Results />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="draws" element={<Draws />} />
          <Route path="winnings" element={<Winnings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;