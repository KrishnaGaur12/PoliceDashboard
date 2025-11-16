import React, { useState } from 'react';
import { Card, Badge, Input, Table } from '../components/UI';
import { Search, User, Phone, Mail, Globe, Award } from 'lucide-react';
import { mockTourists } from '../data/tourists';
import { mockTrips } from '../data/trips';

const Tourists = () => {
  const [tourists] = useState(mockTourists);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTourist, setSelectedTourist] = useState(null);

  const filteredTourists = tourists.filter(tourist =>
    tourist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tourist.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tourist.phone.includes(searchQuery)
  );

  const columns = [
    {
      key: 'photo',
      label: 'Photo',
      render: (row) => (
        <img src={row.photo} alt={row.name} className="w-10 h-10 rounded-full" />
      ),
    },
    {
      key: 'id',
      label: 'Tourist ID',
      render: (row) => <span className="font-mono text-sm">{row.id}</span>,
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'nationality',
      label: 'Nationality',
    },
    {
      key: 'phone',
      label: 'Phone',
    },
    {
      key: 'currentTrip',
      label: 'Current Trip',
      render: (row) => row.currentTrip ? (
        <Badge variant="primary">{row.currentTrip}</Badge>
      ) : (
        <span className="text-gray-400 text-sm">No active trip</span>
      ),
    },
    {
      key: 'safetyScore',
      label: 'Safety Score',
      render: (row) => (
        <div className="flex items-center">
          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${row.safetyScore}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{row.safetyScore}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Tourist Identity & Verification</h1>
        <Badge variant="primary" className="text-base px-4 py-2">
          {tourists.length} Total Tourists
        </Badge>
      </div>

      {/* Search */}
      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, ID, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </Card>

      {/* Tourist List */}
      <Card title={`Registered Tourists (${filteredTourists.length})`}>
        <Table
          columns={columns}
          data={filteredTourists}
          onRowClick={(tourist) => setSelectedTourist(tourist)}
        />
      </Card>

      {/* Tourist Profile Drawer */}
      {selectedTourist && (
        <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[500px] bg-white shadow-2xl z-40 overflow-y-auto border-l border-gray-200">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Tourist Profile</h2>
              <button
                onClick={() => setSelectedTourist(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Profile Photo & Basic Info */}
            <div className="text-center">
              <img
                src={selectedTourist.photo}
                alt={selectedTourist.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-100"
              />
              <h3 className="text-xl font-bold text-gray-900">{selectedTourist.name}</h3>
              <p className="text-sm text-gray-600">{selectedTourist.id}</p>
              <div className="flex justify-center gap-2 mt-3">
                {selectedTourist.badges.map((badge, idx) => (
                  <Badge key={idx} variant="primary">{badge}</Badge>
                ))}
              </div>
            </div>

            {/* Safety Score */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Safety Score</span>
                <span className="text-2xl font-bold text-green-600">{selectedTourist.safetyScore}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all"
                  style={{ width: `${selectedTourist.safetyScore}%` }}
                ></div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900">{selectedTourist.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900">{selectedTourist.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900">{selectedTourist.nationality}</span>
                </div>
              </div>
            </div>

            {/* Digital Identity */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Digital Identity</h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">DID</p>
                <p className="text-sm font-mono text-gray-900 break-all">{selectedTourist.did}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {selectedTourist.aadhaarMasked && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Aadhaar</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTourist.aadhaarMasked}</p>
                  </div>
                )}
                {selectedTourist.passportMasked && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Passport</p>
                    <p className="text-sm font-mono text-gray-900">{selectedTourist.passportMasked}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Current Trip */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Current Trip Status</h3>
              {selectedTourist.currentTrip ? (
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-900">{selectedTourist.currentTrip}</p>
                  <p className="text-xs text-blue-700 mt-1">Active trip in progress</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No active trip</p>
              )}
            </div>

            {/* Trip History */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Trip History</h3>
              <div className="space-y-2">
                {selectedTourist.tripHistory.map((tripId, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-sm font-mono text-gray-900">{tripId}</span>
                    <Badge variant="success">Completed</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Date */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Registered Since</h3>
              <p className="text-sm text-gray-900">{new Date(selectedTourist.registeredDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tourists;
