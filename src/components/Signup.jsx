import React, { useContext, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
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
              placeholder="enter the password ..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Confirmation Password</label>
            <input
              type="password"
              name="confirmationPassword"
              value={confirmationPassword}
              placeholder="enter the password confirmation ..."
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
          </div>
          <div className="field button">
            <button type="submit" className="btn-primary btn">
              Sigu up
            </button>
          </div>
          <div class="login-signup">
            <span class="text">
              Alreday a member?
              <Link to="/login" class="text login-link">
                Login Now
              </Link>
            </span>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
