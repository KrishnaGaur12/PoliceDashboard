import React from 'react';
import { mockVehicles } from '../data/stations';
import { Car } from 'lucide-react';

export default function Vehicles() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Car className="w-8 h-8 text-blue-600" />
        Police Vehicle Tracking
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card h-[600px]">
          <h2 className="text-lg font-bold mb-4">Vehicle Map</h2>
          <div className="h-[500px] bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Map showing police vehicle locations</p>
          </div>
        </div>

        <div className="card overflow-y-auto h-[600px]">
          <h2 className="text-lg font-bold mb-4">Active Vehicles</h2>
          <div className="space-y-3">
            {mockVehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">{vehicle.number}</p>
                  <span className={`px-2 py-1 rounded text-xs ${vehicle.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {vehicle.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{vehicle.type}</p>
                <p className="text-sm text-gray-600 mb-1">Driver: {vehicle.driver}</p>
                <p className="text-sm text-gray-600 mb-2">Location: {vehicle.location}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>ETA: {vehicle.eta}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Track</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
