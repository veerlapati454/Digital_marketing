import Sidebar from "../Sidebar/Sidebar";
import {
  FaUsers,
  FaBullhorn,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="admin-content">

        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>
            Monitor users, campaigns, revenue, and platform performance.
          </p>
        </div>

        <div className="admin-stats">

          <div className="admin-card">
            <FaUsers />
            <h2>1,248</h2>
            <p>Total Users</p>
          </div>

          <div className="admin-card">
            <FaBullhorn />
            <h2>86</h2>
            <p>Active Campaigns</p>
          </div>

          <div className="admin-card">
            <FaDollarSign />
            <h2>$85,420</h2>
            <p>Total Revenue</p>
          </div>

          <div className="admin-card">
            <FaChartLine />
            <h2>34%</h2>
            <p>Growth Rate</p>
          </div>

        </div>

        <div className="admin-grid">

          <div className="admin-table-card">
            <h3>Recent Users</h3>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td>john@gmail.com</td>
                  <td>User</td>
                  <td>Active</td>
                </tr>

                <tr>
                  <td>Sarah Johnson</td>
                  <td>sarah@gmail.com</td>
                  <td>User</td>
                  <td>Active</td>
                </tr>

                <tr>
                  <td>David Brown</td>
                  <td>david@gmail.com</td>
                  <td>Admin</td>
                  <td>Active</td>
                </tr>

                <tr>
                  <td>Emily Davis</td>
                  <td>emily@gmail.com</td>
                  <td>User</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="admin-table-card">
            <h3>Recent Campaigns</h3>

            <table>
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Client</th>
                  <th>Budget</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>SEO Boost</td>
                  <td>ABC Corp</td>
                  <td>$2,000</td>
                  <td>Running</td>
                </tr>

                <tr>
                  <td>Google Ads</td>
                  <td>XYZ Ltd</td>
                  <td>$5,000</td>
                  <td>Running</td>
                </tr>

                <tr>
                  <td>Facebook Leads</td>
                  <td>TechSoft</td>
                  <td>$1,800</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>Instagram Reach</td>
                  <td>GrowBiz</td>
                  <td>$2,500</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;