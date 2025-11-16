import React, { useState } from 'react';
import { mockTrips, getTripStatusColor } from '../data/trips';
import { Route as RouteIcon, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function Trips() {
  const [trips] = useState(mockTrips);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <RouteIcon className="w-8 h-8 text-blue-600" />
        Live Trip Monitoring
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card h-[600px]">
          <h2 className="text-lg font-bold mb-4">Live Map</h2>
          <div className="h-[500px] bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Map view with trip markers (Leaflet integration)</p>
          </div>
        </div>

        <div className="card overflow-y-auto h-[600px]">
          <h2 className="text-lg font-bold mb-4">Active Trips</h2>
          <div className="space-y-3">
            {trips.map((trip) => (
              <div key={trip.id} className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{trip.touristName}</p>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${getTripStatusColor(trip.status)}`}>
                    {trip.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{trip.origin} → {trip.destination}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>Speed: {trip.speed} km/h</span>
                  <span>ETA: {trip.eta}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {trip.badges.map((badge, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
