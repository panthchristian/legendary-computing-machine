// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../admin/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function RoutesComponent() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default RoutesComponent;
