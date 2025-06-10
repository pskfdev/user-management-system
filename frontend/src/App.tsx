import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import ManageUsers from "./pages/ManageUsers";
import Layout from "./route/layout/Layout";
import ProtectRoute from "./route/protect-route/ProtectRoute";
import DashboardLayout from "./route/layout/DashboardLayout";

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
        <Route path="users" element={<ProtectRoute layout={<DashboardLayout />} />}>
          <Route index element={<ManageUsers />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
