// src/pages/OnboardingStatus.jsx

import React, { useState, useEffect } from 'react';

const OnboardingStatus = () => {
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
  const [filterStatus, setFilterStatus] = useState('All');

  const [onboardingUsers, setOnboardingUsers] = useState([
    {
      id: '1',
      userName: 'John Doe',
      welcomeEmail: '2024-12-01',
      firstVideo: '2024-12-02',
      firstModel: '2024-12-06',
      shopifyConnected: '2024-12-10',
      firstEmbed: '2024-12-12',
      firstAR: '2024-12-15',
      progress: 100,
    },
    {
      id: '2',
      userName: 'Jane Smith',
      welcomeEmail: '2024-11-15',
      firstVideo: '2024-11-16',
      firstModel: '2024-11-18',
      shopifyConnected: '2024-11-20',
      firstEmbed: null,
      firstAR: null,
      progress: 67,
    },
    {
        id: '3',
        userName: 'Peter Jones',
        welcomeEmail: '2025-01-01',
        firstVideo: null,
        firstModel: null,
        shopifyConnected: null,
        firstEmbed: null,
        firstAR: null,
        progress: 16,
      },
      {
        id: '4',
        userName: 'Alice Brown',
        welcomeEmail: '2025-01-10',
        firstVideo: '2025-01-12',
        firstModel: null,
        shopifyConnected: null,
        firstEmbed: null,
        firstAR: null,
        progress: 33,
      },
      {
        id: '5',
        userName: 'Bob White',
        welcomeEmail: '2025-01-15',
        firstVideo: '2025-01-16',
        firstModel: '2025-01-18',
        shopifyConnected: '2025-01-20',
        firstEmbed: '2025-01-22',
        firstAR: null,
        progress: 84,
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

  const inputStyle = {
    flex: isMobile ? '1 1 100%' : 'initial', // Full width on mobile
    width: isMobile ? '100%' : '200px', // Fixed width on desktop
    padding: isMobile ? '8px 10px' : '7px 10px', // Adjusted padding
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#fff',
    fontSize: isMobile ? '0.9em' : '13px', // Adjusted font size
  };

  const selectStyle = {
    ...inputStyle,
    width: isMobile ? '100%' : 'auto', // Full width on mobile
    padding: isMobile ? '8px 10px' : '7px 10px',
    appearance: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23e0e0e0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '14px',
  };

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
    fontSize: isMobile ? '0.85em' : '13px', // Adjusted font size
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
    minWidth: '1200px', // Set a minimum width to enable horizontal scrolling
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
    verticalAlign: 'middle', // Align content vertically
    whiteSpace: 'nowrap', // Prevent table cell content from wrapping
  };

  const checkboxStyle = {
    marginRight: '8px',
    transform: isMobile ? 'scale(1.0)' : 'scale(1.1)', // Slightly smaller checkbox on mobile
  };

  const statusIconStyle = (isCompleted) => ({
    color: isCompleted ? '#28a745' : '#dc3545',
    fontSize: isMobile ? '0.9em' : '1em', // Adjusted icon size
    marginRight: '3px',
    whiteSpace: 'nowrap',
  });

  const progressBarContainerStyle = {
    width: isMobile ? '70px' : '80px', // Smaller progress bar width on mobile
    backgroundColor: '#333',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '6px',
    flexShrink: 0, // Prevent shrinking
  };

  const progressBarStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '4px',
  });

  const viewDetailsButtonStyle = {
    backgroundColor: '#5a5a5a',
    color: '#ffffff',
    padding: isMobile ? '5px 8px' : '6px 10px', // Adjusted padding
    borderRadius: '3px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: isMobile ? '0.7em' : '0.8em', // Adjusted font size
    whiteSpace: 'nowrap',
  };

  const handleResendWelcomeEmail = () => {
    console.log('Resending welcome emails to selected users...');
    alert('Resending welcome emails!');
  };

  const handleExport = () => {
    console.log('Exporting onboarding status data...');
    alert('Exporting data!');
  };

  const handleViewDetails = (userId) => {
    console.log(`Viewing details for user ID: ${userId}`);
  };

  const filteredUsers = onboardingUsers.filter(user => {
    const matchesSearch = user.userName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' ||
                          (filterStatus === 'Completed' && user.progress === 100) ||
                          (filterStatus === 'In Progress' && user.progress < 100);
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Onboarding Status</h1>
        <p style={subtitleStyle}>
          Monitor how new users are progressing through required setup steps.
        </p>
      </div>

      <div style={filtersActionsContainerStyle}>
        <div style={searchFilterGroupStyle}>
          <input
            type="text"
            placeholder="Search by user name or email..."
            style={inputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            style={selectStyle}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">Filter by Status</option>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div style={actionButtonContainerStyle}>
          <button style={actionButtonStyle} onClick={handleResendWelcomeEmail}>
            <span role="img" aria-label="resend">✉️</span> Resend Welcome Email
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
              <th style={{ ...thStyle, width: isMobile ? '20px' : '30px' }}></th> {/* Smaller checkbox column */}
              <th style={thStyle}>User Name</th>
              <th style={thStyle}>Welcome Email</th>
              <th style={thStyle}>First Video</th>
              <th style={thStyle}>First Model</th>
              <th style={thStyle}>Shopify Connected</th>
              <th style={thStyle}>First Embed</th>
              <th style={thStyle}>First AR</th>
              <th style={thStyle}>Progress</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td style={tdStyle}>
                    <input type="checkbox" style={checkboxStyle} />
                  </td>
                  <td style={tdStyle}>{user.userName}</td>
                  <td style={tdStyle}>
                    {user.welcomeEmail ? (
                      <span style={statusIconStyle(true)}>✔ {user.welcomeEmail}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {user.firstVideo ? (
                      <span style={statusIconStyle(true)}>✔ {user.firstVideo}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {user.firstModel ? (
                      <span style={statusIconStyle(true)}>✔ {user.firstModel}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {user.shopifyConnected ? (
                      <span style={statusIconStyle(true)}>✔ {user.shopifyConnected}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {user.firstEmbed ? (
                      <span style={statusIconStyle(true)}>✔ {user.firstEmbed}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {user.firstAR ? (
                      <span style={statusIconStyle(true)}>✔ {user.firstAR}</span>
                    ) : (
                      <span style={statusIconStyle(false)}>🔴</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={progressBarContainerStyle}>
                        <div style={progressBarStyle(user.progress)}></div>
                      </div>
                      <span>{user.progress}%</span>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={viewDetailsButtonStyle}
                      onClick={() => handleViewDetails(user.id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ ...tdStyle, textAlign: 'center', padding: '15px' }}>
                  No onboarding data found for the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnboardingStatus;