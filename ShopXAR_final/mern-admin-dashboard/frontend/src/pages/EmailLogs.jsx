// src/pages/EmailLogs.jsx

import React, { useState, useEffect } from 'react';

const EmailLogs = () => {
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

  const [searchTerm, setSearchTerm] = useState('');
  // Corrected initial state to reflect common usage from image: 'Welcome' and 'All'
  const [filterType, setFilterType] = useState('Welcome');
  const [filterStatus, setFilterStatus] = useState('All'); // Not explicitly used in the image's UI, but good to have

  const [emailLogs, setEmailLogs] = useState([
    {
      id: '1',
      date: '2025-01-15',
      time: '10:30',
      type: 'Welcome',
      subject: 'Welcome to 3DPortal',
      recipient: 'John Doe',
      status: 'Sent',
    },
    {
      id: '2',
      date: '2025-01-14',
      time: '16:45',
      type: 'Model Ready',
      subject: 'Your 3D Model is Ready',
      recipient: 'Jane Smith',
      status: 'Sent',
    },
    {
      id: '3',
      date: '2025-01-13',
      time: '09:15',
      type: 'Billing',
      subject: 'Payment Failed',
      recipient: 'Mike Johnson',
      status: 'Failed',
    },
    {
      id: '4',
      date: '2025-01-12',
      time: '11:00',
      type: 'Notification',
      subject: 'New Feature Alert',
      recipient: 'Alice Brown',
      status: 'Sent',
    },
    {
      id: '5',
      date: '2025-01-11',
      time: '14:30',
      type: 'Password Reset',
      subject: 'Password Reset Request',
      recipient: 'Bob Green',
      status: 'Sent',
    },
  ]);

  const containerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#e0e0e0',
    minHeight: 'calc(100vh - 40px)', // Adjusted height to fit within layout
    padding: isMobile ? '15px' : '20px', // Adjusted padding for mobile
    fontFamily: "'Poppins', sans-serif", // Consistent font
    borderRadius: '6px',
    border: '1px solid #333',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: isMobile ? '1.4em' : '1.6em', // Adjusted for mobile
    marginBottom: '5px',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.85em' : '0.9em', // Adjusted for mobile
    color: '#b0b0b0',
  };

  const filtersActionsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center', // Align to start on mobile
    marginBottom: '15px',
    flexWrap: 'wrap',
    gap: '10px',
    flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
  };

  const searchFilterGroupStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: isMobile ? '100%' : 'auto', // Take full width on mobile
  };

  const searchInputStyle = {
    flex: '1', // Allows input to grow
    minWidth: '150px',
    width: isMobile ? '100%' : '200px', // Full width on mobile, fixed on desktop
    padding: isMobile ? '8px 10px' : '7px 10px', // Adjusted padding
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#fff',
    fontSize: isMobile ? '0.9em' : '0.88em', // Adjusted font size
  };

  const filterButtonStyle = (isActive) => ({
    padding: isMobile ? '8px 10px' : '7px 10px', // Adjusted padding
    backgroundColor: isActive ? '#2c2c2c' : '#1e1e1e',
    color: isActive ? '#fff' : '#aaa',
    border: '1px solid #333',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: isMobile ? '0.9em' : '0.88em', // Adjusted font size
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'background-color 0.2s',
    whiteSpace: 'nowrap', // Prevent text wrapping in buttons
  });

  const actionButtonContainerStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: isMobile ? '100%' : 'auto', // Take full width on mobile
    justifyContent: isMobile ? 'space-around' : 'flex-end', // Distribute on mobile, align right on desktop
    marginTop: isMobile ? '10px' : '0', // Margin top on mobile when stacked
  };

  const actionButtonStyle = {
    padding: isMobile ? '8px 12px' : '7px 12px', // Adjusted padding
    backgroundColor: '#4a4a4a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: isMobile ? '0.85em' : '0.88em', // Adjusted font size
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'background-color 0.2s',
    whiteSpace: 'nowrap', // Prevent text wrapping in buttons
  };

  const tableContainerStyle = {
    backgroundColor: '#181818',
    borderRadius: '6px',
    overflowX: 'auto', // Enable horizontal scrolling for the table
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #333',
  };

  const tableStyle = {
    width: '100%',
    minWidth: '1000px', // Set a minimum width to ensure horizontal scrolling
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#3a3a3a',
    padding: '10px 12px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    fontSize: isMobile ? '0.8em' : '0.88em', // Adjusted font size
    whiteSpace: 'nowrap', // Prevent header text from wrapping
  };

  const tdStyle = {
    padding: '10px 12px',
    borderBottom: '1px solid #333',
    fontSize: isMobile ? '0.75em' : '0.85em', // Adjusted font size
    verticalAlign: 'middle',
    whiteSpace: 'nowrap', // Prevent table cell content from wrapping
  };

  const statusBadgeStyle = (status) => {
    let bgColor = '#4a4a4a';
    let textColor = '#fff';
    if (status === 'Sent') {
      bgColor = '#28a745';
    } else if (status === 'Failed') {
      bgColor = '#dc3545';
    }
    return {
      backgroundColor: bgColor,
      color: textColor,
      padding: '3px 6px',
      borderRadius: '3px',
      fontSize: isMobile ? '0.65em' : '0.75em', // Adjusted font size
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    };
  };

  const typeBadgeStyle = {
    backgroundColor: '#4a4a4a',
    color: '#e0e0e0',
    padding: '3px 6px',
    borderRadius: '3px',
    fontSize: isMobile ? '0.65em' : '0.75em', // Adjusted font size
    whiteSpace: 'nowrap',
  };

  const actionIconStyle = {
    fontSize: isMobile ? '0.9em' : '1em', // Adjusted icon size
    cursor: 'pointer',
    marginRight: '5px',
    color: '#bbb',
  };

  const handleRetryFailed = () => {
    alert('Attempting to retry failed emails.');
  };

  const handleExport = () => {
    alert('Exporting logs.');
  };

  const handleViewLog = (logId) => {
    console.log(`Viewing log with ID: ${logId}`);
  };

  const handleResendLog = (logId) => {
    console.log(`Resending log with ID: ${logId}`);
  };

  const filteredLogs = emailLogs.filter(log => {
    const matchesSearch = log.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.recipient.toLowerCase().includes(searchTerm.toLowerCase());
    // Use filterType state
    const matchesType = filterType === 'All' || log.type === filterType;
    const matchesStatus = filterStatus === 'All' || log.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Email Logs</h1>
        <p style={subtitleStyle}>
          All transactional and manual emails sent to users. Filterable by type, status, and date.
        </p>
      </div>

      <div style={filtersActionsContainerStyle}>
        <div style={searchFilterGroupStyle}>
          <input
            type="text"
            placeholder="Search by subject or recipient..."
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Email type filter buttons */}
          <button
            style={filterButtonStyle(filterType === 'Welcome')}
            onClick={() => setFilterType('Welcome')}
          >
            Welcome
          </button>
          <button
            style={filterButtonStyle(filterType === 'Model Ready')}
            onClick={() => setFilterType('Model Ready')}
          >
            Model Ready
          </button>
          <button
            style={filterButtonStyle(filterType === 'Billing')}
            onClick={() => setFilterType('Billing')}
          >
            Billing
          </button>
          <button
            style={filterButtonStyle(filterType === 'All')}
            onClick={() => setFilterType('All')}
          >
            All
          </button>
        </div>
        <div style={actionButtonContainerStyle}>
          <button style={actionButtonStyle} onClick={handleRetryFailed}>
            <span role="img" aria-label="retry">🔄</span> Retry Failed
          </button>
          <button style={actionButtonStyle} onClick={handleExport}>
            <span role="img" aria-label="export">📤</span> Export
          </button>
        </div>
      </div>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Recipient</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td style={tdStyle}>{log.date}</td>
                  <td style={tdStyle}>{log.time}</td>
                  <td style={tdStyle}>
                    <span style={typeBadgeStyle}>{log.type}</span>
                  </td>
                  <td style={tdStyle}>{log.subject}</td>
                  <td style={tdStyle}>{log.recipient}</td>
                  <td style={tdStyle}>
                    <span style={statusBadgeStyle(log.status)}>{log.status}</span>
                  </td>
                  <td style={{ ...tdStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span
                      style={actionIconStyle}
                      role="img"
                      aria-label="view"
                      onClick={() => handleViewLog(log.id)}
                    >
                      👁️
                    </span>
                    <span
                      style={actionIconStyle}
                      role="img"
                      aria-label="resend"
                      onClick={() => handleResendLog(log.id)}
                    >
                      🔄
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ ...tdStyle, textAlign: 'center', padding: '15px' }}>
                  No email logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailLogs;