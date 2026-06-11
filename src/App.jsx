import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Component/MainLayout/MainLayout";

import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";

import Dashboard from "./Component/Dashboard/Dashboard";
import AdminDashboard from "./Component/AdminDasboard/AdminDashboard";

import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;