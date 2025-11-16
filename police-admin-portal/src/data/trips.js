export const mockTrips = [
  {
    id: 'TRIP-001',
    touristName: 'John Doe',
    touristId: 'T-12345',
    origin: 'Guwahati',
    destination: 'Kaziranga',
    currentLocation: 'Near Kaziranga National Park',
    coordinates: { lat: 26.5775, lng: 93.1711 },
    status: 'Alert',
    speed: 0,
    eta: '2 hours',
    startTime: new Date(Date.now() - 180 * 60000).toISOString(),
    distance: '45 km remaining',
    networkStatus: 'Connected',
    networkDrops: 0,
    badges: ['SOS Active', 'Route OK'],
    safetyScore: 65
  },
  {
    id: 'TRIP-002',
    touristName: 'Sarah Johnson',
    touristId: 'T-12346',
    origin: 'Shillong',
    destination: 'Mawsynram',
    currentLocation: 'Mawsynram Village',
    coordinates: { lat: 25.2972, lng: 91.5831 },
    status: 'Halted',
    speed: 0,
    eta: '30 min',
    startTime: new Date(Date.now() - 90 * 60000).toISOString(),
    distance: '12 km remaining',
    networkStatus: 'Weak',
    networkDrops: 3,
    badges: ['Silent SOS', 'Network Issues', 'Dark Zone'],
    safetyScore: 45
  },
  {
    id: 'TRIP-003',
    touristName: 'Michael Chen',
    touristId: 'T-12347',
    origin: 'Shillong',
    destination: 'Cherrapunji',
    currentLocation: 'NH-44',
    coordinates: { lat: 25.5788, lng: 91.8933 },
    status: 'Halted',
    speed: 0,
    eta: '1.5 hours',
    startTime: new Date(Date.now() - 120 * 60000).toISOString(),
    distance: '28 km remaining',
    networkStatus: 'Connected',
    networkDrops: 1,
    badges: ['Long Halt'],
    safetyScore: 70
  },
  {
    id: 'TRIP-004',
    touristName: 'Emma Wilson',
    touristId: 'T-12348',
    origin: 'Guwahati',
    destination: 'Cherrapunji',
    currentLocation: 'Unknown (Last: Cherrapunji)',
    coordinates: { lat: 25.2631, lng: 91.7143 },
    status: 'Missing',
    speed: 0,
    eta: 'N/A',
    startTime: new Date(Date.now() - 300 * 60000).toISOString(),
    distance: 'Unknown',
    networkStatus: 'Disconnected',
    networkDrops: 15,
    badges: ['Missing', 'Network Lost'],
    safetyScore: 20
  },
  {
    id: 'TRIP-005',
    touristName: 'David Brown',
    touristId: 'T-12349',
    origin: 'Jorhat',
    destination: 'Majuli Island',
    currentLocation: 'Crossing Brahmaputra',
    coordinates: { lat: 26.9506, lng: 94.2172 },
    status: 'On Route',
    speed: 35,
    eta: '45 min',
    startTime: new Date(Date.now() - 60 * 60000).toISOString(),
    distance: '18 km remaining',
    networkStatus: 'Connected',
    networkDrops: 0,
    badges: ['Route OK'],
    safetyScore: 95
  },
  {
    id: 'TRIP-006',
    touristName: 'Lisa Anderson',
    touristId: 'T-12350',
    origin: 'Tezpur',
    destination: 'Nameri National Park',
    currentLocation: 'Nameri',
    coordinates: { lat: 26.9124, lng: 92.8339 },
    status: 'Deviated',
    speed: 25,
    eta: '20 min',
    startTime: new Date(Date.now() - 150 * 60000).toISOString(),
    distance: '8 km remaining',
    networkStatus: 'Connected',
    networkDrops: 0,
    badges: ['Route Deviation', 'Wildlife Zone'],
    safetyScore: 60
  },
  {
    id: 'TRIP-007',
    touristName: 'Robert Taylor',
    touristId: 'T-12351',
    origin: 'Dibrugarh',
    destination: 'Dibru-Saikhowa National Park',
    currentLocation: 'Approaching Park',
    coordinates: { lat: 27.5833, lng: 95.1833 },
    status: 'On Route',
    speed: 40,
    eta: '15 min',
    startTime: new Date(Date.now() - 45 * 60000).toISOString(),
    distance: '5 km remaining',
    networkStatus: 'Connected',
    networkDrops: 0,
    badges: ['Route OK'],
    safetyScore: 92
  },
  {
    id: 'TRIP-008',
    touristName: 'Maria Garcia',
    touristId: 'T-12352',
    origin: 'Silchar',
    destination: 'Bhuban Hills',
    currentLocation: 'Mountain Road',
    coordinates: { lat: 24.8170, lng: 92.7980 },
    status: 'On Route',
    speed: 20,
    eta: '1 hour',
    startTime: new Date(Date.now() - 90 * 60000).toISOString(),
    distance: '22 km remaining',
    networkStatus: 'Weak',
    networkDrops: 5,
    badges: ['Dark Zone Entry'],
    safetyScore: 75
  }
];

export const getTripStatusColor = (status) => {
  switch (status) {
    case 'On Route': return 'text-green-600 bg-green-100';
    case 'Halted': return 'text-yellow-600 bg-yellow-100';
    case 'Deviated': return 'text-orange-600 bg-orange-100';
    case 'Alert': return 'text-red-600 bg-red-100';
    case 'Missing': return 'text-red-700 bg-red-200';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export const getNetworkStatusColor = (status) => {
  switch (status) {
    case 'Connected': return 'text-green-600';
    case 'Weak': return 'text-yellow-600';
    case 'Disconnected': return 'text-red-600';
    default: return 'text-gray-600';
  }
};
