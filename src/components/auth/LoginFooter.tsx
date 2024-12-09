import React from 'react';

export const LoginFooter = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-white border-t py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2024 BUTAX - All rights reserved
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Privacy & Security
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  </footer>
);