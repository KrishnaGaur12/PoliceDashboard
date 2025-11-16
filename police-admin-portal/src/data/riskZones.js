export const mockRiskZones = [
  {
    id: 'RZ-001',
    name: 'Kaziranga Wildlife Corridor',
    type: 'Wildlife',
    riskLevel: 'High',
    coordinates: [
      { lat: 26.5775, lng: 93.1711 },
      { lat: 26.5875, lng: 93.1811 },
      { lat: 26.5975, lng: 93.1611 },
      { lat: 26.5775, lng: 93.1511 }
    ],
    center: { lat: 26.5775, lng: 93.1711 },
    incidents: 12,
    lastUpdate: '2025-11-15',
    description: 'High elephant activity area'
  },
  {
    id: 'RZ-002',
    name: 'Mawsynram Landslide Zone',
    type: 'Landslide',
    riskLevel: 'Critical',
    coordinates: [
      { lat: 25.2972, lng: 91.5831 },
      { lat: 25.3072, lng: 91.5931 },
      { lat: 25.3172, lng: 91.5731 },
      { lat: 25.2972, lng: 91.5631 }
    ],
    center: { lat: 25.2972, lng: 91.5831 },
    incidents: 8,
    lastUpdate: '2025-11-16',
    description: 'Recent heavy rainfall, unstable slopes'
  },
  {
    id: 'RZ-003',
    name: 'NH-44 Crime Hotspot',
    type: 'Crime',
    riskLevel: 'Medium',
    coordinates: [
      { lat: 25.5788, lng: 91.8933 },
      { lat: 25.5888, lng: 91.9033 },
      { lat: 25.5988, lng: 91.8833 },
      { lat: 25.5788, lng: 91.8733 }
    ],
    center: { lat: 25.5788, lng: 91.8933 },
    incidents: 5,
    lastUpdate: '2025-11-14',
    description: 'Reported theft incidents'
  },
  {
    id: 'RZ-004',
    name: 'Brahmaputra Flood Zone',
    type: 'Flood',
    riskLevel: 'High',
    coordinates: [
      { lat: 26.1445, lng: 91.7362 },
      { lat: 26.1545, lng: 91.7462 },
      { lat: 26.1645, lng: 91.7262 },
      { lat: 26.1445, lng: 91.7162 }
    ],
    center: { lat: 26.1445, lng: 91.7362 },
    incidents: 15,
    lastUpdate: '2025-11-15',
    description: 'Seasonal flooding risk'
  },
  {
    id: 'RZ-005',
    name: 'Cherrapunji Network Dead Zone',
    type: 'Network',
    riskLevel: 'Medium',
    coordinates: [
      { lat: 25.2631, lng: 91.7143 },
      { lat: 25.2731, lng: 91.7243 },
      { lat: 25.2831, lng: 91.7043 },
      { lat: 25.2631, lng: 91.6943 }
    ],
    center: { lat: 25.2631, lng: 91.7143 },
    incidents: 20,
    lastUpdate: '2025-11-16',
    description: 'Poor cellular coverage'
  },
  {
    id: 'RZ-006',
    name: 'Nameri Accident Prone Zone',
    type: 'Accident',
    riskLevel: 'High',
    coordinates: [
      { lat: 26.9124, lng: 92.8339 },
      { lat: 26.9224, lng: 92.8439 },
      { lat: 26.9324, lng: 92.8239 },
      { lat: 26.9124, lng: 92.8139 }
    ],
    center: { lat: 26.9124, lng: 92.8339 },
    incidents: 18,
    lastUpdate: '2025-11-13',
    description: 'Sharp curves and poor visibility'
  }
];

export const riskLayers = [
  { id: 'crime', name: 'Crime', color: '#ef4444', enabled: true },
  { id: 'accident', name: 'Accident', color: '#f97316', enabled: true },
  { id: 'wildlife', name: 'Wildlife', color: '#10b981', enabled: true },
  { id: 'flood', name: 'Flood', color: '#3b82f6', enabled: true },
  { id: 'landslide', name: 'Landslide', color: '#a855f7', enabled: true },
  { id: 'network', name: 'Network', color: '#6b7280', enabled: true }
];

export const getRiskLevelColor = (level) => {
  switch (level) {
    case 'Critical': return '#dc2626';
    case 'High': return '#f59e0b';
    case 'Medium': return '#eab308';
    case 'Low': return '#10b981';
    default: return '#6b7280';
  }
};
