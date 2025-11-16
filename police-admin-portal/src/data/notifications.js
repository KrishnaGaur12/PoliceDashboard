export const mockNotifications = [
  {
    id: 'N-001',
    type: 'sos',
    severity: 'critical',
    title: 'New SOS Alert',
    message: 'Silent SOS triggered by Sarah Johnson in Mawsynram',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    read: false,
    link: '/sos/SOS-002'
  },
  {
    id: 'N-002',
    type: 'trip',
    severity: 'high',
    title: 'Route Deviation',
    message: 'Lisa Anderson deviated from planned route',
    timestamp: new Date(Date.now() - 12 * 60000).toISOString(),
    read: false,
    link: '/trips'
  },
  {
    id: 'N-003',
    type: 'weather',
    severity: 'medium',
    title: 'Weather Alert',
    message: 'Heavy rainfall warning for Cherrapunji region',
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    read: false,
    link: '/dashboard'
  },
  {
    id: 'N-004',
    type: 'missing',
    severity: 'critical',
    title: 'Tourist Missing',
    message: 'Emma Wilson not responding for 2 hours',
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    read: true,
    link: '/sos/SOS-004'
  },
  {
    id: 'N-005',
    type: 'network',
    severity: 'low',
    title: 'Network Restored',
    message: 'Connection re-established with Michael Chen',
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    read: true,
    link: '/trips'
  },
  {
    id: 'N-006',
    type: 'risk',
    severity: 'high',
    title: 'High-Risk Entry',
    message: 'Tourist entered wildlife corridor without permit',
    timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    read: true,
    link: '/risk-map'
  }
];

export const getSeverityConfig = (severity) => {
  switch (severity) {
    case 'critical':
      return { color: 'text-red-600', bg: 'bg-red-50', icon: '🚨' };
    case 'high':
      return { color: 'text-orange-600', bg: 'bg-orange-50', icon: '⚠️' };
    case 'medium':
      return { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: '⚡' };
    case 'low':
      return { color: 'text-blue-600', bg: 'bg-blue-50', icon: 'ℹ️' };
    default:
      return { color: 'text-gray-600', bg: 'bg-gray-50', icon: '📢' };
  }
};
