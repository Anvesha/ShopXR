// src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './Context/AuthContext';
import LoginPage from './pages/LoginPage';

// Components
import Layout from './components/Layout';

// Pages
import UserProfile from './pages/UserProfile';
import UserList from './pages/UserList';
import VideoRequests from './pages/VideoRequests';
import ThreeDModelUploads from './pages/ThreeDModelUploads';
import OnboardingStatus from './pages/OnboardingStatus';
import EmailLogs from './pages/EmailLogs';
import UserAnalytics from './pages/UserAnalytics';
import Analytics from './pages/Analytics';
import AuditLogs from './pages/AuditLogs';
import Settings from './pages/Settings';
import SettingsAPIIntegrations from "./pages/SettingsAPIIntegrations";
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loadingAuth } = useAuth();
  if (loadingAuth) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#1c1c1c',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif"
      }}>
        Loading...
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/loginpage" replace />;
  }
  return children;
};

function AppContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { loadingAuth } = useAuth();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loadingAuth) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#1c1c1c',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Initializing application...
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/loginpage" element={<LoginPage />} />

      {/* Private layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/userlist" element={<PrivateRoute><UserList /></PrivateRoute>} />
<Route path="/userprofile/:email" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/video-requests" element={<PrivateRoute><VideoRequests /></PrivateRoute>} />
        <Route path="/3d-model-uploads" element={<PrivateRoute><ThreeDModelUploads /></PrivateRoute>} />
        <Route path="/onboarding-status" element={<PrivateRoute><OnboardingStatus /></PrivateRoute>} />
        <Route path="/email-logs" element={<PrivateRoute><EmailLogs /></PrivateRoute>} />
        <Route path="/user-analytics" element={<PrivateRoute><UserAnalytics /></PrivateRoute>} />
        <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
        <Route path="/auditlogs" element={<PrivateRoute><AuditLogs /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/settings/api-integrations" element={<PrivateRoute><SettingsAPIIntegrations /></PrivateRoute>} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
