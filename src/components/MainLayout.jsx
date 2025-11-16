import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import NotificationPanel from './NotificationPanel';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="mt-16 p-6 overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
          <Outlet />
        </main>
      </div>
      <NotificationPanel />
    </div>
  );
};

export default MainLayout;
