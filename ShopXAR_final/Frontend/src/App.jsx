// src/App.jsx
import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, default as UserContext } from './context/UserContext';

// ---------- Lazy-loaded page imports ----------
const Home               = lazy(() => import('./Pages/Home'));
const Getstarted         = lazy(() => import('./Pages/Getstarted'));
const Uploadpage         = lazy(() => import('./Pages/Uploadpage'));
const StartAndUpload     = lazy(() => import('./Pages/Startanduploadvideo'));
const Contact            = lazy(() => import('./Pages/Contact'));
const VideoTutorials     = lazy(() => import('./Pages/Videotutorial'));
const ProfileDashboard   = lazy(() => import('./Pages/Profiledashboard'));
const Login              = lazy(() => import('./Pages/Login'));
const SignUp             = lazy(() => import('./Pages/SignUp'));

// ---------- Utility: scroll to top on every route change ----------
function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

// ---------- Utility: protect private routes ----------
function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  return user?.token ? children : <Navigate to="/signin" replace />;
}

// ---------- Optional tiny loader for Suspense ----------
function Loader() {
  return (
    <div style={{ color: '#fff', textAlign: 'center', marginTop: '40px' }}>
      Loading…
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Public pages */}
            <Route path="/"                element={<Home />} />
            <Route path="/getstarted"      element={<Getstarted />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/videotutorials"  element={<VideoTutorials />} />

            {/* Auth pages */}
            <Route path="/signin"          element={<Login />} />
            <Route path="/signup"          element={<SignUp />} />

            {/* Private pages */}
            <Route
              path="/uploadpage"
              element={
                <ProtectedRoute>
                  <Uploadpage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startanduploadvideo"
              element={
                <ProtectedRoute>
                  <StartAndUpload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profiledashboard"
              element={
                <ProtectedRoute>
                  <ProfileDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '40px' }}>
                  404 - Page Not Found
                </h1>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
