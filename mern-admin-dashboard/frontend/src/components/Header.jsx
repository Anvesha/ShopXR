import React from "react";

/**
 * Responsive, compact Header component for the dashboard.
 */
function Header({ toggleSidebar, isMobile }) {
  return (
    <header
      style={{
        padding: "8px 16px",
        background: "#0d0d0d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "48px",
        boxSizing: "border-box",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      {/* Sidebar toggle for mobile */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          ☰
        </button>
      )}

      {/* Title */}
      <h2
        style={{
          margin: 0,
          fontSize: "15px",
          color: "#fff",
          fontWeight: 500,
          flexGrow: 1,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        Dashboard
      </h2>

      {/* Right-side: search and avatar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginLeft: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "5px 10px",
            width: isMobile ? "100px" : "180px",
            background: "#262626",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            outline: "none",
            fontSize: "12px",
          }}
        />

        {/* User Avatar */}
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "#6a0dad",
            flexShrink: 0,
          }}
          aria-label="User profile avatar"
        />
      </div>
    </header>
  );
}

export default Header;
