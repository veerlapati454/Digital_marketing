import { useState } from "react";
import {
  FaHome, FaUsers, FaShieldAlt, FaFileAlt, FaServer,
  FaTerminal, FaChartBar, FaCogs, FaPlug, FaSignOutAlt,
  FaBars, FaTimes, FaSearch, FaBell, FaQuestionCircle,
  FaArrowUp, FaArrowDown, FaArrowRight, FaEllipsisV,
  FaCheckCircle, FaUserPlus, FaExclamationCircle,
  FaDatabase, FaUserTimes, FaSync, FaDownload,
} from "react-icons/fa";
import "./AdminDashboard.css";
import logo from "../../assets/stackly.webp";
import { useNavigate } from "react-router-dom";

/* ─── NAV ─── */
const navItems = [
  { section: "Main" },
  { icon: <FaHome />,      label: "Overview",          id: "overview",     badge: null },
  { icon: <FaUsers />,     label: "Users",             id: "users",        badge: "8"  },
  { icon: <FaShieldAlt />, label: "Roles & Permissions", id: "roles",      badge: null },
  { icon: <FaFileAlt />,   label: "Content",           id: "content",      badge: null },
  { section: "System" },
  { icon: <FaServer />,    label: "Servers",           id: "servers",      badge: null },
  { icon: <FaTerminal />,  label: "Audit Logs",        id: "logs",         badge: null },
  { icon: <FaChartBar />,  label: "Reports",           id: "reports",      badge: null },
  { section: "Config" },
  { icon: <FaCogs />,      label: "Settings",          id: "settings",     badge: null },
  { icon: <FaPlug />,      label: "Integrations",      id: "integrations", badge: null },
];

/* ─── USERS DATA ─── */
const users = [
  { name: "Priya Sharma", role: "admin",     status: "active",    last: "2 min ago",  twofa: true  },
  { name: "Rahul Mehta",  role: "moderator", status: "active",    last: "15 min ago", twofa: true  },
  { name: "Aarav Singh",  role: "moderator", status: "pending",   last: "1 hr ago",   twofa: false },
  { name: "Neha Kapoor",  role: "admin",     status: "active",    last: "3 hr ago",   twofa: true  },
  { name: "Dev Patel",    role: "moderator", status: "suspended", last: "2 days ago", twofa: false },
  { name: "Anjali Rao",   role: "admin",     status: "active",    last: "Just now",   twofa: true  },
];

/* ─── ACTIVITY DATA ─── */
const activities = [
  { color: "green",  icon: <FaUserPlus />,         text: "New admin account created",          time: "just now"   },
  { color: "red",    icon: <FaExclamationCircle />, text: "Failed login attempt — 5 retries",   time: "4 min ago"  },
  { color: "indigo", icon: <FaShieldAlt />,         text: 'Role "Editor" permissions updated',  time: "22 min ago" },
  { color: "amber",  icon: <FaDatabase />,          text: "Database backup completed",          time: "1 hr ago"   },
  { color: "sky",    icon: <FaPlug />,              text: "Stripe integration reconnected",     time: "3 hr ago"   },
  { color: "red",    icon: <FaUserTimes />,         text: "User Dev Patel suspended",           time: "Yesterday"  },
];

/* ─── ROLES DATA ─── */
const initialRoles = [
  { name: "Super Admin", desc: "Full system access",        enabled: true  },
  { name: "Admin",       desc: "Manage users & content",    enabled: true  },
  { name: "Moderator",   desc: "Review & moderate content", enabled: true  },
  { name: "Editor",      desc: "Create & edit content",     enabled: false },
  { name: "Viewer",      desc: "Read-only access",          enabled: true  },
];

/* ─── SERVERS DATA ─── */
const servers = [
  { name: "API Gateway",        sub: "us-east-1 · 99.99%",  status: "up",   ping: "12 ms" },
  { name: "Database (Primary)", sub: "PostgreSQL · 99.98%",  status: "up",   ping: "8 ms"  },
  { name: "Cache (Redis)",      sub: "High memory usage",    status: "warn", ping: "84 ms" },
  { name: "CDN",                sub: "Cloudflare · Global",  status: "up",   ping: "4 ms"  },
  { name: "Worker Queue",       sub: "Processing halted",    status: "down", ping: "Down"  },
  { name: "Auth Service",       sub: "JWT / OAuth2",         status: "up",   ping: "19 ms" },
];

