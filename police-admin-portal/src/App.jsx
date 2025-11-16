import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import SOSList from './pages/SOSList';
import Trips from './pages/Trips';
import Tourists from './pages/Tourists';
import RiskMap from './pages/RiskMap';
import Stations from './pages/Stations';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Vehicles from './pages/Vehicles';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sos" element={<SOSList />} />
        <Route path="trips" element={<Trips />} />
        <Route path="tourists" element={<Tourists />} />
        <Route path="risk-map" element={<RiskMap />} />
        <Route path="stations" element={<Stations />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="chat" element={<Chat />} />
        <Route path="vehicles" element={<Vehicles />} />
      </Route>
    </Routes>
  );
}

export default App;
