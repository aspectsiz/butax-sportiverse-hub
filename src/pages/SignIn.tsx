import React from "react";
import { LoginHeader } from "@/components/auth/LoginHeader";
import { LoginTabs } from "@/components/auth/LoginTabs";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginFooter } from "@/components/auth/LoginFooter";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      
      <main className="flex-grow container max-w-md mx-auto px-4 py-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <LoginHeader />
          <LoginTabs />
          <p className="text-gray-600 mb-6">
            Enter your credentials to access your account. If you don't remember your password,
            you can reset it using your verified phone number.
          </p>
          <LoginForm />
        </div>
      </main>

      <LoginFooter />
    </div>
  );
};

export default SignIn;
