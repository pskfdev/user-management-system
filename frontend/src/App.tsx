import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
//Layout
import Layout from "./route/layout/Layout";
import DashboardLayout from "./route/layout/DashboardLayout";
//Protect Route
import ProtectRoute from "./route/protect-route/ProtectRoute";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import ManageUsers from "./pages/ManageUsers";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Private */}
        <Route path="dashboard" element={<ProtectRoute layout={<DashboardLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
