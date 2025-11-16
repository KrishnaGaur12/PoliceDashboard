import React, { useState } from 'react';
import { Card, Badge, Table } from '../components/UI';
import { Car, Navigation, MapPin } from 'lucide-react';
import { mockVehicles } from '../data/vehicles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom vehicle icon
const vehicleIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2778/2778542.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Vehicles = () => {
  const [vehicles] = useState(mockVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const columns = [
    {
      key: 'vehicleNumber',
      label: 'Vehicle Number',
      render: (row) => <span className="font-mono text-sm">{row.vehicleNumber}</span>,
    },
    {
      key: 'type',
      label: 'Type',
    },
    {
      key: 'driver',
      label: 'Driver',
    },
    {
      key: 'station',
      label: 'Station',
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge variant={
          row.status === 'Active' ? 'success' :
          row.status === 'Available' ? 'primary' : 'default'
        }>
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'speed',
      label: 'Speed',
      render: (row) => <span className="text-sm">{row.speed} km/h</span>,
    },
    {
      key: 'assignedSOS',
      label: 'Assigned SOS',
      render: (row) => row.assignedSOS ? (
        <Badge variant="danger">{row.assignedSOS}</Badge>
      ) : (
        <span className="text-gray-400 text-sm">None</span>
      ),
    },
    {
      key: 'etaToSOS',
      label: 'ETA',
      render: (row) => row.etaToSOS || <span className="text-gray-400">-</span>,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Police Vehicle Tracking</h1>
        <div className="flex items-center space-x-2">
          <Badge variant="success" className="text-base px-4 py-2">
            {vehicles.filter(v => v.status === 'Active').length} Active
          </Badge>
          <Badge variant="primary" className="text-base px-4 py-2">
            {vehicles.filter(v => v.status === 'Available').length} Available
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Vehicles</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{vehicles.length}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">On Patrol</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {vehicles.filter(v => v.status === 'Active').length}
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <Navigation className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Responding to SOS</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {vehicles.filter(v => v.assignedSOS).length}
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Maintenance</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {vehicles.filter(v => v.status === 'Maintenance').length}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <Car className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Map */}
      <Card title="Vehicle Locations">
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer
            center={[26.2, 91.9]}
            zoom={9}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {vehicles.map((vehicle) => (
              <Marker
                key={vehicle.id}
                position={[vehicle.location.lat, vehicle.location.lng]}
                icon={vehicleIcon}
              >
                <Popup>
                  <div className="text-sm p-2">
                    <p className="font-semibold text-gray-900">{vehicle.vehicleNumber}</p>
                    <p className="text-xs text-gray-600 mb-1">{vehicle.type}</p>
                    <p className="text-xs text-gray-600">Driver: {vehicle.driver}</p>
                    <p className="text-xs text-gray-600">Speed: {vehicle.speed} km/h</p>
                    <Badge variant={
                      vehicle.status === 'Active' ? 'success' :
                      vehicle.status === 'Available' ? 'primary' : 'default'
                    } className="mt-2">
                      {vehicle.status}
                    </Badge>
                    {vehicle.assignedSOS && (
                      <p className="text-xs text-red-600 mt-1">
                        Responding to: {vehicle.assignedSOS}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>

      {/* Vehicle Table */}
      <Card title="Vehicle Fleet">
        <Table
          columns={columns}
          data={vehicles}
          onRowClick={(vehicle) => setSelectedVehicle(vehicle)}
        />
      </Card>

      {/* Vehicle Detail Drawer */}
      {selectedVehicle && (
        <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[400px] bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-200">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Vehicle Details</h2>
              <button
                onClick={() => setSelectedVehicle(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Badge variant={
              selectedVehicle.status === 'Active' ? 'success' :
              selectedVehicle.status === 'Available' ? 'primary' : 'default'
            }>
              {selectedVehicle.status}
            </Badge>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Vehicle Number</h3>
              <p className="text-lg font-mono text-gray-900">{selectedVehicle.vehicleNumber}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Type</h3>
              <p className="text-sm text-gray-900">{selectedVehicle.type}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Driver</h3>
              <p className="text-sm text-gray-900">{selectedVehicle.driver}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Station</h3>
              <p className="text-sm text-gray-900">{selectedVehicle.station}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">Current Speed</p>
                <p className="text-lg font-bold text-blue-900">{selectedVehicle.speed} km/h</p>
              </div>
              {selectedVehicle.etaToSOS && (
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-xs text-red-700 mb-1">ETA to SOS</p>
                  <p className="text-lg font-bold text-red-900">{selectedVehicle.etaToSOS}</p>
                </div>
              )}
            </div>

            {selectedVehicle.assignedSOS && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Assigned SOS</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <Badge variant="danger">{selectedVehicle.assignedSOS}</Badge>
                  <p className="text-sm text-red-900 mt-2">
                    Vehicle is currently responding to an emergency
                  </p>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Location</h3>
              <div className="h-48 rounded-lg overflow-hidden border border-gray-200">
                <MapContainer
                  center={[selectedVehicle.location.lat, selectedVehicle.location.lng]}
                  zoom={14}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker
                    position={[selectedVehicle.location.lat, selectedVehicle.location.lng]}
                    icon={vehicleIcon}
                  >
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

export default Vehicles;
