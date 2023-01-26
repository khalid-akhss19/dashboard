import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Routing;
