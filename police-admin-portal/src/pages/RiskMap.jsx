import React, { useState } from 'react';
import { mockRiskZones, riskLayers } from '../data/riskZones';
import { Map as MapIcon } from 'lucide-react';

export default function RiskMap() {
  const [layers, setLayers] = useState(riskLayers);
  const [zones] = useState(mockRiskZones);

  const toggleLayer = (id) => {
    setLayers(layers.map(l => l.id === id ? { ...l, enabled: !l.enabled } : l));
  };

  const enabledZones = zones.filter(z => 
    layers.find(l => l.name.toLowerCase() === z.type.toLowerCase() && l.enabled)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MapIcon className="w-8 h-8 text-blue-600" />
        High-Risk Zone Map
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 card h-[700px]">
          <div className="h-full bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Interactive heatmap with risk zones (Leaflet integration)</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="font-bold mb-4">Layer Filters</h2>
            <div className="space-y-2">
              {layers.map((layer) => (
                <label key={layer.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layer.enabled}
                    onChange={() => toggleLayer(layer.id)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: layer.color }} />
                    <span className="text-sm">{layer.name}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="card overflow-y-auto max-h-[500px]">
            <h2 className="font-bold mb-4">Risk Zones</h2>
            <div className="space-y-3">
              {enabledZones.map((zone) => (
                <div key={zone.id} className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{zone.name}</p>
                    <span className={`px-2 py-0.5 text-xs rounded ${zone.riskLevel === 'Critical' ? 'bg-red-100 text-red-700' : zone.riskLevel === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {zone.riskLevel}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{zone.type}</p>
                  <p className="text-xs text-gray-500">{zone.description}</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{zone.incidents} incidents</span>
                    <span>{zone.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
