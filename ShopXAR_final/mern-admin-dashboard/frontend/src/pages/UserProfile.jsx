import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // ✅ import for dynamic route

function UserProfile() {
  const { email } = useParams(); // ✅ get email from route
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${email}`);
        setUser(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch user:", err);
        setError("Failed to load user profile.");
      }
    };

    fetchUser();
  }, [email]); // ✅ re-fetch when email changes

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const containerStyle = {
    padding: isMobile ? "15px" : "20px",
    color: "#fff",
    backgroundColor: "#1a1a1a",
    fontFamily: "'Poppins', sans-serif",
    minHeight: "calc(100vh - 40px)",
    borderRadius: "6px",
    border: "1px solid #333",
  };

  const pageTitleStyle = {
    fontSize: isMobile ? "1.4em" : "1.6em",
    marginBottom: "5px",
  };

  const pageSubtitleStyle = {
    marginBottom: isMobile ? "12px" : "16px",
    fontSize: isMobile ? "0.85em" : "0.9em",
    color: "#b0b0b0",
  };

  const rowStyle = {
    display: "flex",
    gap: isMobile ? "10px" : "16px",
    marginBottom: isMobile ? "10px" : "16px",
    flexWrap: "wrap",
  };

  const cardBaseStyle = {
    background: "#181818",
    padding: isMobile ? "15px" : "20px",
    borderRadius: "8px",
    border: "1px solid #333",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  const cardStyle = {
    ...cardBaseStyle,
    flex: "1 1 auto",
    minWidth: isMobile ? "100%" : "250px",
  };

  const profileCardStyle = {
    ...cardStyle,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: isMobile ? "10px" : "16px",
    textAlign: isMobile ? "center" : "left",
    padding: "20px",
  };

  const avatarStyle = {
    width: isMobile ? "60px" : "50px",
    height: isMobile ? "60px" : "50px",
    borderRadius: "50%",
    background: "#4a4a4a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isMobile ? "24px" : "20px",
    fontWeight: "bold",
    marginBottom: isMobile ? "10px" : "0",
  };

  const profileInfoTextStyle = {
    fontSize: isMobile ? "0.95em" : "1em",
    fontWeight: "bold",
  };

  const profileSubInfoTextStyle = {
    fontSize: isMobile ? "0.75em" : "0.8em",
    color: "#aaa",
  };

  const statsCardStyle = {
    ...cardBaseStyle,
    flex: "1 1 auto",
    minWidth: isMobile ? "100%" : "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px",
  };

  const statsTitleStyle = {
    fontSize: isMobile ? "0.85em" : "0.9em",
    color: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const statsValueStyle = {
    fontSize: isMobile ? "1em" : "1.125em",
    fontWeight: "bold",
    marginTop: "8px",
  };

  const statsIconStyle = {
    fontSize: isMobile ? "18px" : "16px",
  };

  const profileSummaryButtonsContainerStyle = {
    marginTop: isMobile ? "10px" : "12px",
    display: "flex",
    gap: isMobile ? "6px" : "8px",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const profileSummaryButtonStyle = {
    padding: isMobile ? "6px 10px" : "6px 12px",
    borderRadius: "4px",
    border: "none",
    background: "#4a4a4a",
    color: "#fff",
    cursor: "pointer",
    fontSize: isMobile ? "0.75em" : "0.8em",
    transition: "background-color 0.2s",
  };

  const deleteProfileButtonStyle = {
    ...profileSummaryButtonStyle,
    background: "#dc3545",
  };

  const activitySnapshotTextStyle = {
    fontSize: isMobile ? "0.85em" : "0.9em",
    color: "#ccc",
  };

  if (error) {
    return <div style={containerStyle}>❌ {error}</div>;
  }

  if (!user) {
    return <div style={containerStyle}>⏳ Loading profile...</div>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>User Profile</h1>
      <p style={pageSubtitleStyle}>
        Manage everything for this user: profile info, activity, video requests, model uploads, onboarding, emails, and analytics.
      </p>

      <div style={rowStyle}>
        <div style={profileCardStyle}>
          <div style={avatarStyle}>{user.initials || user.name?.[0]}</div>
          <div>
            <div style={profileInfoTextStyle}>{user.name}</div>
            <div style={profileSubInfoTextStyle}>Last Login: {user.lastLogin || "N/A"}</div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ marginBottom: isMobile ? "6px" : "8px", fontSize: isMobile ? "0.85em" : "0.9em" }}>
            <div>Email: {user.email}</div>
            <div>Plan: {user.plan}</div>
            <div>Status: <span style={{ color: "lightgreen" }}>{user.status}</span></div>
          </div>
          <div style={{ fontSize: isMobile ? "0.85em" : "0.9em" }}>
            <div>Shopify Connected: <span style={{ color: "lightgreen" }}>{user.shopifyConnected ? "✔" : "❌"}</span></div>
            <div>Website Type: {user.websiteType}</div>
            <div>Country: {user.country}</div>
          </div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={statsCardStyle}>
          <div style={statsTitleStyle}>
            Videos Submitted <span style={statsIconStyle}>📹</span>
          </div>
          <div style={statsValueStyle}>{user.videosSubmitted || 0}</div>
        </div>

        <div style={statsCardStyle}>
          <div style={statsTitleStyle}>
            Models Completed <span style={statsIconStyle}>📄</span>
          </div>
          <div style={statsValueStyle}>{user.modelsCompleted || 0}</div>
        </div>

        <div style={statsCardStyle}>
          <div style={statsTitleStyle}>
            Revenue Generated <span style={statsIconStyle}>💲</span>
          </div>
          <div style={statsValueStyle}>${user.revenueGenerated || 0}</div>
        </div>

        <div style={statsCardStyle}>
          <div style={statsTitleStyle}>
            Signup Date <span style={statsIconStyle}>📅</span>
          </div>
          <div style={statsValueStyle}>{user.signupDate || "N/A"}</div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={cardStyle}>
          <h4 style={{ marginTop: 0 }}>Profile Summary</h4>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "10px" : "12px", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
            <div style={avatarStyle}>{user.initials || user.name?.[0]}</div>
            <div>
              <div style={profileInfoTextStyle}>{user.name}</div>
              <div style={profileSubInfoTextStyle}>{user.email}</div>
              <div style={profileSubInfoTextStyle}>{user.plan} | {user.status}</div>
            </div>
          </div>
          <div style={profileSummaryButtonsContainerStyle}>
            <button style={profileSummaryButtonStyle}>Edit Profile</button>
            <button style={profileSummaryButtonStyle}>Impersonate</button>
            <button style={deleteProfileButtonStyle}>Delete User</button>
          </div>
        </div>

        <div style={cardStyle}>
          <h4 style={{ marginTop: 0 }}>Activity Snapshot</h4>
          <div style={activitySnapshotTextStyle}>
            <p>Videos This Month: <span>{user.videosThisMonth || 0}</span></p>
            <p>Models This Month: <span>{user.modelsThisMonth || 0}</span></p>
            <p>iFrame Embeds: <span>{user.iframeEmbeds || 0}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
