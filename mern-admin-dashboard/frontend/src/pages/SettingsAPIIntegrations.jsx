import React from "react";

const styles = {
  container: {
    padding: "20px",
    color: "#fff",
    backgroundColor: "#121212",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #333",
  },
  sectionTitle: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    textAlign: "left",
    padding: "8px",
    borderBottom: "1px solid #333",
    color: "#aaa",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #333",
    color: "#ccc",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#2d2d2d",
    border: "1px solid #555",
    borderRadius: "4px",
    color: "#ccc",
    cursor: "pointer",
    marginRight: "6px",
  },
  dangerButton: {
    backgroundColor: "#b33a3a",
    color: "#fff",
    border: "none",
  },
};

const SettingsAPIIntegrations = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>API Keys & Integrations</h3>
        <p>Manage API keys and webhook endpoints.</p>

        <h4 style={styles.sectionTitle}>API Keys</h4>
        <button style={styles.button}>+ Generate New Key</button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Key Name</th>
              <th style={styles.th}>Key</th>
              <th style={styles.th}>Created On</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Production API</td>
              <td style={styles.td}>sk_live_************</td>
              <td style={styles.td}>2025-01-01</td>
              <td style={styles.td}>
                <span style={{ color: "#4caf50" }}>Active</span>
              </td>
              <td style={styles.td}>
                <button style={{ ...styles.button, ...styles.dangerButton }}>Revoke</button>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={styles.sectionTitle}>Webhook Endpoints</h4>
        <button style={styles.button}>+ Add Endpoint</button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>URL</th>
              <th style={styles.th}>Event Types</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Model Upload Webhook</td>
              <td style={styles.td}>https://api.example.com/webhook</td>
              <td style={styles.td}>ModelUploaded, EmailSent</td>
              <td style={styles.td}>
                <button style={styles.button}>Edit</button>
                <button style={styles.button}>Test</button>
                <button style={{ ...styles.button, ...styles.dangerButton }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsAPIIntegrations;
