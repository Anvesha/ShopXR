// src/pages/EmailSettings.jsx

import React, { useState, useEffect } from 'react';

const EmailSettings = () => {
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

  const [smtpHost, setSmtpHost] = useState('smtp.gmail.com');
  const [smtpPort, setSmtpPort] = useState('587');
  const [username, setUsername] = useState('your-email@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [useTLS, setUseTLS] = useState(false);

  const [emailTemplates, setEmailTemplates] = useState([
    { id: '1', name: 'Welcome Email', subject: 'Welcome to 3DPortal', lastEdited: '2025-01-10' },
    { id: '2', name: 'Model Ready', subject: 'Your 3D Model is Ready', lastEdited: '2025-01-08' },
  ]);

  const inputStyle = {
    width: '100%',
    padding: isMobile ? '7px' : '8px', // Adjusted padding
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '6px',
    color: '#fff',
    fontSize: isMobile ? '13px' : '14px', // Adjusted font size
    marginTop: '4px',
  };

  const labelStyle = {
    color: '#bbb',
    fontSize: isMobile ? '12px' : '13px', // Adjusted font size
    marginBottom: '4px',
    display: 'block',
  };

  const sectionStyle = {
    background: '#181818',
    padding: isMobile ? '15px' : '20px', // Adjusted padding
    borderRadius: '8px',
    border: '1px solid #333',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: isMobile ? '8px 14px' : '10px 16px', // Adjusted padding
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'normal',
    fontSize: isMobile ? '13px' : '14px', // Adjusted font size
    transition: 'background-color 0.2s',
    whiteSpace: 'nowrap', // Prevent text wrapping
  };

  const secondaryButtonStyle = {
    padding: isMobile ? '6px 10px' : '8px 12px', // Adjusted padding
    backgroundColor: '#2a2a2a',
    color: '#fff',
    border: '1px solid #333',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: isMobile ? '11px' : '12px', // Adjusted font size
    whiteSpace: 'nowrap', // Prevent text wrapping
  };

  const testConnectionButton = {
    ...buttonStyle,
    backgroundColor: '#4a4a4a',
    marginTop: isMobile ? '15px' : '20px', // Adjusted margin
  };

  const handleTestConnection = () => {
    console.log('Testing SMTP connection with:', { smtpHost, smtpPort, username, password, useTLS });
    alert('Testing connection...');
  };

  const handleAddTemplate = () => {
    console.log('Navigate to Add Template page/modal');
    alert('Opening Add Template form');
  };

  const handleEditTemplate = (templateId) => {
    console.log(`Editing template with ID: ${templateId}`);
  };

  const handlePreviewTemplate = (templateId) => {
    console.log(`Previewing template with ID: ${templateId}`);
  };

  const tableHeaderStyle = {
    backgroundColor: '#3a3a3a',
    padding: isMobile ? '10px 12px' : '12px 15px', // Adjusted padding
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    fontSize: isMobile ? '0.9em' : '1em', // Adjusted font size
    whiteSpace: 'nowrap', // Prevent text wrapping
  };

  const tableCellStyle = {
    padding: isMobile ? '10px 12px' : '12px 15px', // Adjusted padding
    borderBottom: '1px solid #333',
    fontSize: isMobile ? '0.85em' : '0.95em', // Adjusted font size
    whiteSpace: 'nowrap', // Prevent text wrapping
  };

  return (
    <div style={sectionStyle}>
      <h3 style={{ marginBottom: '10px', fontSize: isMobile ? '16px' : '18px' }}>Email Configuration</h3>
      <p style={{ color: '#aaa', fontSize: isMobile ? '12px' : '13px', marginBottom: '20px' }}>
        Configure SMTP settings and email templates.
      </p>

      {/* SMTP Configuration */}
      <div style={{ marginBottom: isMobile ? '20px' : '30px' }}>
        <h4 style={{ fontSize: isMobile ? '14px' : '16px', marginBottom: '15px', color: '#e0e0e0' }}>SMTP Configuration</h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', // Stacks on mobile
          gap: isMobile ? '15px' : '20px' // Adjusted gap
        }}>
          {/* SMTP Host */}
          <div>
            <label style={labelStyle} htmlFor="smtpHost">SMTP Host</label>
            <input
              type="text"
              id="smtpHost"
              style={inputStyle}
              value={smtpHost}
              onChange={(e) => setSmtpHost(e.target.value)}
            />
          </div>
          {/* Port */}
          <div>
            <label style={labelStyle} htmlFor="smtpPort">Port</label>
            <input
              type="text"
              id="smtpPort"
              style={inputStyle}
              value={smtpPort}
              onChange={(e) => setSmtpPort(e.target.value)}
            />
          </div>
          {/* Username */}
          <div>
            <label style={labelStyle} htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              style={inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <label style={labelStyle} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Use TLS */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
          <input
            type="checkbox"
            id="useTLS"
            checked={useTLS}
            onChange={(e) => setUseTLS(e.target.checked)}
            style={{ marginRight: '10px', transform: isMobile ? 'scale(1.1)' : 'scale(1.2)' }}
          />
          <label htmlFor="useTLS" style={{ ...labelStyle, marginBottom: '0px', fontSize: isMobile ? '13px' : '14px' }}>Use TLS</label>
        </div>

        <button style={testConnectionButton} onClick={handleTestConnection}>
          Test Connection
        </button>
      </div>

      {/* Email Templates */}
      <div style={{ marginTop: isMobile ? '20px' : '30px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center', // Align to start on mobile
          marginBottom: '15px',
          flexDirection: isMobile ? 'column' : 'row', // Stack on mobile
          gap: isMobile ? '10px' : '0', // Add gap when stacked
        }}>
          <h4 style={{ fontSize: isMobile ? '14px' : '16px', color: '#e0e0e0' }}>Email Templates</h4>
          <button style={{ ...buttonStyle, backgroundColor: '#4a4a4a' }} onClick={handleAddTemplate}>
            + Add Template
          </button>
        </div>

        {/* Table Container for horizontal scroll */}
        <div style={{ backgroundColor: '#2a2a2a', borderRadius: '8px', overflowX: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}> {/* minWidth for horizontal scroll */}
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Template Name</th>
                <th style={tableHeaderStyle}>Subject</th>
                <th style={tableHeaderStyle}>Last Edited</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {emailTemplates.map((template) => (
                <tr key={template.id}>
                  <td style={tableCellStyle}>{template.name}</td>
                  <td style={tableCellStyle}>{template.subject}</td>
                  <td style={tableCellStyle}>{template.lastEdited}</td>
                  <td style={{ ...tableCellStyle, display: 'flex', gap: isMobile ? '8px' : '10px' }}>
                    <button style={secondaryButtonStyle} onClick={() => handleEditTemplate(template.id)}>
                      Edit
                    </button>
                    <button style={secondaryButtonStyle} onClick={() => handlePreviewTemplate(template.id)}>
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmailSettings;