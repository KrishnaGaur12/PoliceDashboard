import React, { useState } from 'react';
import { Card, Badge } from '../components/UI';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import { mockRiskZones } from '../data/riskzones';
import { AlertTriangle, Droplets, Wind, Wifi, Landmark, Mountain } from 'lucide-react';

const RiskMap = () => {
  const [riskZones] = useState(mockRiskZones);
  const [activeLayersState, setActiveLayers] = useState({
    Crime: true,
    Accident: true,
    Wildlife: true,
    Flood: true,
    Landslide: true,
    Network: true,
  });

  const toggleLayer = (layer) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const getLayerIcon = (type) => {
    const icons = {
      Crime: AlertTriangle,
      Accident: AlertTriangle,
      Wildlife: Landmark,
      Flood: Droplets,
      Landslide: Mountain,
      Network: Wifi,
    };
    return icons[type] || AlertTriangle;
  };

  const getLayerColor = (type) => {
    const colors = {
      Crime: '#EF4444',
      Accident: '#F59E0B',
      Wildlife: '#10B981',
      Flood: '#3B82F6',
      Landslide: '#8B5CF6',
      Network: '#6B7280',
    };
    return colors[type] || '#6B7280';
  };

  const filteredZones = riskZones.filter(zone => activeLayersState[zone.type]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">High-Risk Zone Heat Map</h1>
        <Badge variant="danger" className="text-base px-4 py-2">
          {riskZones.filter(z => z.active).length} Active Risk Zones
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Layer Filters */}
        <div className="lg:col-span-1">
          <Card title="Layer Filters">
            <div className="space-y-3">
              {Object.keys(activeLayersState).map((layer) => {
                const Icon = getLayerIcon(layer);
                const count = riskZones.filter(z => z.type === layer).length;
                
                return (
                  <div
                    key={layer}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center flex-1">
                      <Icon className="w-5 h-5 mr-3" style={{ color: getLayerColor(layer) }} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{layer}</p>
                        <p className="text-xs text-gray-500">{count} zones</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeLayersState[layer]}
                        onChange={() => toggleLayer(layer)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Risk Clusters */}
          <Card title="High-Risk Clusters" className="mt-6">
            <div className="space-y-3">
              {filteredZones.slice(0, 6).map((zone) => (
                <div key={zone.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{zone.name}</span>
                    <Badge variant={zone.riskLevel.toLowerCase()}>{zone.riskLevel}</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{zone.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{zone.incidents} incidents</span>
                    <span>{Math.floor((Date.now() - zone.lastUpdate) / (1000 * 60 * 60))}h ago</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <Card title="Risk Zone Map" className="h-[calc(100vh-12rem)]">
            <div className="h-full rounded-lg overflow-hidden">
              <MapContainer
                center={[26.4, 92.5]}
                zoom={8}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {filteredZones.map((zone) => (
                  <Circle
                    key={zone.id}
                    center={[zone.coordinates.lat, zone.coordinates.lng]}
                    radius={zone.radius}
                    pathOptions={{
                      color: getLayerColor(zone.type),
                      fillColor: getLayerColor(zone.type),
                      fillOpacity: 0.3,
                      weight: 2,
                    }}
                  >
                    <Popup>
                      <div className="text-sm p-2">
                        <p className="font-semibold text-gray-900">{zone.name}</p>
                        <Badge variant={zone.riskLevel.toLowerCase()} className="my-2">
                          {zone.riskLevel} Risk
                        </Badge>
                        <p className="text-xs text-gray-600 mb-2">{zone.description}</p>
                        <div className="text-xs text-gray-500">
                          <p>Type: {zone.type}</p>
                          <p>Incidents: {zone.incidents}</p>
                          <p>Last updated: {zone.lastUpdate.toLocaleString()}</p>
                        </div>
                      </div>
                    </Popup>
                  </Circle>
                ))}
              </MapContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;
