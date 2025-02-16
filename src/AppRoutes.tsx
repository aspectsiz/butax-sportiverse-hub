
// src/AppRoutes.tsx

import { Routes, Route } from "react-router-dom";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Franchise from "@/pages/Franchise";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ProductDetail from "@/pages/ProductDetail";
import CategoryPage from "@/pages/CategoryPage";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import GymDealerDashboard from "@/pages/dashboards/GymDealerDashboard";
import UserDashboard from "@/pages/dashboards/UserDashboard";
import UserProfile from "@/pages/UserProfile";
import OrdersPage from "@/pages/user/OrdersPage";
import ReviewsPage from "@/pages/user/ReviewsPage";
import Checkout from "@/components/shop/Checkout";
import MainLayout from "@/components/layout/MainLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfUse from "@/pages/legal/TermsOfUse";
import CookiePolicy from "@/pages/legal/CookiePolicy";
import KVKKGDPR from "@/pages/legal/KVKKGDPR";
import References from "@/pages/References";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Index /></MainLayout>} />
      <Route path="/market" element={<MainLayout><Shop /></MainLayout>} />
      <Route path="/market/:category" element={<MainLayout><CategoryPage /></MainLayout>} />
      <Route path="/market/:category/:slug" element={<MainLayout><ProductDetail /></MainLayout>} />
      <Route path="/hakkimizda" element={<MainLayout><About /></MainLayout>} />
      <Route path="/iletisim" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/bayilik" element={<MainLayout><Franchise /></MainLayout>} />
      <Route path="/referanslar" element={<MainLayout><References /></MainLayout>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
      
      {/* Legal Pages */}
      <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
      <Route path="/terms-of-use" element={<MainLayout><TermsOfUse /></MainLayout>} />
      <Route path="/cookie-policy" element={<MainLayout><CookiePolicy /></MainLayout>} />
      <Route path="/kvkk-gdpr" element={<MainLayout><KVKKGDPR /></MainLayout>} />
      
      <Route path="/medya-merkezi" element={<MainLayout><Blog /></MainLayout>} />
      <Route path="/medya-merkezi/:slug" element={<MainLayout><BlogPost /></MainLayout>} />
      
      {/* Protected Admin Routes */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Protected Dealer Routes */}
      <Route 
        path="/dealer/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['gym_dealer']}>
            <GymDealerDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Protected User Routes */}
      <Route 
        path="/user/dashboard" 
        element={
          <ProtectedRoute allowedRoles={['user']}>
            <UserDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/profile" 
        element={
          <ProtectedRoute allowedRoles={['user', 'admin', 'gym_dealer']}>
            <MainLayout>
              <UserProfile />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/orders" 
        element={
          <ProtectedRoute allowedRoles={['user', 'admin', 'gym_dealer']}>
            <MainLayout>
              <OrdersPage />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/reviews" 
        element={
          <ProtectedRoute allowedRoles={['user', 'admin', 'gym_dealer']}>
            <MainLayout>
              <ReviewsPage />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user/*" 
        element={
          <ProtectedRoute allowedRoles={['user', 'admin', 'gym_dealer']}>
            <MainLayout>
              <UserProfile />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
