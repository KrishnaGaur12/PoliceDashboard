import React, { useState } from 'react';
import { Card, Badge, Button, Modal, Input, Select, Textarea, Table } from '../components/UI';
import { AlertTriangle, Phone, MapPin, User, Clock, CheckCircle } from 'lucide-react';
import { mockSOSAlerts } from '../data/sos';
import { mockOfficers } from '../data/stations';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const SOSManagement = () => {
  const [sosAlerts, setSOSAlerts] = useState(mockSOSAlerts);
  const [selectedSOS, setSelectedSOS] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [assignModal, setAssignModal] = useState(false);
  const [resolveModal, setResolveModal] = useState(false);
  const [selectedOfficer, setSelectedOfficer] = useState('');
  const [resolutionNotes, setResolutionNotes] = useState('');

  const filteredAlerts = sosAlerts.filter(sos => {
    const typeMatch = filterType === 'All' || sos.type === filterType;
    const statusMatch = filterStatus === 'All' || sos.status === filterStatus;
    return typeMatch && statusMatch;
  });

  const handleAssignOfficer = () => {
    if (selectedSOS && selectedOfficer) {
      setSOSAlerts(prev =>
        prev.map(sos =>
          sos.id === selectedSOS.id
            ? { ...sos, assignedOfficer: selectedOfficer, status: 'Assigned' }
            : sos
        )
      );
      setAssignModal(false);
      setSelectedOfficer('');
      alert('Officer assigned successfully');
    }
  };

  const handleResolve = () => {
    if (selectedSOS && resolutionNotes) {
      setSOSAlerts(prev =>
        prev.map(sos =>
          sos.id === selectedSOS.id
            ? { ...sos, status: 'Resolved', notes: resolutionNotes }
            : sos
        )
      );
      setResolveModal(false);
      setResolutionNotes('');
      setSelectedSOS(null);
      alert('SOS marked as resolved');
    }
  };

  const columns = [
    {
      key: 'id',
      label: 'SOS ID',
      render: (row) => <span className="font-mono text-sm">{row.id}</span>,
    },
    {
      key: 'type',
      label: 'Type',
      render: (row) => <Badge variant="danger">{row.type}</Badge>,
    },
    {
      key: 'touristName',
      label: 'Tourist',
    },
    {
      key: 'location',
      label: 'Location',
    },
    {
      key: 'riskLevel',
      label: 'Risk',
      render: (row) => <Badge variant={row.riskLevel.toLowerCase()}>{row.riskLevel}</Badge>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => {
        const variant = row.status === 'Active' ? 'warning' : row.status === 'Resolved' ? 'success' : 'primary';
        return <Badge variant={variant}>{row.status}</Badge>;
      },
    },
    {
      key: 'timeSince',
      label: 'Time',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">SOS Incident Management</h1>
        <div className="flex items-center space-x-2">
          <Badge variant="danger" className="text-base px-4 py-2">
            {sosAlerts.filter(s => s.status === 'Active').length} Active Alerts
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Select
              label="Filter by Type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              options={[
                { value: 'All', label: 'All Types' },
                { value: 'Panic', label: 'Panic' },
                { value: 'Silent', label: 'Silent' },
                { value: 'Missing', label: 'Missing' },
                { value: 'Long Stop', label: 'Long Stop' },
                { value: 'High-Risk Entry', label: 'High-Risk Entry' },
              ]}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Select
              label="Filter by Status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              options={[
                { value: 'All', label: 'All Status' },
                { value: 'Active', label: 'Active' },
                { value: 'Assigned', label: 'Assigned' },
                { value: 'Resolved', label: 'Resolved' },
              ]}
            />
          </div>
        </div>
      </Card>

      {/* SOS List */}
      <Card title={`SOS Alerts (${filteredAlerts.length})`}>
        <Table
          columns={columns}
          data={filteredAlerts}
          onRowClick={(sos) => setSelectedSOS(sos)}
        />
      </Card>

      {/* SOS Detail Drawer */}
      {selectedSOS && (
        <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[500px] bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-200">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">SOS Details</h2>
              <button
                onClick={() => setSelectedSOS(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={selectedSOS.riskLevel.toLowerCase()} className="text-sm">
                {selectedSOS.riskLevel}
              </Badge>
              <Badge variant="danger">{selectedSOS.type}</Badge>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Tourist Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tourist Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{selectedSOS.touristName}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{selectedSOS.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{selectedSOS.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{selectedSOS.timeSince}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Location</h3>
              <div className="h-48 rounded-lg overflow-hidden border border-gray-200">
                <MapContainer
                  center={[selectedSOS.coordinates.lat, selectedSOS.coordinates.lng]}
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[selectedSOS.coordinates.lat, selectedSOS.coordinates.lng]}>
                    <Popup>{selectedSOS.location}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Emergency Type */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Emergency Type</h3>
              <p className="text-sm text-gray-900">{selectedSOS.emergencyType}</p>
            </div>

            {/* Assigned Officer */}
            {selectedSOS.assignedOfficer && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Assigned Officer</h3>
                <p className="text-sm text-gray-900">{selectedSOS.assignedOfficer}</p>
              </div>
            )}

            {/* Notes */}
            {selectedSOS.notes && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Notes</h3>
                <p className="text-sm text-gray-900">{selectedSOS.notes}</p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setAssignModal(true)}
                disabled={selectedSOS.status === 'Resolved'}
              >
                Assign Officer
              </Button>
              <Button
                variant="success"
                className="w-full"
                onClick={() => setResolveModal(true)}
                disabled={selectedSOS.status === 'Resolved'}
              >
                Mark as Resolved
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Tourist
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(`https://www.google.com/maps?q=${selectedSOS.coordinates.lat},${selectedSOS.coordinates.lng}`, '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Navigate in Maps
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Assign Officer Modal */}
      <Modal
        isOpen={assignModal}
        onClose={() => setAssignModal(false)}
        title="Assign Officer"
      >
        <Select
          label="Select Officer"
          value={selectedOfficer}
          onChange={(e) => setSelectedOfficer(e.target.value)}
          options={[
            { value: '', label: 'Choose an officer' },
            ...mockOfficers
              .filter(o => o.status === 'On Duty' || o.status === 'Available')
              .map(o => ({ value: o.name, label: `${o.name} (${o.role})` })),
          ]}
        />
        <div className="flex space-x-3 mt-4">
          <Button variant="primary" onClick={handleAssignOfficer} className="flex-1">
            Assign
          </Button>
          <Button variant="secondary" onClick={() => setAssignModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Resolve Modal */}
      <Modal
        isOpen={resolveModal}
        onClose={() => setResolveModal(false)}
        title="Resolve SOS"
      >
        <Textarea
          label="Resolution Notes"
          value={resolutionNotes}
          onChange={(e) => setResolutionNotes(e.target.value)}
          placeholder="Enter details about how the incident was resolved..."
        />
        <div className="flex space-x-3 mt-4">
          <Button variant="success" onClick={handleResolve} className="flex-1">
            Mark as Resolved
          </Button>
          <Button variant="secondary" onClick={() => setResolveModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SOSManagement;
