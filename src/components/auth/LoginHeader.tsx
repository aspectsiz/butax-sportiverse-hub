import React from 'react';

export const LoginHeader = () => (
  <header className="bg-white mb-2">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/lovable-uploads/butax-logo.png"
            alt="BUTAX Logo"
            className="h-16"
          />
          <div>
            <h1 className="text-3xl font-semibold text-[#4284be] tracking-widest">BUTAX</h1>
            <p className="text-sm text-gray-600">Kimlik Doğrulama Sistemi</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#4284be] font-medium">BUTAX</p>
          <p className="text-sm text-gray-600">https://www.butaks.com</p>
        </div>
      </div>
    </div>
       <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>
  </header>
);
