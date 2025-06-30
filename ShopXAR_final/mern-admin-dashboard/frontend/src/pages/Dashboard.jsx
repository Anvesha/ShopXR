import React from 'react';
import { FaUser, FaChartLine, FaVideo, FaDollarSign } from 'react-icons/fa';

const SummaryCard = ({ title, value, change, sub, icon }) => (
  <div className="card summary-card">
    <div className="card-header">
      <div>
        <h4 className="card-title">{title}</h4>
        <h2 className="card-value">{value}</h2>
        {change && <p className="card-change">{change}</p>}
        {sub && <p className="card-sub">{sub}</p>}
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-subtitle">Welcome to your Super Admin dashboard.</p>

      <div className="cards-grid">
        <SummaryCard title="Total Users" value="2,345" change="+12%" icon={<FaUser />} />
        <SummaryCard title="Active Users" value="1,234" sub="Last 30 days" icon={<FaChartLine />} />
        <SummaryCard title="Videos Uploaded" value="5,678" change="+8%" icon={<FaVideo />} />
        <SummaryCard title="Total Revenue" value="$45,231" change="+20%" icon={<FaDollarSign />} />
      </div>

      <div className="bottom-grid">
        <div className="card">
          <h3 className="card-title">Upload Trends</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>

        <div className="card">
          <h3 className="card-title">Recent Activity</h3>
          <div className="activity-item">
            <span className="dot" /> <span>John uploaded a 3D model</span> <span className="timestamp">14:30</span>
          </div>
          <div className="activity-item">
            <span className="dot dot-inactive" /> <span>Jane logged in</span> <span className="timestamp">13:15</span>
          </div>
        </div>
      </div>

      <style>{`
  .dashboard {
    padding: 24px;
    background: #0f0f0f;
    color: #fff;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 13px; /* Base font size reduced */
  }

  .dashboard-title {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .dashboard-subtitle {
    font-size: 12px;
    color: #aaa;
    margin-bottom: 20px;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 28px;
  }

  .card {
    background: #1a1a1a;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #222;
  }

  .summary-card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 13px;
    margin-bottom: 2px;
  }

  .card-value {
    font-size: 18px;
    font-weight: 600;
  }

  .card-change {
    color: #4ade80;
    font-size: 11px;
  }

  .card-sub {
    color: #aaa;
    font-size: 11px;
  }

  .card-icon {
    font-size: 22px;
    color: #888;
  }

  .bottom-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }

  .chart-placeholder {
    background: #121212;
    height: 180px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    font-size: 12px;
  }

  .activity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: 12px;
    border-bottom: 1px solid #333;
  }

  .dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    margin-right: 6px;
  }

  .dot-inactive {
    background: #999;
  }

  .timestamp {
    font-size: 11px;
    color: #888;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    .bottom-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>

    </div>
  );
};

export default Dashboard;
