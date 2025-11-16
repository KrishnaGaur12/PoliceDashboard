import React from 'react';
import { BarChart3, Download } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sosData = [
  { name: 'Panic', value: 15 },
  { name: 'Silent', value: 8 },
  { name: 'Missing', value: 5 },
  { name: 'Long Stop', value: 12 },
  { name: 'High-Risk', value: 7 },
];

const responseTimeData = [
  { month: 'Jul', time: 12 },
  { month: 'Aug', time: 10 },
  { month: 'Sep', time: 9 },
  { month: 'Oct', time: 8 },
  { month: 'Nov', time: 8 },
];

const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          Reports & Analytics
        </h1>
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-bold mb-4">SOS by Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sosData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sosData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">Average Response Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="time" stroke="#3b82f6" name="Response Time (min)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">Trip Volumes</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { name: 'Mon', trips: 25 },
              { name: 'Tue', trips: 30 },
              { name: 'Wed', trips: 28 },
              { name: 'Thu', trips: 35 },
              { name: 'Fri', trips: 40 },
              { name: 'Sat', trips: 45 },
              { name: 'Sun', trips: 50 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="trips" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">Top High-Risk Zones</h2>
          <div className="space-y-3">
            {[
              { name: 'Mawsynram Landslide', incidents: 20, type: 'Landslide' },
              { name: 'Kaziranga Wildlife', incidents: 18, type: 'Wildlife' },
              { name: 'Brahmaputra Flood Zone', incidents: 15, type: 'Flood' },
              { name: 'NH-44 Crime Hotspot', incidents: 12, type: 'Crime' },
            ].map((zone, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{zone.name}</p>
                  <p className="text-sm text-gray-600">{zone.type}</p>
                </div>
                <span className="text-lg font-bold text-red-600">{zone.incidents}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
