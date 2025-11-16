import React, { useState } from 'react';
import { Card, Badge } from '../components/UI';
import { AlertTriangle, MapPin, Users, Map as MapIcon, Cloud, WifiOff, TrendingUp, Clock } from 'lucide-react';
import { mockSOSAlerts } from '../data/sos';
import { mockTrips } from '../data/trips';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Dashboard = () => {
  const navigate = useNavigate();
  const activeSOSAlerts = mockSOSAlerts.filter(sos => sos.status === 'Active');
  const activeTrips = mockTrips.filter(trip => trip.status === 'On Route' || trip.status === 'Halted');

  const stats = [
    {
      title: 'Active SOS Alerts',
      value: activeSOSAlerts.length,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      trend: '+2 from yesterday',
    },
    {
      title: 'Live Trips',
      value: activeTrips.length,
      icon: MapPin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '12 completed today',
    },
    {
      title: 'Total Tourists',
      value: 847,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: '+15% this week',
    },
    {
      title: 'High-Risk Zones',
      value: 6,
      icon: MapIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: '3 active alerts',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Mission Control Dashboard</h1>
        <div className="text-sm text-gray-600">
          Last updated: <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Alerts Banner */}
      <div className="space-y-3">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Critical Alert: Silent SOS Detected</p>
            <p className="text-sm text-red-700">Tourist in distress at Majuli Island - Officer dispatched</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
          <Cloud className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-900">Weather Alert: Heavy Rainfall Expected</p>
            <p className="text-sm text-yellow-700">Majuli and surrounding areas - Next 6 hours</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-0">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.trend}
                  </div>
                </div>
                <div className={`${stat.bgColor} p-4 rounded-lg`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live SOS Alerts */}
        <Card
          title="Live SOS Alerts"
          action={
            <button
              onClick={() => navigate('/sos')}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </button>
          }
        >
          <div className="space-y-3">
            {activeSOSAlerts.slice(0, 4).map((sos) => (
              <div
                key={sos.id}
                onClick={() => navigate(`/sos`)}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{sos.touristName}</span>
                      <Badge variant={sos.riskLevel.toLowerCase()}>{sos.riskLevel}</Badge>
                      <Badge variant="default">{sos.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{sos.location}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {sos.timeSince}
                    </div>
                  </div>
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Active Trips */}
        <Card
          title="Active Trips"
          action={
            <button
              onClick={() => navigate('/trips')}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </button>
          }
        >
          <div className="space-y-3">
            {activeTrips.slice(0, 4).map((trip) => (
              <div
                key={trip.id}
                onClick={() => navigate('/trips')}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{trip.touristName}</span>
                      <Badge variant={trip.riskLevel.toLowerCase()}>{trip.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {trip.origin} → {trip.destination}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">ETA: {trip.eta}</p>
                  </div>
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                {trip.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {trip.badges.map((badge, idx) => (
                      <Badge key={idx} variant="warning" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Tourist Distribution Map */}
      <Card title="Tourist Distribution & Risk Zones">
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer
            center={[26.1844, 91.7458]}
            zoom={8}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {activeSOSAlerts.map((sos) => (
              <Marker key={sos.id} position={[sos.coordinates.lat, sos.coordinates.lng]}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-semibold">{sos.touristName}</p>
                    <p className="text-red-600">{sos.type} SOS</p>
                    <p>{sos.location}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            {activeTrips.map((trip) => (
              <Marker key={trip.id} position={[trip.currentLocation.lat, trip.currentLocation.lng]}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-semibold">{trip.touristName}</p>
                    <p>Status: {trip.status}</p>
                    <p>Speed: {trip.speed} km/h</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
