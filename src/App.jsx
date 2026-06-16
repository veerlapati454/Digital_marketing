import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';  {/* ← add this import */}
import ScrollToTop from "./Component/ScrollToTop";
import MainLayout from "./Component/MainLayout/MainLayout";
import "./App.css"

import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import Dashboard from "./Component/Dashboard/Dashboard";
import AdminDashboard from "./Component/AdminDasboard/AdminDashboard";
import NotFound from "./Component/NotFound/NotFound";
import Reviews from "./Component/Reviews/Reviews";
import Results from "./Component/Results/Results";
import Prices from "./Component/Prices/Prices";
import Services from "./Component/Services/services";

function App() {
  return (
    <HashRouter>
      <Toaster position="top-center" /> 
      <ScrollToTop />  {/* ← add this line */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Services />} />
          <Route path="/price" element={<Prices />} />
          <Route path="/result" element={<Results />} />
          <Route path="/review" element={<Reviews />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;