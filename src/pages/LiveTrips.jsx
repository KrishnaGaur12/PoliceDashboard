import React, { useState } from 'react';
import { Card, Badge, Table } from '../components/UI';
import { MapPin, Activity, Wifi, WifiOff, AlertCircle } from 'lucide-react';
import { mockTrips } from '../data/trips';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const LiveTrips = () => {
  const [trips] = useState(mockTrips);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredTrips = trips.filter(trip => 
    filterStatus === 'All' || trip.status === filterStatus
  );

  const columns = [
    {
      key: 'id',
      label: 'Trip ID',
      render: (row) => <span className="font-mono text-sm">{row.id}</span>,
    },
    {
      key: 'touristName',
      label: 'Tourist',
    },
    {
      key: 'route',
      label: 'Route',
      render: (row) => (
        <span className="text-sm">{row.origin} → {row.destination}</span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => {
        const variant = row.status === 'On Route' ? 'primary' : 
                        row.status === 'Halted' ? 'warning' : 'success';
        return <Badge variant={variant}>{row.status}</Badge>;
      },
    },
    {
      key: 'speed',
      label: 'Speed',
      render: (row) => <span className="text-sm">{row.speed} km/h</span>,
    },
    {
      key: 'eta',
      label: 'ETA',
    },
    {
      key: 'riskLevel',
      label: 'Risk',
      render: (row) => <Badge variant={row.riskLevel.toLowerCase()}>{row.riskLevel}</Badge>,
    },
    {
      key: 'connectivity',
      label: 'Network',
      render: (row) => (
        <div className="flex items-center">
          {row.connectivity === 'Good' ? (
            <Wifi className="w-4 h-4 text-green-600 mr-1" />
          ) : (
            <WifiOff className="w-4 h-4 text-red-600 mr-1" />
          )}
          <span className="text-sm">{row.connectivity}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Live Trip Monitoring</h1>
        <div className="flex items-center space-x-2">
          <Badge variant="primary" className="text-base px-4 py-2">
            {trips.filter(t => t.status === 'On Route').length} Active Trips
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex gap-3">
          {['All', 'On Route', 'Halted', 'Completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </Card>

      {/* Map View */}
      <Card title="Trip Locations">
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer
            center={[26.4, 92.5]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredTrips.map((trip) => (
              <React.Fragment key={trip.id}>
                <Polyline positions={trip.route} color="blue" weight={2} opacity={0.5} />
                <Marker position={[trip.currentLocation.lat, trip.currentLocation.lng]}>
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold">{trip.touristName}</p>
                      <p>Status: {trip.status}</p>
                      <p>Speed: {trip.speed} km/h</p>
                      <p>ETA: {trip.eta}</p>
                    </div>
                  </Popup>
                </Marker>
              </React.Fragment>
            ))}
          </MapContainer>
        </div>
      </Card>

      {/* Trip Table */}
      <Card title={`Active Trips (${filteredTrips.length})`}>
        <Table
          columns={columns}
          data={filteredTrips}
          onRowClick={(trip) => setSelectedTrip(trip)}
        />
      </Card>

      {/* Trip Detail Drawer */}
      {selectedTrip && (
        <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[500px] bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-200">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Trip Details</h2>
              <button
                onClick={() => setSelectedTrip(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={selectedTrip.status === 'On Route' ? 'primary' : selectedTrip.status === 'Halted' ? 'warning' : 'success'}>
                {selectedTrip.status}
              </Badge>
              <Badge variant={selectedTrip.riskLevel.toLowerCase()}>{selectedTrip.riskLevel}</Badge>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Trip ID */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Trip ID</h3>
              <p className="text-sm font-mono text-gray-900">{selectedTrip.id}</p>
            </div>

            {/* Tourist Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Tourist</h3>
              <p className="text-sm text-gray-900">{selectedTrip.touristName}</p>
              <p className="text-xs text-gray-600 mt-1">ID: {selectedTrip.touristId}</p>
            </div>

            {/* Route */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Route</h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">From:</span> {selectedTrip.origin}
                </p>
                <p className="text-sm text-gray-900 mt-2">
                  <span className="font-medium">To:</span> {selectedTrip.destination}
                </p>
              </div>
            </div>

            {/* Status Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">Speed</p>
                <p className="text-lg font-bold text-blue-900">{selectedTrip.speed} km/h</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-xs text-green-700 mb-1">ETA</p>
                <p className="text-lg font-bold text-green-900">{selectedTrip.eta}</p>
              </div>
            </div>

            {/* Network Status */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Network Connectivity</h3>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center">
                  {selectedTrip.connectivity === 'Good' ? (
                    <Wifi className="w-5 h-5 text-green-600 mr-2" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  <span className="text-sm font-medium">{selectedTrip.connectivity}</span>
                </div>
                <Badge variant={selectedTrip.networkDrops > 0 ? 'warning' : 'success'}>
                  {selectedTrip.networkDrops} drops
                </Badge>
              </div>
            </div>

            {/* Alerts & Badges */}
            {selectedTrip.badges.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Active Alerts</h3>
                <div className="space-y-2">
                  {selectedTrip.badges.map((badge, idx) => (
                    <div key={idx} className="flex items-center bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="text-sm text-yellow-900">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Start Time */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Started</h3>
              <p className="text-sm text-gray-900">
                {selectedTrip.startTime.toLocaleString()}
              </p>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Route Map</h3>
              <div className="h-48 rounded-lg overflow-hidden border border-gray-200">
                <MapContainer
                  center={[selectedTrip.currentLocation.lat, selectedTrip.currentLocation.lng]}
                  zoom={10}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Polyline positions={selectedTrip.route} color="blue" weight={3} />
                  <Marker position={[selectedTrip.currentLocation.lat, selectedTrip.currentLocation.lng]}>
                    <Popup>Current Location</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveTrips;
