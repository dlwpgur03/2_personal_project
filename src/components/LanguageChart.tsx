"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface LanguageChartProps {
  languages: Record<string, number>;
}

// Pre-defined colors for chart slices
export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

const LanguageChart = ({ languages }: LanguageChartProps) => {
  if (!languages || Object.keys(languages).length === 0) {
    return <div className="text-sm text-gray-500">No language data available.</div>;
  }

  const data = Object.entries(languages).map(([name, value]) => ({ name, value }));

  return (
    <div style={{ width: 150, height: 150 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#2d3748', border: 'none', borderRadius: '0.5rem' }} 
            itemStyle={{ color: '#cbd5e0' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart;