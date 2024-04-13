import React, { useContext, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    localStorage.setItem("email", formData.email);
    navigate("/");
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field ">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="enter your email ..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="enter your password ..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field button">
            <button type="submit" className="btn-primary btn">
              Login
            </button>
          </div>
          <div class="login-signup">
            <span class="text">
              Not a member?
              <Link to="/sign-up" class="text login-link">
                Sign Up Now
              </Link>
            </span>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
