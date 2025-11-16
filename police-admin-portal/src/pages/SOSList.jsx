import React, { useState } from 'react';
import { mockSOSAlerts, getSeverityColor, getStatusColor } from '../data/sos';
import { AlertTriangle, Phone, MapPin, User, FileText, X } from 'lucide-react';

export default function SOSList() {
  const [alerts, setAlerts] = useState(mockSOSAlerts);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredAlerts = alerts.filter(alert => {
    if (filter !== 'all' && alert.status !== filter) return false;
    if (typeFilter !== 'all' && alert.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          SOS Incident Management
        </h1>
      </div>

      {/* Filters */}
      <div className="card flex gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input mt-1">
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Assigned">Assigned</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Type</label>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input mt-1">
            <option value="all">All Types</option>
            <option value="Panic">Panic</option>
            <option value="Silent">Silent</option>
            <option value="Missing">Missing</option>
            <option value="Long Stop">Long Stop</option>
            <option value="High-Risk Entry">High-Risk Entry</option>
          </select>
        </div>
      </div>

      {/* SOS List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left">
                <th className="pb-3 font-semibold">SOS ID</th>
                <th className="pb-3 font-semibold">Type</th>
                <th className="pb-3 font-semibold">Tourist</th>
                <th className="pb-3 font-semibold">Location</th>
                <th className="pb-3 font-semibold">Risk Level</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Time</th>
                <th className="pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredAlerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50">
                  <td className="py-3 font-medium text-blue-600">{alert.id}</td>
                  <td className="py-3">{alert.type}</td>
                  <td className="py-3">{alert.touristName}</td>
                  <td className="py-3 text-sm text-gray-600">{alert.location}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(alert.riskLevel)}`}>
                      {alert.riskLevel}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm">{alert.timeSince}</td>
                  <td className="py-3">
                    <button onClick={() => setSelectedAlert(alert)} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Drawer */}
      {selectedAlert && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSelectedAlert(null)} />
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">SOS Details</h2>
                <button onClick={() => setSelectedAlert(null)} className="p-2 hover:bg-gray-100 rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className={`p-4 rounded-lg ${getSeverityColor(selectedAlert.riskLevel)}`}>
                <p className="font-medium mb-1">{selectedAlert.type} Alert</p>
                <p className="text-sm">{selectedAlert.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Tourist</label>
                  <p className="font-medium">{selectedAlert.touristName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="font-medium">{selectedAlert.phone}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Location</label>
                  <p className="font-medium">{selectedAlert.location}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Risk Level</label>
                  <p className="font-medium">{selectedAlert.riskLevel}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Tourist
                </button>
                <button className="w-full btn-secondary flex items-center justify-center gap-2">
                  <User className="w-4 h-4" />
                  Assign Officer
                </button>
                <button className="w-full btn-secondary flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Navigate in Maps
                </button>
                <button className="w-full btn-primary bg-green-600 hover:bg-green-700">
                  Mark Resolved
                </button>
              </div>

              {selectedAlert.resolutionNotes && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-900 mb-1">Resolution Notes</p>
                  <p className="text-sm text-green-700">{selectedAlert.resolutionNotes}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
