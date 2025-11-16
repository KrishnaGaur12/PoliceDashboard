import React, { createContext, useContext, useState } from 'react';
import { mockNotifications } from '../data/notifications';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedSOS, setSelectedSOS] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedTourist, setSelectedTourist] = useState(null);

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getUnreadCount = () => {
    return notifications.filter((n) => !n.read).length;
  };

  return (
    <AppContext.Provider
      value={{
        notifications,
        selectedSOS,
        setSelectedSOS,
        selectedTrip,
        setSelectedTrip,
        selectedTourist,
        setSelectedTourist,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        getUnreadCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
