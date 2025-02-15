import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "@/components/auth/LoginHeader";
import { LoginTabs } from "@/components/auth/LoginTabs";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginFooter } from "@/components/auth/LoginFooter";
import { useAuth } from "@/contexts/AuthContext";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("user");
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userProfile) {
      switch (userProfile.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'gym_dealer':
          navigate('/dealer/dashboard');
          break;
        case 'user':
          navigate('/user/dashboard');
          break;
        default:
          navigate('/');
      }
    }
  }, [userProfile, navigate]);

  return (
    <div className="min-h-screen bg-auth-muted flex flex-col items-center justify-center auth-layout">
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="shadow-3xl auth-card p-6 rounded-lg">
          <LoginHeader />
          <LoginTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <p className="text-auth-foreground/80 mb-6">
            Enter your credentials to access your account. If you don't remember your password,
            you can reset it using your verified phone number.
          </p>
          <LoginForm userType={activeTab} />
        </div>
      </main>
      <LoginFooter />
    </div>
  );
};

export default SignIn;