import { useState } from "react";
import {
  FaUsers,
  FaBullhorn,
  FaChartLine,
  FaDollarSign,
  FaHome,
  FaCogs,
  FaEnvelope,
  FaFileAlt,
  FaBell,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaArrowUp,
  FaArrowDown,
  FaEllipsisV,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/stackly.webp";

/* ─── NAV ITEMS ─── */
const navItems = [
  { icon: <FaHome />,      label: "Overview",  id: "overview" },
  { icon: <FaBullhorn />,  label: "Campaigns", id: "campaigns" },
  { icon: <FaUsers />,     label: "Leads",     id: "leads" },
  { icon: <FaChartLine />, label: "Analytics", id: "analytics" },
  { icon: <FaEnvelope />,  label: "Email",     id: "email" },
  { icon: <FaFileAlt />,   label: "Reports",   id: "reports" },
  { icon: <FaCogs />,      label: "Settings",  id: "settings" },
];

/* ─── CAMPAIGNS DATA ─── */
const campaigns = [
  { name: "Google Ads — Q3 Drive",    status: "active", leads: 312, budget: "$1,200", ctr: "4.8%" },
  { name: "Facebook Lead Gen",         status: "active", leads: 188, budget: "$800",   ctr: "3.2%" },
  { name: "Instagram Brand Awareness", status: "paused", leads: 95,  budget: "$500",   ctr: "2.1%" },
  { name: "LinkedIn B2B Outreach",     status: "active", leads: 74,  budget: "$950",   ctr: "5.6%" },
  { name: "SEO Content Push",          status: "draft",  leads: 0,   budget: "$400",   ctr: "—"    },
];

/* ─── ACTIVITY DATA ─── */
const activities = [
  { icon: <FaCheckCircle />,       color: "emerald", text: "New lead captured via Google Ads",        time: "2 min ago"  },
  { icon: <FaBullhorn />,          color: "indigo",  text: 'Campaign "LinkedIn B2B" went live',       time: "18 min ago" },
  { icon: <FaFileAlt />,           color: "sky",     text: "June monthly report generated",            time: "1 hr ago"   },
  { icon: <FaExclamationCircle />, color: "amber",   text: "Instagram campaign budget 90% spent",     time: "3 hr ago"   },
  { icon: <FaUsers />,             color: "violet",  text: "125 new leads imported from CSV",          time: "Yesterday"  },
  { icon: <FaClock />,             color: "rose",    text: "Facebook campaign paused — review needed", time: "Yesterday"  },
];

/* ─── LEAD SOURCES ─── */
const leadSources = [
  { source: "Google Ads",  pct: 38, color: "#4f46e5" },
  { source: "Facebook",    pct: 24, color: "#7c3aed" },
  { source: "Organic SEO", pct: 19, color: "#10b981" },
  { source: "LinkedIn",    pct: 12, color: "#0ea5e9" },
  { source: "Other",       pct: 7,  color: "#f59e0b" },
];

/* ─── STATUS BADGE ─── */
function StatusBadge({ status }) {
  const map = {
    active: { label: "Active", cls: "badge-active" },
    paused: { label: "Paused", cls: "badge-paused" },
    draft:  { label: "Draft",  cls: "badge-draft"  },
  };
  const { label, cls } = map[status] || map.draft;
  return <span className={`status-badge ${cls}`}>{label}</span>;
}

/* ══════════════════════════════════════════ */
function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);
  const go404 = () => navigate("/404");

  return (
    <div className="db-layout">

      {/* ── OVERLAY (mobile) ── */}
      {sidebarOpen && <div className="db-overlay" onClick={closeSidebar} />}

      {/* ════════════════════════════════
          SIDEBAR
      ════════════════════════════════ */}
      <aside className={`db-sidebar ${sidebarOpen ? "db-sidebar--open" : ""}`}>

        <div className="sidebar-logo">
          <div className="logo-img-placeholder">
            <img src={logo} alt="" />
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-label">Main Menu</p>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-item--active" : ""}`}
              onClick={() => { setActiveNav(item.id); closeSidebar(); go404(); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.id === "leads" && <span className="nav-badge">12</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="sidebar-user-avatar" />
          <div className="sidebar-user-info">
            <span><strong>Sign Out</strong></span>
          </div>
          <button className="sidebar-logout" title="Logout" onClick={() => navigate("/login")}>
            <FaSignOutAlt />
          </button>
        </div>
      </aside>

      {/* ════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════ */}
      <main className="db-main">

        {/* ── TOP BAR ── */}
        <header className="db-topbar">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="topbar-search">
            <FaSearch />
            <input type="text" placeholder="Search campaigns, leads…" onClick={go404} readOnly />
          </div>

          <div className="topbar-actions">
            <button className="topbar-icon-btn" onClick={go404}>
              <FaBell />
              <span className="notif-dot" />
            </button>
            <div className="topbar-avatar" onClick={go404} style={{ cursor: "pointer" }} />
          </div>
        </header>

        {/* ── PAGE CONTENT ── */}
        <div className="db-page">

          <div className="db-page-header">
            <div>
              <h1>Good morning 👋</h1>
              <p>Here's your marketing performance for June 2026.</p>
            </div>
            <button className="primary-btn-db" onClick={go404}>
              <FaFileAlt /> Download Report
            </button>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="db-stat-grid">
            {[
              { icon: <FaBullhorn />,    label: "Active Campaigns", value: "24",     delta: "+3",     up: true,  color: "indigo"  },
              { icon: <FaUsers />,       label: "Total Leads",       value: "1,250",  delta: "+128",   up: true,  color: "emerald" },
              { icon: <FaChartLine />,   label: "Conversion Rate",   value: "78%",    delta: "+5%",    up: true,  color: "violet"  },
              { icon: <FaDollarSign />,  label: "Revenue",           value: "$12.5K", delta: "−$1.2K", up: false, color: "sky"     },
            ].map((s, i) => (
              <div key={i} className={`db-stat-card db-stat-card--${s.color}`} onClick={go404} style={{ cursor: "pointer" }}>
                <div className="stat-icon-wrap">{s.icon}</div>
                <div className="stat-body">
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className={`stat-delta ${s.up ? "delta-up" : "delta-down"}`}>
                    {s.up ? <FaArrowUp /> : <FaArrowDown />} {s.delta} vs last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── CAMPAIGNS TABLE + ACTIVITY ── */}
          <div className="db-mid-grid">

            <div className="db-card db-card--wide">
              <div className="card-header">
                <h3>Recent Campaigns</h3>
                <button className="card-action" onClick={go404}>View All <FaChartLine /></button>
              </div>
              <div className="table-wrap">
                <table className="db-table">
                  <thead>
                    <tr>
                      <th>Campaign</th>
                      <th>Status</th>
                      <th>Leads</th>
                      <th>Budget</th>
                      <th>CTR</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c, i) => (
                      <tr key={i}>
                        <td className="campaign-name">{c.name}</td>
                        <td><StatusBadge status={c.status} /></td>
                        <td>{c.leads}</td>
                        <td>{c.budget}</td>
                        <td>{c.ctr}</td>
                        <td><button className="row-action" onClick={go404}><FaEllipsisV /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="db-card">
              <div className="card-header">
                <h3>Recent Activity</h3>
                <button className="card-action" onClick={go404}>Clear All</button>
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

          {/* ── LEAD SOURCES + QUICK TASKS + TOP CHANNELS ── */}
          <div className="db-bottom-grid">

            <div className="db-card">
              <div className="card-header">
                <h3>Lead Sources</h3>
              </div>
              <div className="lead-sources">
                {leadSources.map((l, i) => (
                  <div key={i} className="lead-source-row">
                    <span className="ls-label">{l.source}</span>
                    <div className="ls-bar-wrap">
                      <div className="ls-bar" style={{ width: `${l.pct}%`, background: l.color }} />
                    </div>
                    <span className="ls-pct">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="db-card">
              <div className="card-header">
                <h3>Quick Tasks</h3>
                <button className="card-action" onClick={go404}>+ Add Task</button>
              </div>
              <ul className="task-list">
                {[
                  { done: true,  text: "Review Q2 SEO report" },
                  { done: true,  text: "Approve Facebook ad creatives" },
                  { done: false, text: "Set up LinkedIn retargeting" },
                  { done: false, text: "Update landing page copy" },
                  { done: false, text: "Schedule June email newsletter" },
                ].map((t, i) => (
                  <li key={i} className={`task-item ${t.done ? "task-done" : ""}`} onClick={go404} style={{ cursor: "pointer" }}>
                    <span className="task-check">
                      {t.done ? <FaCheckCircle /> : <span className="task-circle" />}
                    </span>
                    <span>{t.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="db-card">
              <div className="card-header">
                <h3>Top Channels</h3>
              </div>
              <div className="channels-list">
                {[
                  { name: "Google Ads", revenue: "$5,400", roas: "4.5×", icon: "G"  },
                  { name: "Facebook",   revenue: "$3,200", roas: "3.2×", icon: "f"  },
                  { name: "Email",      revenue: "$2,100", roas: "6.8×", icon: "✉"  },
                  { name: "LinkedIn",   revenue: "$1,800", roas: "2.9×", icon: "in" },
                ].map((ch, i) => (
                  <div key={i} className="channel-row" onClick={go404} style={{ cursor: "pointer" }}>
                    <div className="channel-logo">{ch.icon}</div>
                    <div className="channel-info">
                      <strong>{ch.name}</strong>
                      <span>{ch.revenue} revenue</span>
                    </div>
                    <div className="channel-roas">{ch.roas} ROAS</div>
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

export default Dashboard;