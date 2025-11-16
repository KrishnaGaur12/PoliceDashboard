import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Users, 
  MapPin, 
  Map, 
  Building2,
  FileText,
  Settings,
  MessageSquare,
  Car
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/sos', icon: AlertTriangle, label: 'SOS Management' },
    { path: '/tourists', icon: Users, label: 'Tourists' },
    { path: '/trips', icon: MapPin, label: 'Live Trips' },
    { path: '/risk-map', icon: Map, label: 'Risk Map' },
    { path: '/stations', icon: Building2, label: 'Stations' },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/chat', icon: MessageSquare, label: 'Chat' },
    { path: '/vehicles', icon: Car, label: 'Vehicles' },
  ];

  // Only show Settings for Station Admin
  if (user?.role === 'Station Admin') {
    menuItems.push({ path: '/settings', icon: Settings, label: 'Settings' });
  }

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-1">Police Portal</h1>
        <p className="text-gray-400 text-sm">Tourist Safety System</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
                isActive ? 'bg-gray-800 text-white border-l-4 border-primary-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-800">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
