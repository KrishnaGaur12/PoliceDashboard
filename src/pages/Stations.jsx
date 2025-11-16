import React, { useState } from 'react';
import { Card, Badge, Button, Modal, Select, Textarea } from '../components/UI';
import { Building2, Phone, Users, Car, MapPin, AlertTriangle } from 'lucide-react';
import { mockStations, mockOfficers } from '../data/stations';
import { mockSOSAlerts } from '../data/sos';

const Stations = () => {
  const [stations] = useState(mockStations);
  const [officers] = useState(mockOfficers);
  const [transferModal, setTransferModal] = useState(false);
  const [backupModal, setBackupModal] = useState(false);
  const [selectedSOS, setSelectedSOS] = useState('');
  const [selectedStation, setSelectedStation] = useState('');
  const [backupNotes, setBackupNotes] = useState('');

  const handleTransfer = () => {
    if (selectedSOS && selectedStation) {
      alert(`SOS ${selectedSOS} transferred to ${selectedStation}`);
      setTransferModal(false);
      setSelectedSOS('');
      setSelectedStation('');
    }
  };

  const handleBackup = () => {
    if (backupNotes) {
      alert('Backup request sent successfully');
      setBackupModal(false);
      setBackupNotes('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Station Coordination</h1>
        <div className="flex gap-3">
          <Button variant="primary" onClick={() => setTransferModal(true)}>
            Transfer SOS
          </Button>
          <Button variant="danger" onClick={() => setBackupModal(true)}>
            Request Backup
          </Button>
        </div>
      </div>

      {/* Stations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stations.map((station) => (
          <Card key={station.id}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Building2 className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{station.name}</h3>
                    <p className="text-sm text-gray-600">{station.location}</p>
                  </div>
                </div>
                {station.activeSOSCount > 0 && (
                  <Badge variant="danger" className="text-sm">
                    {station.activeSOSCount} Active SOS
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center text-blue-600 mb-1">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Officers</span>
                  </div>
                  <p className="text-xl font-bold text-blue-900">{station.activeOfficers}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center text-green-600 mb-1">
                    <Car className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Vehicles</span>
                  </div>
                  <p className="text-xl font-bold text-green-900">{station.availableVehicles}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="flex items-center text-purple-600 mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Distance</span>
                  </div>
                  <p className="text-xl font-bold text-purple-900">{station.distance}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {station.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Lat: {station.coordinates.lat}, Lng: {station.coordinates.lng}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Officers Table */}
      <Card title="Station Officers">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Station</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active SOS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {officers.map((officer) => (
                <tr key={officer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {officer.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {officer.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {officer.station}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {officer.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={
                      officer.status === 'On Duty' ? 'success' :
                      officer.status === 'Available' ? 'primary' : 'default'
                    }>
                      {officer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {officer.activeSOSCount > 0 ? (
                      <Badge variant="danger">{officer.activeSOSCount}</Badge>
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Transfer SOS Modal */}
      <Modal
        isOpen={transferModal}
        onClose={() => setTransferModal(false)}
        title="Transfer SOS to Another Station"
        size="md"
      >
        <Select
          label="Select SOS Alert"
          value={selectedSOS}
          onChange={(e) => setSelectedSOS(e.target.value)}
          options={[
            { value: '', label: 'Choose an SOS alert' },
            ...mockSOSAlerts
              .filter(s => s.status === 'Active')
              .map(s => ({ value: s.id, label: `${s.id} - ${s.touristName} (${s.location})` })),
          ]}
        />
        <Select
          label="Transfer to Station"
          value={selectedStation}
          onChange={(e) => setSelectedStation(e.target.value)}
          options={[
            { value: '', label: 'Choose a station' },
            ...stations.map(s => ({ value: s.name, label: `${s.name} (${s.distance})` })),
          ]}
        />
        <div className="flex space-x-3 mt-4">
          <Button variant="primary" onClick={handleTransfer} className="flex-1">
            Transfer
          </Button>
          <Button variant="secondary" onClick={() => setTransferModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Request Backup Modal */}
      <Modal
        isOpen={backupModal}
        onClose={() => setBackupModal(false)}
        title="Request Backup"
        size="md"
      >
        <Select
          label="Severity"
          options={[
            { value: '', label: 'Select severity' },
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
            { value: 'critical', label: 'Critical' },
          ]}
        />
        <Textarea
          label="Details"
          value={backupNotes}
          onChange={(e) => setBackupNotes(e.target.value)}
          placeholder="Describe the situation and backup requirements..."
        />
        <div className="flex space-x-3 mt-4">
          <Button variant="danger" onClick={handleBackup} className="flex-1">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Send Request
          </Button>
          <Button variant="secondary" onClick={() => setBackupModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Stations;
