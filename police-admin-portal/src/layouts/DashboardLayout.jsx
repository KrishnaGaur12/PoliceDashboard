import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Topbar from '../components/common/Topbar';
import NotificationPanel from '../components/common/NotificationPanel';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          toggleNotifications={() => setNotificationPanelOpen(!notificationPanelOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

      <NotificationPanel 
        open={notificationPanelOpen} 
        onClose={() => setNotificationPanelOpen(false)} 
      />
    </div>
  );
}
