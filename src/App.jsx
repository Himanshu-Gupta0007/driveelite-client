import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import MyBooking from "./pages/MyBooking";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// 🔥 Owner Layout + Pages
import OwnerLayout from "./pages/Owner/OwnerLayout";
import OwnerDashboard from "./pages/Owner/OwnerDashboard";
import AddCar from "./pages/Owner/AddCar";
import ManageCars from "./pages/Owner/ManageCars";
import ManageBookings from "./pages/Owner/ManageBookings";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar for normal users */}
      <Navbar />

      <Routes>
        {/* 🧑 User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/booking" element={<MyBooking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* 🚗 OWNER ROUTES (with Sidebar Layout) */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<OwnerDashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {/* Footer for normal users */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
