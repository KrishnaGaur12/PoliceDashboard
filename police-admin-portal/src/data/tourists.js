export const mockTourists = [
  {
    id: 'T-12345',
    name: 'John Doe',
    phone: '+91-9876543210',
    email: 'john.doe@email.com',
    nationality: 'USA',
    did: 'did:ethr:0x1234...abcd',
    aadhaar: 'XXXX-XXXX-3210',
    passport: 'US1234567',
    photo: 'https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff',
    currentTrip: 'TRIP-001',
    safetyScore: 65,
    badges: ['Verified', 'Active Trip'],
    registrationDate: '2025-11-10',
    trips: [
      { id: 'TRIP-001', destination: 'Kaziranga', date: '2025-11-16', status: 'Active' },
      { id: 'TRIP-010', destination: 'Shillong', date: '2025-11-12', status: 'Completed' }
    ]
  },
  {
    id: 'T-12346',
    name: 'Sarah Johnson',
    phone: '+91-9876543211',
    email: 'sarah.j@email.com',
    nationality: 'UK',
    did: 'did:ethr:0x5678...efgh',
    aadhaar: null,
    passport: 'UK9876543',
    photo: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=ef4444&color=fff',
    currentTrip: 'TRIP-002',
    safetyScore: 45,
    badges: ['Verified', 'SOS Active'],
    registrationDate: '2025-11-14',
    trips: [
      { id: 'TRIP-002', destination: 'Mawsynram', date: '2025-11-16', status: 'Active' }
    ]
  },
  {
    id: 'T-12347',
    name: 'Michael Chen',
    phone: '+91-9876543212',
    email: 'michael.c@email.com',
    nationality: 'Singapore',
    did: 'did:ethr:0x9012...ijkl',
    aadhaar: null,
    passport: 'SG5551234',
    photo: 'https://ui-avatars.com/api/?name=Michael+Chen&background=10b981&color=fff',
    currentTrip: 'TRIP-003',
    safetyScore: 70,
    badges: ['Verified', 'Active Trip'],
    registrationDate: '2025-11-15',
    trips: [
      { id: 'TRIP-003', destination: 'Cherrapunji', date: '2025-11-16', status: 'Active' }
    ]
  },
  {
    id: 'T-12348',
    name: 'Emma Wilson',
    phone: '+91-9876543213',
    email: 'emma.w@email.com',
    nationality: 'Australia',
    did: 'did:ethr:0x3456...mnop',
    aadhaar: null,
    passport: 'AU7778899',
    photo: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=f59e0b&color=fff',
    currentTrip: 'TRIP-004',
    safetyScore: 20,
    badges: ['Verified', 'Missing'],
    registrationDate: '2025-11-13',
    trips: [
      { id: 'TRIP-004', destination: 'Cherrapunji', date: '2025-11-16', status: 'Alert' }
    ]
  },
  {
    id: 'T-12349',
    name: 'David Brown',
    phone: '+91-9876543214',
    email: 'david.b@email.com',
    nationality: 'Canada',
    did: 'did:ethr:0x7890...qrst',
    aadhaar: null,
    passport: 'CA4445566',
    photo: 'https://ui-avatars.com/api/?name=David+Brown&background=8b5cf6&color=fff',
    currentTrip: 'TRIP-005',
    safetyScore: 95,
    badges: ['Verified', 'Safe Traveler'],
    registrationDate: '2025-11-11',
    trips: [
      { id: 'TRIP-005', destination: 'Majuli Island', date: '2025-11-16', status: 'Active' },
      { id: 'TRIP-011', destination: 'Kaziranga', date: '2025-11-13', status: 'Completed' },
      { id: 'TRIP-012', destination: 'Guwahati', date: '2025-11-11', status: 'Completed' }
    ]
  },
  {
    id: 'T-12350',
    name: 'Lisa Anderson',
    phone: '+91-9876543215',
    email: 'lisa.a@email.com',
    nationality: 'Germany',
    did: 'did:ethr:0x2345...uvwx',
    aadhaar: null,
    passport: 'DE1112233',
    photo: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=ec4899&color=fff',
    currentTrip: 'TRIP-006',
    safetyScore: 60,
    badges: ['Verified', 'Route Deviation'],
    registrationDate: '2025-11-15',
    trips: [
      { id: 'TRIP-006', destination: 'Nameri National Park', date: '2025-11-16', status: 'Active' }
    ]
  }
];
