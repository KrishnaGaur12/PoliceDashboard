import React, { useState } from 'react';
import { Card, Badge, Button, Select } from '../components/UI';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';
import { mockSOSAlerts } from '../data/sos';
import { mockTrips } from '../data/trips';

const Reports = () => {
  const [timeRange, setTimeRange] = useState('week');

  // SOS by Type Data
  const sosByType = [
    { name: 'Panic', count: mockSOSAlerts.filter(s => s.type === 'Panic').length, fill: '#EF4444' },
    { name: 'Silent', count: mockSOSAlerts.filter(s => s.type === 'Silent').length, fill: '#8B5CF6' },
    { name: 'Missing', count: mockSOSAlerts.filter(s => s.type === 'Missing').length, fill: '#F59E0B' },
    { name: 'Long Stop', count: mockSOSAlerts.filter(s => s.type === 'Long Stop').length, fill: '#10B981' },
    { name: 'High-Risk Entry', count: mockSOSAlerts.filter(s => s.type === 'High-Risk Entry').length, fill: '#3B82F6' },
  ];

  // Response Time Data
  const responseTimeData = [
    { day: 'Mon', avgTime: 12 },
    { day: 'Tue', avgTime: 15 },
    { day: 'Wed', avgTime: 10 },
    { day: 'Thu', avgTime: 18 },
    { day: 'Fri', avgTime: 14 },
    { day: 'Sat', avgTime: 16 },
    { day: 'Sun', avgTime: 11 },
  ];

  // Trip Volume Data
  const tripVolumeData = [
    { month: 'Jul', trips: 245 },
    { month: 'Aug', trips: 312 },
    { month: 'Sep', trips: 289 },
    { month: 'Oct', trips: 356 },
    { month: 'Nov', trips: 423 },
  ];

  // Risk Zone Data
  const riskZoneData = [
    { zone: 'Kaziranga Wildlife', incidents: 12 },
    { zone: 'NH-27 Accident Zone', incidents: 8 },
    { zone: 'Majuli Flood Zone', incidents: 15 },
    { zone: 'Network Dead Zone', incidents: 5 },
    { zone: 'Kamakhya Crime', incidents: 10 },
  ];

  // Mock Logs
  const logs = [
    { id: 'LOG-001', timestamp: '2025-11-16 14:30', type: 'SOS', description: 'Panic button triggered by John Doe', officer: 'Ravi Kumar', status: 'Resolved' },
    { id: 'LOG-002', timestamp: '2025-11-16 13:15', type: 'Trip', description: 'Trip TRIP-201 started', officer: 'System', status: 'Active' },
    { id: 'LOG-003', timestamp: '2025-11-16 12:45', type: 'Alert', description: 'High-risk zone entry detected', officer: 'Priya Devi', status: 'Acknowledged' },
    { id: 'LOG-004', timestamp: '2025-11-16 11:20', type: 'SOS', description: 'Silent SOS from Sarah Williams', officer: 'Anita Roy', status: 'Resolved' },
    { id: 'LOG-005', timestamp: '2025-11-16 10:05', type: 'System', description: 'Network restored in Morigaon', officer: 'System', status: 'Info' },
  ];

  const handleExport = () => {
    alert('Report exported successfully! (Mock functionality)');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex items-center space-x-3">
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            options={[
              { value: 'day', label: 'Last 24 Hours' },
              { value: 'week', label: 'Last Week' },
              { value: 'month', label: 'Last Month' },
              { value: 'year', label: 'Last Year' },
            ]}
            className="w-40"
          />
          <Button variant="primary" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-0">
          <div className="p-6">
            <p className="text-sm text-gray-600">Total SOS Alerts</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{mockSOSAlerts.length}</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% from last week</p>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <p className="text-sm text-gray-600">Avg Response Time</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">14 min</p>
            <p className="text-sm text-green-600 mt-2">↓ 8% improvement</p>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <p className="text-sm text-gray-600">Total Trips</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{mockTrips.length}</p>
            <p className="text-sm text-blue-600 mt-2">→ Stable</p>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <p className="text-sm text-gray-600">Resolution Rate</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">94%</p>
            <p className="text-sm text-green-600 mt-2">↑ 3% from last week</p>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SOS by Type */}
        <Card title="SOS Alerts by Type">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sosByType}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                dataKey="count"
              >
                {sosByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Average Response Time */}
        <Card title="Average Response Time (minutes)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgTime" stroke="#3B82F6" strokeWidth={2} name="Response Time" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Trip Volume */}
        <Card title="Trip Volume Trend">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tripVolumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="trips" fill="#10B981" name="Trips" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Risk Zones */}
        <Card title="Top High-Risk Zones (by Incidents)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riskZoneData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="zone" width={120} />
              <Tooltip />
              <Bar dataKey="incidents" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Activity Logs */}
      <Card title="Recent Activity Logs">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Log ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Officer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{log.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.timestamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={
                      log.type === 'SOS' ? 'danger' :
                      log.type === 'Alert' ? 'warning' :
                      log.type === 'Trip' ? 'primary' : 'default'
                    }>
                      {log.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{log.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.officer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={
                      log.status === 'Resolved' ? 'success' :
                      log.status === 'Active' ? 'primary' : 'default'
                    }>
                      {log.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
