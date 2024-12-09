import React from 'react';

export const LoginHeader = () => (
  <header className="bg-white mb-2">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/lovable-uploads/539d646d-fc68-4de8-8bf1-581f6aaf3527.png"
            alt="BUTAX Logo"
            className="h-12"
          />
          <div>
            <h1 className="text-xl font-semibold text-[#4284be]">BUTAX</h1>
            <p className="text-sm text-gray-600">Kimlik Doğrulama Sistemi</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#4284be] font-medium">BUTAX</p>
          <p className="text-sm text-gray-600">https://butax.gov.tr</p>
        </div>
      </div>
    </div>
  </header>
);
