import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import "./Signup.css";
import toast from 'react-hot-toast';


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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value.replace(/[^A-Za-z\s]/g, ""));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value.replace(/[^A-Za-z]/g, ""));
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

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
    if (e.target.checked) setTermsError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please enter a valid Gmail address");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      setTermsError("You must accept the Terms & Conditions to register.");
      return;
    }

    toast.success("Account created! Redirecting to login...", {
    duration: 2000,
  });

  setTimeout(() => {
    navigate("/login");
  }, 2000);

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
            {emailError && <span className="error-message">{emailError}</span>}
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
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
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
              <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="input-group terms-group">
            <label className="terms-label">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
              />
              <span className="checkmark"></span>
              I agree to the{" "}
              <Link to="/terms" className="terms-link">
                Terms & Conditions
              </Link>
            </label>
            {termsError && <span className="error-message">{termsError}</span>}
          </div>

          <button className="signup-btn" type="submit">
            Create Account
          </button>

        </form>

        

        <div className="social-login">
          <button className="social-btn" onClick={() => navigate("/404")}>
            <FaGoogle />
            Continue with Google
          </button>
          <button className="social-btn" onClick={() => navigate("/404")}>
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