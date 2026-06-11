import Sidebar from "../Sidebar/Sidebar";
import {
  FaUsers,
  FaBullhorn,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-content">

        <div className="dashboard-header">
          <h1>User Dashboard</h1>
          <p>
            Welcome back! Here's your marketing
            performance overview.
          </p>
        </div>

        <div className="stats-cards">

          <div className="stat-card">
            <FaBullhorn />
            <h2>24</h2>
            <p>Active Campaigns</p>
          </div>

          <div className="stat-card">
            <FaUsers />
            <h2>1,250</h2>
            <p>Total Leads</p>
          </div>

          <div className="stat-card">
            <FaChartLine />
            <h2>78%</h2>
            <p>Conversion Rate</p>
          </div>

          <div className="stat-card">
            <FaDollarSign />
            <h2>$12.5K</h2>
            <p>Revenue</p>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Recent Campaigns</h3>

            <ul>
              <li>Google Ads Campaign</li>
              <li>Facebook Lead Campaign</li>
              <li>Instagram Brand Promotion</li>
              <li>SEO Optimization Project</li>
            </ul>
          </div>

          <div className="dashboard-card">
            <h3>Recent Activities</h3>

            <ul>
              <li>New lead generated</li>
              <li>Campaign launched</li>
              <li>Monthly report downloaded</li>
              <li>Profile updated</li>
            </ul>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;