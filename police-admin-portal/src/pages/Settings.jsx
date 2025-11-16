import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { mockOfficers } from '../data/stations';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <SettingsIcon className="w-8 h-8 text-blue-600" />
        Settings & Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-bold mb-4">Geofence Management</h2>
          <button className="btn-primary mb-4">Add New Geofence</button>
          <div className="space-y-2">
            {['Kaziranga Wildlife Zone', 'Mawsynram Landslide Area', 'NH-44 Crime Hotspot'].map((zone, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <span>{zone}</span>
                <div className="flex gap-2">
                  <button className="text-blue-600 text-sm">Edit</button>
                  <button className="text-red-600 text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">Officer Accounts</h2>
          <button className="btn-primary mb-4">Add New Officer</button>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Role</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockOfficers.map((officer) => (
                  <tr key={officer.id}>
                    <td className="py-2">{officer.name}</td>
                    <td className="py-2">{officer.role}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs ${officer.status === 'On Duty' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {officer.status}
                      </span>
                    </td>
                    <td className="py-2">
                      <button className="text-blue-600 text-xs">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">Alert Sensitivity</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Long Halt Time (minutes)</label>
              <input type="range" min="10" max="60" defaultValue="30" className="w-full" />
              <p className="text-sm text-gray-600 mt-1">Current: 30 minutes</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Route Deviation Threshold (km)</label>
              <input type="range" min="1" max="10" defaultValue="5" className="w-full" />
              <p className="text-sm text-gray-600 mt-1">Current: 5 km</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Network Drop Alert</label>
              <input type="range" min="1" max="10" defaultValue="3" className="w-full" />
              <p className="text-sm text-gray-600 mt-1">Current: 3 drops</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">System Configuration</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Auto-assign nearest officer</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Send SMS notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm">Email alerts for critical SOS</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Enable dark mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
