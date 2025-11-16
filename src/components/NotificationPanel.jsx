import React, { useEffect } from 'react';
import { X, Clock, AlertCircle, Info, MessageSquare } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const NotificationPanel = () => {
  const { notifications, isOpen, closePanel, markAsRead, markAllAsRead } = useNotifications();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    if (notification.link) {
      navigate(notification.link);
    }
    closePanel();
  };

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'bg-red-100 text-red-800 border-red-200',
      high: 'bg-orange-100 text-orange-800 border-orange-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-blue-100 text-blue-800 border-blue-200',
    };
    return colors[severity] || colors.low;
  };

  const getIcon = (type) => {
    const icons = {
      SOS: AlertCircle,
      Trip: MessageSquare,
      Weather: AlertCircle,
      System: Info,
    };
    const Icon = icons[type] || Info;
    return <Icon className="w-5 h-5" />;
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000); // seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return time.toLocaleDateString();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={closePanel}></div>
      
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          <button
            onClick={closePanel}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {notifications.length > 0 && (
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={markAllAsRead}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Mark all as read
            </button>
          </div>
        )}

        <div className="divide-y divide-gray-200">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Info className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${getSeverityColor(notification.severity)}`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                      {!notification.read && (
                        <span className="ml-2 w-2 h-2 bg-primary-600 rounded-full inline-block"></span>
                      )}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatTime(notification.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
