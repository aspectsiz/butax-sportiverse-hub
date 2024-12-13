import { Routes, Route } from "react-router-dom";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Franchise from "@/pages/Franchise";
import Index from "@/pages/Index";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ProductDetail from "@/pages/ProductDetail";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import GymDealerDashboard from "@/pages/dashboards/GymDealerDashboard";
import UserDashboard from "@/pages/dashboards/UserDashboard";
import Checkout from "@/components/shop/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/dealer/dashboard" element={<GymDealerDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
    </Routes>
  );
};

export default AppRoutes;