export const mockStations = [
  {
    id: 'ST-001',
    name: 'Central Station',
    city: 'Guwahati',
    state: 'Assam',
    coordinates: { lat: 26.1445, lng: 91.7362 },
    phone: '+91-361-2345678',
    officers: 25,
    activeAlerts: 3,
    status: 'Active',
    chiefOfficer: 'Inspector Rajesh Kumar'
  },
  {
    id: 'ST-002',
    name: 'North Station',
    city: 'Shillong',
    state: 'Meghalaya',
    coordinates: { lat: 25.5788, lng: 91.8933 },
    phone: '+91-364-2234567',
    officers: 18,
    activeAlerts: 2,
    status: 'Active',
    chiefOfficer: 'Inspector Priya Sharma'
  },
  {
    id: 'ST-003',
    name: 'East Station',
    city: 'Jorhat',
    state: 'Assam',
    coordinates: { lat: 26.7509, lng: 94.2037 },
    phone: '+91-376-2123456',
    officers: 15,
    activeAlerts: 1,
    status: 'Active',
    chiefOfficer: 'Inspector Amit Patel'
  },
  {
    id: 'ST-004',
    name: 'South Station',
    city: 'Silchar',
    state: 'Assam',
    coordinates: { lat: 24.8333, lng: 92.7789 },
    phone: '+91-384-2345789',
    officers: 12,
    activeAlerts: 0,
    status: 'Active',
    chiefOfficer: 'Inspector Ravi Singh'
  },
  {
    id: 'ST-005',
    name: 'Wildlife Zone Station',
    city: 'Kaziranga',
    state: 'Assam',
    coordinates: { lat: 26.5775, lng: 93.1711 },
    phone: '+91-377-2567890',
    officers: 20,
    activeAlerts: 4,
    status: 'Active',
    chiefOfficer: 'Inspector Deepak Bora'
  }
];

export const mockOfficers = [
  {
    id: 'OFF-001',
    name: 'Rajesh Kumar',
    role: 'Station Admin',
    station: 'ST-001',
    phone: '+91-9876501234',
    email: 'rajesh.kumar@police.gov.in',
    status: 'On Duty',
    assignedAlerts: 2
  },
  {
    id: 'OFF-002',
    name: 'Priya Sharma',
    role: 'Inspector',
    station: 'ST-002',
    phone: '+91-9876502345',
    email: 'priya.sharma@police.gov.in',
    status: 'On Duty',
    assignedAlerts: 1
  },
  {
    id: 'OFF-003',
    name: 'Amit Patel',
    role: 'Operator',
    station: 'ST-001',
    phone: '+91-9876503456',
    email: 'amit.patel@police.gov.in',
    status: 'On Duty',
    assignedAlerts: 0
  },
  {
    id: 'OFF-004',
    name: 'Ravi Singh',
    role: 'Inspector',
    station: 'ST-004',
    phone: '+91-9876504567',
    email: 'ravi.singh@police.gov.in',
    status: 'Off Duty',
    assignedAlerts: 0
  },
  {
    id: 'OFF-005',
    name: 'Deepak Bora',
    role: 'Inspector',
    station: 'ST-005',
    phone: '+91-9876505678',
    email: 'deepak.bora@police.gov.in',
    status: 'On Duty',
    assignedAlerts: 3
  }
];

export const mockVehicles = [
  {
    id: 'VEH-001',
    number: 'AS-01-PC-1234',
    type: 'Patrol Car',
    station: 'ST-001',
    driver: 'Officer Kumar',
    status: 'Active',
    location: 'Guwahati Central',
    coordinates: { lat: 26.1445, lng: 91.7362 },
    eta: '12 min'
  },
  {
    id: 'VEH-002',
    number: 'ML-05-PC-5678',
    type: 'Patrol Car',
    station: 'ST-002',
    driver: 'Officer Sharma',
    status: 'En Route',
    location: 'NH-44',
    coordinates: { lat: 25.5788, lng: 91.8933 },
    eta: '8 min'
  },
  {
    id: 'VEH-003',
    number: 'AS-07-PC-9012',
    type: 'Emergency Van',
    station: 'ST-005',
    driver: 'Officer Bora',
    status: 'Active',
    location: 'Near Kaziranga',
    coordinates: { lat: 26.5775, lng: 93.1711 },
    eta: '5 min'
  }
];
