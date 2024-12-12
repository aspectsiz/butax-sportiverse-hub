import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const AnalyticsCharts = () => {
  const pieData = [
    { name: 'Asia', value: 1230, color: '#00A76F' },
    { name: 'Europe', value: 6790, color: '#FFAB00' },
    { name: 'Americas', value: 1010, color: '#00B8D9' },
  ];

  return (
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
  );
};