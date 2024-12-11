import { AdminLayout } from "@/components/layout/AdminLayout";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  const stats = [
    {
      title: "Total active users",
      value: "18,765",
      change: "+2.6%",
      period: "last 7 days",
      trend: "up"
    },
    {
      title: "Total installed",
      value: "4,876",
      change: "+0.2%",
      period: "last 7 days",
      trend: "up"
    },
    {
      title: "Total downloads",
      value: "678",
      change: "-0.1%",
      period: "last 7 days",
      trend: "down"
    }
  ];

  const pieData = [
    { name: 'Asia', value: 1230, color: '#00A76F' },
    { name: 'Europe', value: 6790, color: '#FFAB00' },
    { name: 'Americas', value: 1010, color: '#00B8D9' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-primary rounded-lg p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back 👋
              <br />
              {user?.email?.split('@')[0] || 'Admin'}
            </h1>
            <p className="text-gray-200 mb-4 max-w-lg">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
            </p>
            <Button variant="secondary" className="bg-[#00A76F] hover:bg-[#008F5D] text-white border-none">
              Go now
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 w-72 h-72">
            <img 
              src="/placeholder.svg" 
              alt="Welcome illustration" 
              className="object-contain"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <span className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-[#00A76F]' : 'text-red-500'
                }`}>
                  {stat.trend === 'up' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  {stat.change}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.period}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Area Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Current download</h3>
            <p className="text-gray-500 text-sm mb-4">Downloaded by operating system</p>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  series1: { label: 'Series 1', color: '#00A76F' },
                  series2: { label: 'Series 2', color: '#FFAB00' },
                  series3: { label: 'Series 3', color: '#00B8D9' },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Area installed</h3>
            <p className="text-gray-500 text-sm mb-2">(+43%) than last year</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <span className="text-gray-500 text-sm">Asia</span>
                <p className="text-lg font-semibold">1.23k</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Europe</span>
                <p className="text-lg font-semibold">6.79k</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Americas</span>
                <p className="text-lg font-semibold">1.01k</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6">
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