/* ─── AUDIT LOG ─── */
const auditLogs = [
  { initials: "PS", text: <>Priya created role <strong>Beta Tester</strong></>, tag: "create", time: "2 min ago"  },
  { initials: "SA", text: <>Super admin deleted user <strong>J. Doe</strong></>,  tag: "delete", time: "18 min ago" },
  { initials: "RM", text: <>Rahul updated site settings</>,                        tag: "modify", time: "45 min ago" },
  { initials: "NK", text: <>Neha logged in from 103.x.x.x</>,                     tag: "login",  time: "3 hr ago"   },
  { initials: "SA", text: <>Backup policy modified</>,                             tag: "modify", time: "Yesterday"  },
];

/* ─── HELPERS ─── */
function RoleBadge({ role }) {
  const map = { admin: "badge-admin", moderator: "badge-mod" };
  return <span className={`status-badge ${map[role] || "badge-mod"}`}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>;
}

function StatusBadge({ status }) {
  const map = { active: "badge-active", pending: "badge-pending", suspended: "badge-suspended" };
  return <span className={`status-badge ${map[status] || "badge-active"}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
}

/* ══════════════════════════════════════════ */
function AdminDashboard() {
  const [activeNav,   setActiveNav]   = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [roles,       setRoles]       = useState(initialRoles);

  const navigate     = useNavigate();
  const closeSidebar = () => setSidebarOpen(false);
  const go404        = () => navigate("/404");

  const toggleRole = (idx) =>
    setRoles((prev) => prev.map((r, i) => i === idx ? { ...r, enabled: !r.enabled } : r));

  return (
    <div className="ad-layout">

      {/* OVERLAY */}
      {sidebarOpen && <div className="ad-overlay" onClick={closeSidebar} />}

      {/* ════ SIDEBAR ════ */}
      <aside className={`ad-sidebar ${sidebarOpen ? "ad-sidebar--open" : ""}`}>

        <div className="sidebar-logo">
          <div className="logo-img-placeholder">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) =>
            item.section ? (
              <p key={i} className="nav-section-label">{item.section}</p>
            ) : (
              <button
                key={item.id}
                className={`nav-item ${activeNav === item.id ? "nav-item--active" : ""}`}
                onClick={() => { setActiveNav(item.id); closeSidebar(); go404(); }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </button>
            )
          )}
        </nav>

        <div className="sidebar-user">
          <div className="sidebar-user-avatar">SA</div>
          <div className="sidebar-user-info">
            <strong>Super Admin</strong>
            <span>admin@company.com</span>
          </div>
          {/* Logout — navigates to /login, NOT /404 */}
          <button className="sidebar-logout" title="Sign out" onClick={() => navigate("/login")}>
            <FaSignOutAlt />
          </button>
        </div>
      </aside>

      {/* ════ MAIN ════ */}
      <main className="ad-main">

        {/* TOP BAR */}
        <header className="ad-topbar">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="topbar-search">
            <FaSearch />
            <input type="text" placeholder="Search users, logs, settings…" onClick={go404} readOnly />
          </div>

          <div className="topbar-actions">
            <button className="topbar-icon-btn" title="Notifications" onClick={go404}>
              <FaBell /><span className="notif-dot" />
            </button>
            <button className="topbar-icon-btn" title="Help" onClick={go404}>
              <FaQuestionCircle />
            </button>
            <div className="topbar-avatar" title="Profile" onClick={go404} style={{ cursor: "pointer" }}>SA</div>
          </div>
        </header>

        {/* ── PAGE ── */}
        <div className="ad-page">

          {/* Header */}
          <div className="ad-page-header">
            <div>
              <h1>Admin Overview</h1>
              <p>System health and activity — June 12, 2026</p>
            </div>
            <button className="primary-btn-ad" onClick={go404}>
              <FaDownload /> Export Report
            </button>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="ad-stat-grid">
            {[
              { icon: <FaUsers />,             label: "Total Users",     value: "8,342",  delta: "+214 this month",    up: true,  color: "indigo" },
              { icon: <FaCheckCircle />,        label: "Active Sessions", value: "1,067",  delta: "+18% vs yesterday",  up: true,  color: "green"  },
              { icon: <FaExclamationCircle />,  label: "Open Tickets",    value: "34",     delta: "+9 new today",       up: false, color: "red"    },
              { icon: <FaServer />,             label: "Uptime",          value: "99.97%", delta: "SLA met",            up: true,  color: "sky"    },
            ].map((s, i) => (
              <div key={i} className={`ad-stat-card ad-stat-card--${s.color}`} onClick={go404} style={{ cursor: "pointer" }}>
                <div className="stat-icon-wrap">{s.icon}</div>
                <div className="stat-body">
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className={`stat-delta ${s.up ? "delta-up" : "delta-down"}`}>
                    {s.up ? <FaArrowUp /> : <FaArrowDown />} {s.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── MID GRID ── */}
          <div className="ad-mid-grid">

            {/* Users table */}
            <div className="ad-card ad-card--wide">
              <div className="card-header">
                <h3>Recent Users</h3>
                <button className="card-action" onClick={go404}>View All <FaArrowRight /></button>
              </div>
              <div className="table-wrap">
                <table className="ad-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>2FA</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, i) => (
                      <tr key={i}>
                        <td className="user-name">{u.name}</td>
                        <td><RoleBadge role={u.role} /></td>
                        <td><StatusBadge status={u.status} /></td>
                        <td>{u.last}</td>
                        <td>
                          {u.twofa
                            ? <FaShieldAlt className="twofa-on"  title="Enabled"  />
                            : <FaShieldAlt className="twofa-off" title="Disabled" />}
                        </td>
                        <td><button className="row-action" onClick={go404}><FaEllipsisV /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity */}
            <div className="ad-card">
              <div className="card-header">
                <h3>System Activity</h3>
                <button className="card-action" onClick={go404}>Clear</button>
              </div>
              <ul className="activity-list">
                {activities.map((a, i) => (
                  <li key={i} className="activity-item">
                    <span className={`activity-icon activity-icon--${a.color}`}>{a.icon}</span>
                    <div className="activity-body">
                      <p>{a.text}</p>
                      <span>{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── BOTTOM GRID ── */}
          <div className="ad-bottom-grid">

            {/* Roles & Permissions */}
            <div className="ad-card">
              <div className="card-header">
                <h3>Roles & Permissions</h3>
                <button className="card-action" onClick={go404}>+ Add Role</button>
              </div>
              <div className="roles-list">
                {roles.map((r, i) => (
                  <div key={i} className="role-row">
                    <div className="role-info">
                      <strong>{r.name}</strong>
                      <span>{r.desc}</span>
                    </div>
                    <button
                      className={`toggle-btn ${r.enabled ? "toggle-on" : "toggle-off"}`}
                      onClick={() => toggleRole(i)}
                      aria-label={`Toggle ${r.name}`}
                    >
                      <span className="toggle-thumb" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Status */}
            <div className="ad-card">
              <div className="card-header">
                <h3>Server Status</h3>
                <button className="card-action" onClick={go404}><FaSync /> Refresh</button>
              </div>
              <div className="server-list">
                {servers.map((s, i) => (
                  <div key={i} className="server-row" onClick={go404} style={{ cursor: "pointer" }}>
                    <span className={`server-dot server-dot--${s.status}`} />
                    <div className="server-info">
                      <strong>{s.name}</strong>
                      <span>{s.sub}</span>
                    </div>
                    <span className={`server-ping server-ping--${s.status}`}>{s.ping}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Log */}
            <div className="ad-card">
              <div className="card-header">
                <h3>Audit Log</h3>
                <button className="card-action" onClick={go404}>View All <FaArrowRight /></button>
              </div>
              <div className="audit-list">
                {auditLogs.map((log, i) => (
                  <div key={i} className="audit-item" onClick={go404} style={{ cursor: "pointer" }}>
                    <div className="audit-avatar">{log.initials}</div>
                    <div className="audit-body">
                      <p>{log.text}<span className={`audit-tag audit-tag--${log.tag}`}>{log.tag}</span></p>
                      <span>{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;