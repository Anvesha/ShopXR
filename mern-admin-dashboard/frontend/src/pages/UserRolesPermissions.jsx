// src/pages/UserRolesPermissions.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserRolesPermissions = () => {
  const [roles, setRoles] = useState([
    {
      id: '1',
      name: 'Super Admin',
      permissions: 'All Permissions',
      usersAssigned: 2,
    },
    {
      id: '2',
      name: 'Admin',
      permissions: 'View Users, Edit Users, Manage Billing',
      usersAssigned: 5,
    },
    // Add more dummy data to test scrolling
    {
      id: '3',
      name: 'Editor',
      permissions: 'View Models, Edit Content',
      usersAssigned: 10,
    },
    {
      id: '4',
      name: 'Viewer',
      permissions: 'View All Content',
      usersAssigned: 25,
    },
    {
      id: '5',
      name: 'Moderator',
      permissions: 'Review Submissions, Manage Comments',
      usersAssigned: 3,
    },
  ]);

  const handleDelete = (roleId) => {
    if (window.confirm(`Are you sure you want to delete role with ID: ${roleId}?`)) {
      setRoles(roles.filter(role => role.id !== roleId));
      alert(`Role ${roleId} deleted.`);
    }
  };

  // Styles defined using CSS-in-JS
  const styles = {
    container: {
      backgroundColor: '#1a1a1a', // Kept as original for this component's background
      color: '#e0e0e0',
      // Adjusted minHeight to fit within the main content area (handled by App.jsx padding)
      minHeight: 'auto',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif", // Set to Poppins
      borderRadius: '6px',
      border: '1px solid #333',
    },
    header: {
      marginBottom: '20px',
    },
    title: {
      fontSize: '1.6em', // Consistent with other pages
      marginBottom: '5px',
    },
    subtitle: {
      fontSize: '0.9em', // Consistent with other pages
      color: '#b0b0b0',
    },
    rolesHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      flexWrap: 'wrap', // Allow wrapping on smaller screens
      gap: '10px', // Space between items when wrapped
    },
    rolesTitle: {
      fontSize: '1.2em', // Consistent with other pages' sub-titles
      color: '#fff',
    },
    addButton: {
      backgroundColor: '#4a4a4a',
      color: '#ffffff',
      padding: '8px 12px',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      cursor: 'pointer',
      border: 'none',
      fontSize: '0.9em', // Consistent font size
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
    tableContainer: {
      backgroundColor: '#181818', // Consistent table container background
      borderRadius: '6px',
      overflowX: 'auto', // Enable horizontal scrolling for the table
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      border: '1px solid #333',
    },
    table: {
      width: '100%',
      minWidth: '600px', // Set a minimum width for the table to enable scrolling
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#3a3a3a',
      padding: '10px 15px',
      textAlign: 'left',
      fontWeight: 'bold',
      borderBottom: '1px solid #444',
      fontSize: '0.88em', // Consistent font size
    },
    td: {
      padding: '10px 15px',
      borderBottom: '1px solid #333',
      fontSize: '0.85em', // Consistent font size
      verticalAlign: 'middle', // Align content vertically
    },
    tdActions: {
      padding: '10px 15px',
      borderBottom: '1px solid #333',
      display: 'flex',
      gap: '8px', // Space between action buttons
      flexWrap: 'wrap', // Allow action buttons to wrap if screen is very narrow
    },
    actionButton: { // Base style for action buttons
      padding: '6px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
      fontSize: '0.8em', // Consistent font size
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
    editButton: {
      backgroundColor: '#5a5a5a',
      color: '#ffffff',
      // Inherits other styles from actionButton
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#ffffff',
      // Inherits other styles from actionButton
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>User Roles & Permissions</h1>
        <p style={styles.subtitle}>Manage user roles and their permissions.</p>
      </div>

      <div style={styles.rolesHeader}>
        <h2 style={styles.rolesTitle}>Roles</h2>
        <Link to="/roles/add" style={styles.addButton}>
          + Add Role
        </Link>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Role Name</th>
              <th style={styles.th}>Permissions</th>
              <th style={styles.th}>Users Assigned</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td style={styles.td}>{role.name}</td>
                <td style={styles.td}>{role.permissions}</td>
                <td style={styles.td}>{role.usersAssigned}</td>
                <td style={styles.tdActions}>
                  <Link to={`/roles/edit/${role.id}`} style={{...styles.actionButton, ...styles.editButton}}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(role.id)}
                    style={{...styles.actionButton, ...styles.deleteButton}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRolesPermissions;