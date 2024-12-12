import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
  trend: 'up' | 'down';
}

const StatCard = ({ title, value, change, period, trend }: StatCardProps) => (
  <Card className="p-6">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <span className={`flex items-center text-sm ${
        trend === 'up' ? 'text-[#00A76F]' : 'text-red-500'
      }`}>
        {trend === 'up' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        {change}
      </span>
    </div>
    <div className="flex justify-between items-end">
      <span className="text-2xl font-semibold">{value}</span>
      <span className="text-gray-400 text-sm">{period}</span>
    </div>
  </Card>
);

export const AdminStats = () => {
  const stats = [
    {
      title: "Total active users",
      value: "18,765",
      change: "+2.6%",
      period: "last 7 days",
      trend: "up" as const
    },
    {
      title: "Total installed",
      value: "4,876",
      change: "+0.2%",
      period: "last 7 days",
      trend: "up" as const
    },
    {
      title: "Total downloads",
      value: "678",
      change: "-0.1%",
      period: "last 7 days",
      trend: "down" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};