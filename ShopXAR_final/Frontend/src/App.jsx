// src/App.jsx
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, default as UserContext } from './context/UserContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';


// ---------- Direct page imports ----------
import Home from './Pages/Home';
import Getstarted from './Pages/Getstarted';
import Uploadpage from './Pages/Uploadpage';
import StartAndUpload from './Pages/Startanduploadvideo';
import Contact from './Pages/Contact';
import VideoTutorials from './Pages/Videotutorial';
import ProfileDashboard from './Pages/Profiledashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AnalyticsPage from './Pages/Analytics';
import CustomizePage from './Pages/Customize';

// ---------- Utility: scroll to top on every route change ----------
function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

// ---------- Utility: protect private routes ----------
function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  return user?.token ? children : <Navigate to="/signin" replace />;
}

// ---------- Utility: apply theme class to <html> ----------
function GlobalThemeSync() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return null;
}

function AppContent() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<Home />} />
      <Route path="/getstarted" element={<Getstarted />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/videotutorials" element={<VideoTutorials />} />

      {/* Auth pages */}
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Private pages */}
      <Route path="/uploadpage" element={<ProtectedRoute><Uploadpage /></ProtectedRoute>} />
      <Route path="/startanduploadvideo" element={<ProtectedRoute><StartAndUpload /></ProtectedRoute>} />
      <Route path="/profiledashboard" element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
      <Route path="/customize" element={<ProtectedRoute><CustomizePage /></ProtectedRoute>} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <h1 className="text-center mt-10 text-white dark:text-white text-xl">
            404 - Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <ScrollToTop />
          <GlobalThemeSync />
          <AppContent />
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
