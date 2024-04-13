import React, { useEffect, useState } from "react";
import SideBar from "./SideBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";
import useLogout from "../utils/logout.js";
import logout from "./../utils/logout";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const user = localStorage.getItem("email");
  const navigate = useNavigate();
  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="">
      {isMobile ? (
        <>
          <SideBar />
          <div className="side-brand">
            <Link to="/" className="navbar-brand">
              MKB Game
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="side-brand">
            <Link to="/" className="navbar-brand">
              MKB Game
            </Link>
          </div>
          <div className="navbar-list" id="navbarSupportedContent">
            <ul className="nav-list ml-auto">
              <li className=" ">
                <Link to="#" className="nav-link">
                  About us
                </Link>
              </li>
              {user ? (
                <li className=" ">
                  <button onClick={handleLogout} className="nav-link">
                    Logout
                  </button>
                </li>
              ) : (
                <li className=" ">
                  <Link to="login" className="nav-link">
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
