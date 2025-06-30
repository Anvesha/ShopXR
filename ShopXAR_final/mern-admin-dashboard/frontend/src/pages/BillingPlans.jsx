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
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    margin: 0,
  },
  description: {
    color: "#aaa",
    marginTop: "5px",
    fontSize: "14px",
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
  addButton: {
    padding: "6px 12px",
    backgroundColor: "#2d2d2d",
    border: "1px solid #555",
    borderRadius: "4px",
    color: "#ccc",
    cursor: "pointer",
  },
  statusBadge: {
    backgroundColor: "#333",
    padding: "4px 8px",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "12px",
  },
};

const BillingPlans = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.headerRow}>
          <div>
            <h3 style={styles.sectionTitle}>Billing & Plans</h3>
            <p style={styles.description}>
              Configure subscription plans and billing settings.
            </p>
          </div>
          <button style={styles.addButton}>+ Add New Plan</button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Plan Name</th>
              <th style={styles.th}>Price / Month</th>
              <th style={styles.th}>Features</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Basic</td>
              <td style={styles.td}>$29</td>
              <td style={styles.td}>5 models/month, Basic support</td>
              <td style={styles.td}><span style={styles.statusBadge}>Active</span></td>
              <td style={styles.td}>
                <button style={styles.button}>Edit</button>
                <button style={{ ...styles.button, ...styles.dangerButton }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Pro</td>
              <td style={styles.td}>$99</td>
              <td style={styles.td}>25 models/month, Priority support</td>
              <td style={styles.td}><span style={styles.statusBadge}>Active</span></td>
              <td style={styles.td}>
                <button style={styles.button}>Edit</button>
                <button style={{ ...styles.button, ...styles.dangerButton }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Enterprise</td>
              <td style={styles.td}>$299</td>
              <td style={styles.td}>Unlimited models, Dedicated support</td>
              <td style={styles.td}><span style={styles.statusBadge}>Active</span></td>
              <td style={styles.td}>
                <button style={styles.button}>Edit</button>
                <button style={{ ...styles.button, ...styles.dangerButton }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingPlans;
