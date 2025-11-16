import React, { useState } from 'react';
import { mockTourists } from '../data/tourists';
import { Users, Search } from 'lucide-react';

export default function Tourists() {
  const [tourists] = useState(mockTourists);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTourists = tourists.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Users className="w-8 h-8 text-blue-600" />
        Tourist Management
      </h1>

      <div className="card">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, ID, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTourists.map((tourist) => (
          <div key={tourist.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <img src={tourist.photo} alt={tourist.name} className="w-16 h-16 rounded-full" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{tourist.name}</h3>
                <p className="text-sm text-gray-600">{tourist.id}</p>
                <p className="text-sm text-gray-600">{tourist.nationality}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Safety Score</span>
                <span className="font-medium">{tourist.safetyScore}/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${tourist.safetyScore > 70 ? 'bg-green-500' : tourist.safetyScore > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${tourist.safetyScore}%` }}
                />
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {tourist.badges.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>Phone: {tourist.phone}</p>
              <p>DID: {tourist.did}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
