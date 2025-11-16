import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  AlertTriangle,
  Route,
  Users,
  Map,
  Building2,
  BarChart3,
  Settings as SettingsIcon,
  MessageSquare,
  Car,
  Shield
} from 'lucide-react';

export default function Sidebar({ open, setOpen }) {
  const { user } = useAuth();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['all'] },
    { name: 'SOS Alerts', path: '/sos', icon: AlertTriangle, roles: ['all'] },
    { name: 'Live Trips', path: '/trips', icon: Route, roles: ['all'] },
    { name: 'Tourists', path: '/tourists', icon: Users, roles: ['all'] },
    { name: 'Risk Map', path: '/risk-map', icon: Map, roles: ['all'] },
    { name: 'Stations', path: '/stations', icon: Building2, roles: ['all'] },
    { name: 'Vehicles', path: '/vehicles', icon: Car, roles: ['all'] },
    { name: 'Chat', path: '/chat', icon: MessageSquare, roles: ['all'] },
    { name: 'Reports', path: '/reports', icon: BarChart3, roles: ['all'] },
    { name: 'Settings', path: '/settings', icon: SettingsIcon, roles: ['Station Admin'] },
  ];

  const visibleMenuItems = menuItems.filter(item => 
    item.roles.includes('all') || item.roles.includes(user?.role)
  );

  if (!open) {
    return (
      <div className="w-20 bg-gray-900 text-white flex flex-col items-center py-4">
        <div className="mb-8">
          <Shield className="w-8 h-8" />
        </div>
        {visibleMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `p-3 rounded-lg mb-2 transition-colors ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
              }`
            }
            title={item.name}
          >
            <item.icon className="w-6 h-6" />
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-lg font-bold">Police Portal</h1>
            <p className="text-xs text-gray-400">Tourist Safety</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        {visibleMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{user?.name}</p>
            <p className="text-xs text-gray-400 truncate">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
