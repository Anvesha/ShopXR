import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Sidebar = ({ isMobile, isOpen, toggleSidebar }) => {
  const location = useLocation();
  const { logout, isAuthenticated, currentUser } = useAuth(); // ✅ include currentUser

  const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(
    ["/userlist", "/userprofile", "/video-requests", "/3d-model-uploads", "/onboarding-status", "/email-logs", "/user-analytics"].some((path) =>
      location.pathname.startsWith(path)
    )
  );

  const linkBase = {
    fontSize: "0.82rem",
    color: "#ccc",
    textDecoration: "none",
    padding: "6px 0",
    display: "block",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.2s ease-in-out",
  };

  const getLinkStyle = (path) => ({
    ...linkBase,
    backgroundColor: location.pathname.startsWith(path) ? "rgba(255,255,255,0.08)" : "transparent",
    color: location.pathname.startsWith(path) ? "#fff" : "#ccc",
    fontWeight: location.pathname.startsWith(path) ? "bold" : "normal",
  });

  const sidebarStyle = {
    position: isMobile ? "fixed" : "relative",
    transform: isMobile ? (isOpen ? "translateX(0)" : "translateX(-100%)") : "none",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1000,
    width: isMobile ? "160px" : "180px",
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    color: "#fff",
    padding: "12px",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    flexShrink: 0,
  };

  if (!isAuthenticated) return null;

  // ✅ Encode the current user's email for URL
  const userProfilePath = currentUser?.email
    ? `/userprofile/${encodeURIComponent(currentUser.email)}`
    : "/userprofile/admin%40example.com"; // fallback

  return (
    <aside style={sidebarStyle}>
      <div>
        {isMobile && isOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              background: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "1.4rem",
              alignSelf: "flex-end",
              marginBottom: "10px",
            }}
          >
            ✕
          </button>
        )}

        <Link
          to="/"
          style={{
            ...linkBase,
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#fff",
          }}
        >
          <span
            style={{
              background: "#fff",
              color: "#000",
              padding: "2px 6px",
              borderRadius: "5px",
              marginRight: "5px",
            }}
          >
            3D
          </span>
          Portal Admin
        </Link>

        <Link to="/" style={getLinkStyle("/")}>
          Dashboard
        </Link>

        <div
          style={{
            ...getLinkStyle("/userlist"),
            cursor: "pointer",
            fontWeight: isUsersMenuOpen ? "bold" : "normal",
          }}
          onClick={() => setIsUsersMenuOpen((prev) => !prev)}
        >
          Users
        </div>

        {isUsersMenuOpen && (
          <div style={{ marginLeft: "10px" }}>
            {[
              { label: "User List", path: "/userlist" },
              { label: "User Profile", path: userProfilePath }, // ✅ Fixed
              { label: "Video Requests", path: "/video-requests" },
              { label: "3D Model Uploads", path: "/3d-model-uploads" },
              { label: "Onboarding Status", path: "/onboarding-status" },
              { label: "Email Logs", path: "/email-logs" },
              { label: "User Analytics", path: "/user-analytics" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...getLinkStyle(item.path),
                  fontSize: "0.75rem",
                  paddingLeft: "10px",
                }}
              >
                • {item.label}
              </Link>
            ))}
          </div>
        )}

        <Link to="/analytics" style={getLinkStyle("/analytics")}>
          Analytics
        </Link>
        <Link to="/auditlogs" style={getLinkStyle("/auditlogs")}>
          Audit Logs
        </Link>
        <Link to="/settings" style={getLinkStyle("/settings")}>
          Settings
        </Link>
      </div>

      <div
        onClick={() => {
          logout();
          if (isMobile && isOpen) toggleSidebar();
        }}
        style={{
          marginTop: "20px",
          color: "#dc3545",
          fontSize: "0.9rem",
          cursor: "pointer",
          fontWeight: "bold",
          padding: "10px 0",
        }}
      >
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
