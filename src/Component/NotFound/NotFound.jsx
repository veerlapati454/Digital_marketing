import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">

      <div className="notfound-content">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist
          or has been moved to another location.
        </p>

        <div className="notfound-buttons">

          <Link to="/" className="home-btn">
            Go Home
          </Link>

          <Link to="/contact" className="support-btn">
            Contact Support
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;