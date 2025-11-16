import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockNotifications } from '../data/notifications';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const addNotification = (notification) => {
    const newNotification = {
      id: `NOTIF-${Date.now()}`,
      timestamp: new Date(),
      read: false,
      ...notification,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  const value = {
    notifications,
    unreadCount,
    isOpen,
    markAsRead,
    markAllAsRead,
    addNotification,
    togglePanel,
    closePanel,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
