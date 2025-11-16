import React, { useState } from 'react';
import { Card, Badge, Button, Input, Modal, Textarea } from '../components/UI';
import { Plus, Edit, Trash2, Save } from 'lucide-react';
import { mockGeofences } from '../data/riskzones';
import { mockOfficers } from '../data/stations';

const Settings = () => {
  const [geofences, setGeofences] = useState(mockGeofences);
  const [officers, setOfficers] = useState(mockOfficers);
  const [geofenceModal, setGeofenceModal] = useState(false);
  const [officerModal, setOfficerModal] = useState(false);
  const [newGeofence, setNewGeofence] = useState({ name: '', type: 'Wildlife' });
  const [alertSettings, setAlertSettings] = useState({
    haltTime: 20,
    speedLimit: 80,
    networkDropThreshold: 3,
  });

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const handleAddGeofence = () => {
    if (newGeofence.name) {
      const newGeo = {
        id: `GEO-${geofences.length + 1}`,
        ...newGeofence,
        coordinates: [],
        alertEnabled: true,
        createdDate: new Date().toISOString().split('T')[0],
      };
      setGeofences([...geofences, newGeo]);
      setGeofenceModal(false);
      setNewGeofence({ name: '', type: 'Wildlife' });
      alert('Geofence added successfully!');
    }
  };

  const handleDeleteGeofence = (id) => {
    if (confirm('Are you sure you want to delete this geofence?')) {
      setGeofences(geofences.filter(g => g.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Settings & Management</h1>
        <Badge variant="primary" className="text-base px-4 py-2">Admin Only</Badge>
      </div>

      {/* Alert Sensitivity Settings */}
      <Card title="Alert Sensitivity Configuration">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Halt Time Alert Threshold (minutes)
            </label>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={alertSettings.haltTime}
              onChange={(e) => setAlertSettings({ ...alertSettings, haltTime: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>10 min</span>
              <span className="font-semibold text-primary-600">{alertSettings.haltTime} min</span>
              <span>60 min</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Speed Limit Alert (km/h)
            </label>
            <input
              type="range"
              min="40"
              max="120"
              step="10"
              value={alertSettings.speedLimit}
              onChange={(e) => setAlertSettings({ ...alertSettings, speedLimit: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>40 km/h</span>
              <span className="font-semibold text-primary-600">{alertSettings.speedLimit} km/h</span>
              <span>120 km/h</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Network Drop Threshold
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={alertSettings.networkDropThreshold}
              onChange={(e) => setAlertSettings({ ...alertSettings, networkDropThreshold: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>1 drop</span>
              <span className="font-semibold text-primary-600">{alertSettings.networkDropThreshold} drops</span>
              <span>10 drops</span>
            </div>
          </div>

          <Button variant="primary" onClick={handleSaveSettings}>
            <Save className="w-4 h-4 mr-2" />
            Save Alert Settings
          </Button>
        </div>
      </Card>

      {/* Geofence Management */}
      <Card
        title="Geofence Management"
        action={
          <Button variant="primary" size="sm" onClick={() => setGeofenceModal(true)}>
            <Plus className="w-4 h-4 mr-1" />
            Add Geofence
          </Button>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {geofences.map((geo) => (
                <tr key={geo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{geo.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="primary">{geo.type}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{geo.createdDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={geo.alertEnabled ? 'success' : 'default'}>
                      {geo.alertEnabled ? 'Active' : 'Inactive'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteGeofence(geo.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Officer Management */}
      <Card
        title="Officer Accounts"
        action={
          <Button variant="primary" size="sm" onClick={() => setOfficerModal(true)}>
            <Plus className="w-4 h-4 mr-1" />
            Add Officer
          </Button>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Station</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {officers.map((officer) => (
                <tr key={officer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{officer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{officer.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{officer.station}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{officer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={
                      officer.status === 'On Duty' ? 'success' :
                      officer.status === 'Available' ? 'primary' : 'default'
                    }>
                      {officer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add Geofence Modal */}
      <Modal
        isOpen={geofenceModal}
        onClose={() => setGeofenceModal(false)}
        title="Add New Geofence"
        size="md"
      >
        <Input
          label="Geofence Name"
          value={newGeofence.name}
          onChange={(e) => setNewGeofence({ ...newGeofence, name: e.target.value })}
          placeholder="e.g., Kaziranga National Park"
        />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            value={newGeofence.type}
            onChange={(e) => setNewGeofence({ ...newGeofence, type: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="Wildlife">Wildlife</option>
            <option value="Flood">Flood</option>
            <option value="Network">Network</option>
            <option value="Crime">Crime</option>
            <option value="Accident">Accident</option>
            <option value="Landslide">Landslide</option>
          </select>
        </div>
        <div className="flex space-x-3">
          <Button variant="primary" onClick={handleAddGeofence} className="flex-1">
            Add Geofence
          </Button>
          <Button variant="secondary" onClick={() => setGeofenceModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Add Officer Modal */}
      <Modal
        isOpen={officerModal}
        onClose={() => setOfficerModal(false)}
        title="Add New Officer"
        size="md"
      >
        <Input label="Full Name" placeholder="Enter officer name" />
        <Input label="Phone Number" placeholder="+91-XXXXXXXXXX" />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Constable</option>
            <option>Sub-Inspector</option>
            <option>Inspector</option>
            <option>Superintendent</option>
          </select>
        </div>
        <div className="flex space-x-3">
          <Button variant="primary" onClick={() => {
            alert('Officer added successfully!');
            setOfficerModal(false);
          }} className="flex-1">
            Add Officer
          </Button>
          <Button variant="secondary" onClick={() => setOfficerModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
