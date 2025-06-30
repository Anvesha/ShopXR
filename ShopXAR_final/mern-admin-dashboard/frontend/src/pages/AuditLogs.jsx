// src/pages/AuditLogs.jsx
import React, { useState, useEffect } from "react";

function AuditLogs() {
  // State to track window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768; // Define your mobile breakpoint

  // Dummy data for audit logs
  const auditLogsData = [
    {
      id: '1',
      timestamp: '2025-01-15 14:30',
      actorType: 'Admin User',
      actorIcon: '👤',
      action: 'Uploaded 3D Model',
      target: 'User: John Doe, Model #123',
      ipAddress: '192.168.1.100',
      deviceBrowser: 'macOS Chrome',
    },
    {
      id: '2',
      timestamp: '2025-01-15 13:15',
      actorType: 'System',
      actorIcon: '🗄️',
      action: 'User Login',
      target: 'User: Jane Smith',
      ipAddress: '10.0.0.50',
      deviceBrowser: 'Windows Edge',
    },
    {
      id: '3',
      timestamp: '2025-01-14 10:00',
      actorType: 'Admin User',
      actorIcon: '👤',
      action: 'Deleted User',
      target: 'User: Mike Johnson',
      ipAddress: '203.0.113.1',
      deviceBrowser: 'Linux Firefox',
    },
    {
      id: '4',
      timestamp: '2025-01-14 09:30',
      actorType: 'System',
      actorIcon: '🗄️',
      action: 'Model Processing Completed',
      target: 'Model #456',
      ipAddress: 'N/A',
      deviceBrowser: 'Server',
    },
    {
      id: '5',
      timestamp: '2025-01-13 18:00',
      actorType: 'Admin User',
      actorIcon: '👤',
      action: 'Updated Email Template',
      target: 'Template: Welcome Email',
      ipAddress: '192.168.1.105',
      deviceBrowser: 'Windows Chrome',
    },
  ];

  const containerStyle = {
    backgroundColor: '#1a1a1a', // Consistent background color
    color: '#e0e0e0', // Consistent text color
    minHeight: 'calc(100vh - 40px)', // Adjusted height to fit within overall layout
    padding: isMobile ? "15px" : "20px", // Reduced padding on mobile
    fontFamily: "'Poppins', sans-serif", // Consistent font
    borderRadius: '6px',
    border: '1px solid #333', // Consistent border
  };

  const headerStyle = {
    fontSize: isMobile ? "1.4em" : "1.6em", // Adjusted font size for mobile
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const subHeaderStyle = {
    fontSize: isMobile ? "0.85em" : "0.9em", // Adjusted font size for mobile
    color: "#b0b0b0", // Consistent color
    marginBottom: "16px",
  };

  const searchRowStyle = {
    display: "flex",
    gap: isMobile ? "8px" : "10px", // Reduced gap on mobile
    marginBottom: "16px",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row", // Stack on mobile
    alignItems: isMobile ? "flex-start" : "center", // Align to start on mobile
  };

  const inputStyle = {
    padding: isMobile ? "8px" : "8px", // Consistent padding
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#1e1e1e", // Consistent background
    color: "#fff",
    flex: isMobile ? "1 1 100%" : "1", // Full width on mobile
    minWidth: isMobile ? "auto" : "200px", // No min-width on mobile
    fontSize: isMobile ? "0.9em" : "13px", // Adjusted font size for mobile
  };

  const selectStyle = {
    padding: isMobile ? "8px" : "8px", // Consistent padding
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#1e1e1e", // Consistent background
    color: "#fff",
    minWidth: isMobile ? "100%" : "120px", // Full width on mobile
    fontSize: isMobile ? "0.9em" : "13px", // Adjusted font size for mobile
    appearance: 'none', // Remove default select arrow
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23e0e0e0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '14px',
  };

  const exportButtonStyle = {
    padding: isMobile ? "8px 12px" : "8px 16px", // Adjusted padding
    borderRadius: "4px",
    border: "none",
    background: "#4a4a4a", // Consistent button background
    color: "#fff",
    cursor: "pointer",
    fontSize: isMobile ? "0.9em" : "13px", // Adjusted font size for mobile
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    width: isMobile ? '100%' : 'auto', // Full width on mobile
    marginLeft: isMobile ? "0" : "auto", // Remove margin-left on mobile
  };

  const tableWrapperStyle = {
    backgroundColor: '#181818', // Consistent table background
    borderRadius: '6px',
    overflowX: 'auto', // Enable horizontal scrolling for the table
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Consistent shadow
    border: '1px solid #333', // Consistent border
  };

  const tableStyle = {
    width: "100%",
    minWidth: "1000px", // Set a minimum width to ensure horizontal scrolling on smaller screens
    borderCollapse: "collapse",
  };

  const thStyle = {
    borderBottom: "1px solid #333",
    padding: isMobile ? "10px 8px" : "12px 8px", // Adjusted padding
    textAlign: "left",
    fontSize: isMobile ? "0.8em" : "12px", // Adjusted font size for mobile
    color: "#ccc",
    whiteSpace: 'nowrap', // Prevent header text from wrapping
  };

  const tdStyle = {
    padding: isMobile ? "10px 8px" : "12px 8px", // Adjusted padding
    borderBottom: "1px solid #222",
    fontSize: isMobile ? "0.85em" : "13px", // Adjusted font size for mobile
    whiteSpace: 'nowrap', // Prevent table cell content from wrapping
  };

  const iconStyle = {
    marginRight: "6px",
    fontSize: isMobile ? "1em" : "1.1em", // Adjusted icon size for mobile
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Audit Logs</div>
      <div style={subHeaderStyle}>
        Review every admin and system action — who did what, when, and from where.
      </div>

      <div style={searchRowStyle}>
        <input
          type="text"
          placeholder="Search by action or target ..."
          style={inputStyle}
        />
        <select style={selectStyle}>
          <option>Admin User</option>
          <option>System</option>
        </select>
        <select style={selectStyle}>
          <option>Upload</option>
          <option>Login</option>
          <option>Delete</option>
          <option>Update</option>
        </select>
        <button style={exportButtonStyle}>Export</button>
      </div>

      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Timestamp</th>
              <th style={thStyle}>Admin / System</th>
              <th style={thStyle}>Action</th>
              <th style={thStyle}>Target</th>
              <th style={thStyle}>IP Address</th>
              <th style={thStyle}>Device / Browser</th>
            </tr>
          </thead>
          <tbody>
            {auditLogsData.map((log) => (
              <tr key={log.id}>
                <td style={tdStyle}>{log.timestamp}</td>
                <td style={tdStyle}>
                  <span style={iconStyle}>{log.actorIcon}</span> {log.actorType}
                </td>
                <td style={tdStyle}>{log.action}</td>
                <td style={tdStyle}>{log.target}</td>
                <td style={tdStyle}>{log.ipAddress}</td>
                <td style={tdStyle}>{log.deviceBrowser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditLogs;