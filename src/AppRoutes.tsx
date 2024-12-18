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
import MainLayout from "@/components/layout/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Index /></MainLayout>} />
      <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/franchise" element={<MainLayout><Franchise /></MainLayout>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/shop/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/dealer/dashboard" element={<GymDealerDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
    </Routes>
  );
};

export default AppRoutes;