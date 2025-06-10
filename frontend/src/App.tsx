import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import ManageUsers from "./pages/ManageUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<ManageUsers />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
