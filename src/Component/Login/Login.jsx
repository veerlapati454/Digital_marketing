import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailWarning, setEmailWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");

  useEffect(() => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email === "") {
      setEmailWarning("");
    } else if (!gmailRegex.test(email)) {
      setEmailWarning("Only Gmail addresses are allowed");
    } else {
      setEmailWarning("");
    }
  }, [email]);

  useEffect(() => {
    if (password === "") {
      setPasswordWarning("");
    } else if (password.length < 6) {
      setPasswordWarning("Password must be at least 6 characters");
    } else {
      setPasswordWarning("");
    }
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      alert("Only Gmail addresses are allowed");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("role", role);

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="back-btn">
          <HiArrowLeft />
          Back
        </Link>

        <h1>Welcome</h1>

        <p className="subtitle">
          Login to continue managing your campaigns.
        </p>

        <div className="role-selector">
          <button
            type="button"
            className={role === "user" ? "active-role" : ""}
            onClick={() => setRole("user")}
          >
            User Login
          </button>

          <button
            type="button"
            className={role === "admin" ? "active-role" : ""}
            onClick={() => setRole("admin")}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {emailWarning && (
              <small className="warning-text">
                {emailWarning}
              </small>
            )}
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {passwordWarning && (
              <small className="warning-text">
                {passwordWarning}
              </small>
            )}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

      

        <div className="social-login">
          <Link to="/404" className="social-btn">
            <FaGoogle />
            Continue with Google
          </Link>

          <Link to="/404" className="social-btn">
            <FaLinkedinIn />
            Continue with LinkedIn
          </Link>
        </div>

        <p className="signup-link">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;