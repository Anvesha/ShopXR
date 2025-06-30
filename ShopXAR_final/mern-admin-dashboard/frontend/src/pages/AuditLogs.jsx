import React, { useState, useEffect } from "react";

function AuditLogs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [logs, setLogs] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [actorFilter, setActorFilter] = useState('');
  const [actionFilter, setActionFilter] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('/api/audit-logs');
        const data = await res.json();
        setLogs(data);
      } catch (err) {
        console.error('Failed to fetch logs:', err);
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    fetchLogs();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const filteredLogs = logs.filter(log => {
    const matchesSearch =
      log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.target?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesActor = actorFilter === '' || log.actor === actorFilter;
    const matchesAction = actionFilter === '' || log.action === actionFilter;

    return matchesSearch && matchesActor && matchesAction;
  });

  const containerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#e0e0e0',
    minHeight: 'calc(100vh - 40px)',
    padding: isMobile ? "15px" : "20px",
    fontFamily: "'Poppins', sans-serif",
    borderRadius: '6px',
    border: '1px solid #333',
  };

  const headerStyle = {
    fontSize: isMobile ? "1.4em" : "1.6em",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const subHeaderStyle = {
    fontSize: isMobile ? "0.85em" : "0.9em",
    color: "#b0b0b0",
    marginBottom: "16px",
  };

  const searchRowStyle = {
    display: "flex",
    gap: isMobile ? "8px" : "10px",
    marginBottom: "16px",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#1e1e1e",
    color: "#fff",
    flex: isMobile ? "1 1 100%" : "1",
    minWidth: isMobile ? "auto" : "200px",
    fontSize: isMobile ? "0.9em" : "13px",
  };

  const selectStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#1e1e1e",
    color: "#fff",
    minWidth: isMobile ? "100%" : "120px",
    fontSize: isMobile ? "0.9em" : "13px",
    appearance: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23e0e0e0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '14px',
  };

  const exportButtonStyle = {
    padding: isMobile ? "8px 12px" : "8px 16px",
    borderRadius: "4px",
    border: "none",
    background: "#4a4a4a",
    color: "#fff",
    cursor: "pointer",
    fontSize: isMobile ? "0.9em" : "13px",
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    width: isMobile ? '100%' : 'auto',
    marginLeft: isMobile ? "0" : "auto",
  };

  const tableWrapperStyle = {
    backgroundColor: '#181818',
    borderRadius: '6px',
    overflowX: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #333',
  };

  const tableStyle = {
    width: "100%",
    minWidth: "1000px",
    borderCollapse: "collapse",
  };

  const thStyle = {
    borderBottom: "1px solid #333",
    padding: isMobile ? "10px 8px" : "12px 8px",
    textAlign: "left",
    fontSize: isMobile ? "0.8em" : "12px",
    color: "#ccc",
    whiteSpace: 'nowrap',
  };

  const tdStyle = {
    padding: isMobile ? "10px 8px" : "12px 8px",
    borderBottom: "1px solid #222",
    fontSize: isMobile ? "0.85em" : "13px",
    whiteSpace: 'nowrap',
  };

  const iconStyle = {
    marginRight: "6px",
    fontSize: isMobile ? "1em" : "1.1em",
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          style={selectStyle}
          value={actorFilter}
          onChange={(e) => setActorFilter(e.target.value)}
        >
          <option value="">Admin User</option>
          <option value="System">System</option>
        </select>
        <select
          style={selectStyle}
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Upload">Upload</option>
          <option value="Login">Login</option>
          <option value="Delete">Delete</option>
          <option value="Update">Update</option>
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
            {filteredLogs.map((log, index) => (
              <tr key={log._id || index}>
                <td style={tdStyle}>{new Date(log.timestamp).toLocaleString()}</td>
                <td style={tdStyle}>
                  <span style={iconStyle}>{log.actor === 'System' ? '🗄️' : '👤'}</span> {log.actor}
                </td>
                <td style={tdStyle}>{log.action}</td>
                <td style={tdStyle}>{log.target}</td>
                <td style={tdStyle}>{log.ipAddress}</td>
                <td style={tdStyle}>{log.device}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditLogs;
