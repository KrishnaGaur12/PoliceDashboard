export const mockSOSAlerts = [
  {
    id: 'SOS-001',
    type: 'Panic',
    touristName: 'John Doe',
    touristId: 'T-12345',
    phone: '+91-9876543210',
    riskLevel: 'High',
    status: 'Active',
    timestamp: new Date(Date.now() - 3 * 60000).toISOString(),
    timeSince: '3 min ago',
    location: 'Near Kaziranga National Park, Assam',
    coordinates: { lat: 26.5775, lng: 93.1711 },
    tripId: 'TRIP-001',
    description: 'Tourist reported suspicious activity in remote area',
    assignedOfficer: null
  },
  {
    id: 'SOS-002',
    type: 'Silent',
    touristName: 'Sarah Johnson',
    touristId: 'T-12346',
    phone: '+91-9876543211',
    riskLevel: 'Critical',
    status: 'Assigned',
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    timeSince: '15 min ago',
    location: 'Mawsynram, Meghalaya',
    coordinates: { lat: 25.2972, lng: 91.5831 },
    tripId: 'TRIP-002',
    description: 'Silent SOS triggered in high-risk zone',
    assignedOfficer: 'Officer Sharma'
  },
  {
    id: 'SOS-003',
    type: 'Long Stop',
    touristName: 'Michael Chen',
    touristId: 'T-12347',
    phone: '+91-9876543212',
    riskLevel: 'Medium',
    status: 'Active',
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    timeSince: '45 min ago',
    location: 'NH-44, Near Shillong',
    coordinates: { lat: 25.5788, lng: 91.8933 },
    tripId: 'TRIP-003',
    description: 'Vehicle stopped for over 30 minutes in remote area',
    assignedOfficer: null
  },
  {
    id: 'SOS-004',
    type: 'Missing',
    touristName: 'Emma Wilson',
    touristId: 'T-12348',
    phone: '+91-9876543213',
    riskLevel: 'Critical',
    status: 'Active',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    timeSince: '2 hours ago',
    location: 'Last seen: Cherrapunji',
    coordinates: { lat: 25.2631, lng: 91.7143 },
    tripId: 'TRIP-004',
    description: 'No response for 2 hours, last location tracked',
    assignedOfficer: 'Officer Kumar'
  },
  {
    id: 'SOS-005',
    type: 'High-Risk Entry',
    touristName: 'David Brown',
    touristId: 'T-12349',
    phone: '+91-9876543214',
    riskLevel: 'High',
    status: 'Resolved',
    timestamp: new Date(Date.now() - 240 * 60000).toISOString(),
    timeSince: '4 hours ago',
    location: 'Wildlife Corridor, Assam',
    coordinates: { lat: 26.4073, lng: 92.8729 },
    tripId: 'TRIP-005',
    description: 'Entered wildlife danger zone without permit',
    assignedOfficer: 'Officer Patel',
    resolutionNotes: 'Tourist safely escorted out of danger zone'
  }
];

export const getSeverityColor = (level) => {
  switch (level) {
    case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
    case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
    case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Low': return 'text-green-600 bg-green-50 border-green-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return 'text-red-600 bg-red-100';
    case 'Assigned': return 'text-blue-600 bg-blue-100';
    case 'Resolved': return 'text-green-600 bg-green-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};
