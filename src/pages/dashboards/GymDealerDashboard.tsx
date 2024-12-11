import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const GymDealerDashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Gym Dealer Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Inventory</h2>
              <p className="text-gray-600">Manage your gym equipment</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Orders</h2>
              <p className="text-gray-600">View and manage orders</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Reports</h2>
              <p className="text-gray-600">Access sales reports</p>
            </div>
          </div>
          <div className="mt-6">
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDealerDashboard;