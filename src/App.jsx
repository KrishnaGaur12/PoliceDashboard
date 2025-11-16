import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SOSManagement from './pages/SOSManagement';
import Tourists from './pages/Tourists';
import LiveTrips from './pages/LiveTrips';
import RiskMap from './pages/RiskMap';
import Stations from './pages/Stations';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Vehicles from './pages/Vehicles';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="sos" element={<SOSManagement />} />
              <Route path="tourists" element={<Tourists />} />
              <Route path="trips" element={<LiveTrips />} />
              <Route path="risk-map" element={<RiskMap />} />
              <Route path="stations" element={<Stations />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route path="chat" element={<Chat />} />
              <Route path="vehicles" element={<Vehicles />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
