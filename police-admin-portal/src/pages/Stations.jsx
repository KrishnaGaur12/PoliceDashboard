import React from 'react';
import { mockStations } from '../data/stations';
import { Building2 } from 'lucide-react';

export default function Stations() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Building2 className="w-8 h-8 text-blue-600" />
        Station Coordination
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockStations.map((station) => (
          <div key={station.id} className="card">
            <h3 className="font-bold text-lg mb-2">{station.name}</h3>
            <p className="text-gray-600 mb-4">{station.city}, {station.state}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Chief Officer</p>
                <p className="font-medium">{station.chiefOfficer}</p>
              </div>
              <div>
                <p className="text-gray-600">Officers</p>
                <p className="font-medium">{station.officers}</p>
              </div>
              <div>
                <p className="text-gray-600">Active Alerts</p>
                <p className="font-medium text-red-600">{station.activeAlerts}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-medium text-green-600">{station.status}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn-secondary flex-1">Transfer SOS</button>
              <button className="btn-secondary flex-1">Request Backup</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
