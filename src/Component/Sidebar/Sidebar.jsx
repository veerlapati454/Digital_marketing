import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBullhorn,
  FaChartLine,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const role = localStorage.getItem("role") || "user";

  const userMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Campaigns",
      path: "/404",
      icon: <FaBullhorn />,
    },
    {
      name: "Analytics",
      path: "/404",
      icon: <FaChartLine />,
    },
    {
      name: "Reports",
      path: "/404",
      icon: <FaFileAlt />,
    },
    {
      name: "Settings",
      path: "/404",
      icon: <FaCog />,
    },
  ];

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Users",
      path: "/404",
      icon: <FaBullhorn />,
    },
    {
      name: "Campaigns",
      path: "/404",
      icon: <FaChartLine />,
    },
    {
      name: "Revenue",
      path: "/404",
      icon: <FaFileAlt />,
    },
    {
      name: "Settings",
      path: "/404",
      icon: <FaCog />,
    },
  ];

  const menu = role === "admin" ? adminMenu : userMenu;

  return (
    <>
      {/* Mobile Hamburger */}

      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-top">

          <h2>DigiMax</h2>

          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <ul>

          {menu.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "active-link"
                    : ""
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

        </ul>

        <div className="logout-section">

          <Link to="/login" className="logout-btn">
            <FaSignOutAlt />
            Logout
          </Link>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;