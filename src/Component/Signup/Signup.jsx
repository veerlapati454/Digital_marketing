import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleFullName = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setFullName(value);
  };

  const handleUsername = (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, "");
    setUsername(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();

    setEmail(value);

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (value === "") {
      setEmailError("");
    } else if (!gmailRegex.test(value)) {
      setEmailError("Please enter a valid Gmail address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please enter a valid Gmail address");
      return;
    }

    if (password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      alert("Password must contain at least one special character");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully");
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <Link to="/" className="back-btn">
          <HiArrowLeft />
          Back
        </Link>

        <h1>Create Account</h1>

        

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={handleFullName}
              required
            />
          </div>

          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={handleUsername}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
              className={emailError ? "error" : ""}
              required
            />

            {emailError && (
              <span className="error-message">
                {emailError}
              </span>
            )}
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
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
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>
          </div>

          <button className="signup-btn" type="submit">
            Create Account
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">

          <button className="social-btn">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="social-btn">
            <FaLinkedinIn />
            Continue with LinkedIn
          </button>

        </div>

        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;