import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockSOSAlerts, getSeverityColor, getStatusColor } from '../data/sos';
import { mockTrips } from '../data/trips';
import { AlertTriangle, Route, MapPin, Cloud, WifiOff, TrendingUp, Users, Clock } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeAlerts] = useState(mockSOSAlerts.filter(s => s.status === 'Active'));
  const [activeTrips] = useState(mockTrips.filter(t => t.status !== 'Completed'));

  const stats = [
    { label: 'Active SOS', value: activeAlerts.length, icon: AlertTriangle, color: 'bg-red-500', trend: '+2' },
    { label: 'Live Trips', value: activeTrips.length, icon: Route, color: 'bg-blue-500', trend: '+5' },
    { label: 'Total Tourists', value: '156', icon: Users, color: 'bg-green-500', trend: '+12' },
    { label: 'Avg Response', value: '8 min', icon: Clock, color: 'bg-purple-500', trend: '-2 min' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mission Control</h1>
          <p className="text-gray-600 mt-1">Real-time tourist safety monitoring</p>
        </div>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Alert Banners */}
      <div className="space-y-3">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
          <Cloud className="w-5 h-5 text-yellow-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-yellow-900">Weather Alert</p>
            <p className="text-xs text-yellow-700">Heavy rainfall warning for Cherrapunji region - Next 6 hours</p>
          </div>
          <button className="text-xs text-yellow-700 hover:text-yellow-900 font-medium">Details</button>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center gap-3">
          <WifiOff className="w-5 h-5 text-orange-600" />
          <div className="flex-1">
            <p className="text-sm font-medium text-orange-900">Network Outage</p>
            <p className="text-xs text-orange-700">Connectivity issues reported in Mawsynram area</p>
          </div>
          <button className="text-xs text-orange-700 hover:text-orange-900 font-medium">View Map</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live SOS Alerts Widget */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Live SOS Alerts
            </h2>
            <button 
              onClick={() => navigate('/sos')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all →
            </button>
          </div>

          <div className="space-y-3">
            {activeAlerts.slice(0, 4).map((alert) => (
              <div 
                key={alert.id}
                onClick={() => navigate('/sos')}
                className={`p-3 border ${getSeverityColor(alert.riskLevel)} rounded-lg cursor-pointer hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{alert.touristName}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(alert.status)}`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{alert.type} Alert</p>
                  </div>
                  <span className="text-xs text-gray-500">{alert.timeSince}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {alert.location}
                </div>
              </div>
            ))}
          </div>

          {activeAlerts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <AlertTriangle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>No active SOS alerts</p>
            </div>
          )}
        </div>

        {/* Active Trips Widget */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Route className="w-5 h-5 text-blue-600" />
              Active Trips
            </h2>
            <button 
              onClick={() => navigate('/trips')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all →
            </button>
          </div>

          <div className="space-y-3">
            {activeTrips.slice(0, 4).map((trip) => (
              <div 
                key={trip.id}
                onClick={() => navigate('/trips')}
                className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-medium">{trip.touristName}</h3>
                    <p className="text-sm text-gray-600">{trip.origin} → {trip.destination}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${trip.status === 'On Route' ? 'bg-green-100 text-green-600' : trip.status === 'Halted' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
                    {trip.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">ETA: {trip.eta}</span>
                  <span className="text-gray-600">{trip.speed} km/h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Maps Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card h-64 flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => navigate('/risk-map')}>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 font-medium">Risk Zone Heatmap</p>
            <p className="text-sm text-gray-500">Click to view full map</p>
          </div>
        </div>

        <div className="card h-64 flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => navigate('/trips')}>
          <div className="text-center">
            <Route className="w-12 h-12 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 font-medium">Tourist Distribution</p>
            <p className="text-sm text-gray-500">Click to view live tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
