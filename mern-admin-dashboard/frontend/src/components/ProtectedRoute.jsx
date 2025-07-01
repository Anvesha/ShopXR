// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Get authentication status

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;