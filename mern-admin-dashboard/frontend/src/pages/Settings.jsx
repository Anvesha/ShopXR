import React, { useState, useEffect } from "react";
import UserRolesPermissions from './UserRolesPermissions';
import EmailSettings from './EmailSettings';
import SettingsAPIIntegrations from './SettingsAPIIntegrations';
import BillingPlans from './BillingPlans';
import SecuritySettings from './SecuritySettings'; // ✅ Import SecuritySettings

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [logoPreview, setLogoPreview] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const tabs = ["General", "User & Roles", "Email", "API & Integrations", "Billing & Plans", "Security"];

  const styles = {
    container: { padding: isMobile ? "15px" : "20px", color: "#fff", fontFamily: "'Poppins', sans-serif" },
    header: { fontSize: isMobile ? "1.3em" : "1.6em", fontWeight: "bold" },
    description: { fontSize: isMobile ? "0.8em" : "0.9em", color: "#aaa" },
    tabsWrapper: { marginTop: "15px", display: "flex", flexWrap: 'wrap', gap: isMobile ? '8px' : '10px' },
    tab: (tab) => ({
      padding: isMobile ? "8px 10px" : "6px 12px",
      marginRight: isMobile ? "5px" : "8px",
      marginBottom: isMobile ? "5px" : "0",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: activeTab === tab ? "#2c2c2c" : "transparent",
      color: activeTab === tab ? "#fff" : "#aaa",
      border: "1px solid #333",
      fontSize: isMobile ? "11px" : "12px",
      whiteSpace: 'nowrap',
    }),
    section: {
      background: "#181818",
      padding: "15px",
      borderRadius: "7px",
      border: "1px solid #333",
      marginTop: "15px",
    },
    label: {
      color: "#bbb",
      fontSize: isMobile ? "10px" : "11px",
      marginBottom: "3px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: isMobile ? "8px" : "6px",
      backgroundColor: "#1e1e1e",
      border: "1px solid #333",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "12px",
      marginTop: "3px",
    },
    button: {
      marginTop: "15px",
      padding: isMobile ? "10px 16px" : "8px 14px",
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: isMobile ? "12px" : "13px",
      whiteSpace: 'nowrap',
    },
    logoContainer: {
      display: "flex",
      gap: isMobile ? "6px" : "8px",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
    },
    logoPreview: {
      width: isMobile ? "50px" : "40px",
      height: isMobile ? "50px" : "40px",
      objectFit: "cover",
      borderRadius: "5px",
      border: "1px solid #333",
      flexShrink: 0,
    },
    logoPlaceholder: {
      width: isMobile ? "50px" : "40px",
      height: isMobile ? "50px" : "40px",
      backgroundColor: "#2a2a2a",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: isMobile ? "20px" : "18px",
      color: "#888",
      flexShrink: 0,
    },
    logoButton: {
      padding: isMobile ? "8px 12px" : "6px 10px",
      backgroundColor: "#2a2a2a",
      border: "1px solid #333",
      borderRadius: "5px",
      color: "#fff",
      cursor: "pointer",
      fontSize: "10px",
      fontWeight: "normal",
      whiteSpace: 'nowrap',
    },
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogoPreview(URL.createObjectURL(file));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return (
          <div style={styles.section}>
            <h3 style={{ marginBottom: "8px" }}>General Settings</h3>
            <p style={{ color: "#aaa", fontSize: "0.8em", marginBottom: "15px" }}>
              Configure basic site settings and preferences.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "15px" }}>
              <div>
                <label style={styles.label}>Site Name</label>
                <input style={styles.input} type="text" defaultValue="3DPortal" />
              </div>
              <div>
                <label style={styles.label}>Default Time Zone</label>
                <select style={styles.input}><option>Select timezone</option></select>
              </div>
              <div>
                <label style={styles.label}>Default Language</label>
                <select style={styles.input}><option>Select language</option></select>
              </div>
              <div>
                <label style={styles.label}>Homepage URL</label>
                <input style={styles.input} type="text" defaultValue="https://3dportal.com" />
              </div>
              <div>
                <label style={styles.label}>Site Logo</label>
                <div style={styles.logoContainer}>
                  {logoPreview ? (
                    <img src={logoPreview} alt="Site Logo" style={styles.logoPreview} />
                  ) : (
                    <div style={styles.logoPlaceholder}>🖼️</div>
                  )}
                  <input
                    type="file"
                    id="logoUpload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleLogoUpload}
                  />
                  <label htmlFor="logoUpload" style={styles.logoButton}>Upload Logo</label>
                </div>
              </div>
            </div>

            <button style={styles.button}>Save Changes</button>
          </div>
        );
      case "User & Roles":
        return <div style={{ marginTop: "15px" }}><UserRolesPermissions /></div>;
      case "Email":
        return <div style={{ marginTop: "15px" }}><EmailSettings /></div>;
      case "API & Integrations":
        return <div style={{ marginTop: "15px" }}><SettingsAPIIntegrations /></div>;
      case "Billing & Plans":
        return <div style={{ marginTop: "15px" }}><BillingPlans /></div>;
      case "Security":
        return <div style={{ marginTop: "15px" }}><SecuritySettings /></div>; // ✅ Security tab rendering
      default:
        return (
          <div style={styles.section}>
            <h3 style={{ marginBottom: "8px" }}>{activeTab} Settings</h3>
            <p style={{ color: "#aaa", fontSize: "0.8em" }}>
              Content for {activeTab} settings will go here.
            </p>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Settings</h2>
      <p style={styles.description}>
        Configure site preferences, user roles, email templates, API keys, and security settings.
      </p>

      <div style={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div key={tab} style={styles.tab(tab)} onClick={() => setActiveTab(tab)}>
            {tab}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default Settings;
