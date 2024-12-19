import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Heart, Package, CreditCard, MapPin, Bell } from "lucide-react";

const UserDashboard = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  const stats = [
    { icon: ShoppingBag, title: "Total Orders", value: "12" },
    { icon: Heart, title: "Wishlist Items", value: "5" },
    { icon: Package, title: "Active Orders", value: "2" },
  ];

  const quickActions = [
    { icon: CreditCard, title: "Payment Methods", description: "Manage your payment options" },
    { icon: MapPin, title: "Shipping Address", description: "Update your shipping details" },
    { icon: Bell, title: "Notifications", description: "Check your latest updates" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back, {user?.email}</h1>
            <p className="text-muted-foreground">Here's what's happening with your account today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <action.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button onClick={handleSignOut} variant="outline" className="mt-8">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;