import React from 'react';

export const LoginHeader = () => (
  <header className="bg-white mb-2">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-center md:justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/lovable-uploads/butax-logo.png"
            alt="BUTAX Logo"
            className="h-16"
          />
          <div>
            <h1 className="text-left text-3xl font-semibold text-[#fb041c] tracking-widest">BUTAX</h1>
            <p className="text-sm text-gray-600">Kimlik Doğrulama Sistemi</p>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[#121212] font-medium">BUTAX</p>
          <p className="text-sm text-gray-600">https://www.butaks.com</p>
        </div>
      </div>
    </div>
  </header>
);
