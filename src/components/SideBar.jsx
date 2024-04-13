import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <button
        className="sidebar-button"
        onClick={() => {
          setShowSideBar(true);
        }}
      >
        <i className="fas fa-align-justify"></i>
      </button>
      <div className={`${showSideBar ? "sidebar-show" : "sidebar-notshow"} `}>
        <button
          onClick={() => {
            setShowSideBar(false);
          }}
          className="cancel-button"
        >
          <i className="fas fa-x"></i>
        </button>
        <ul className={`${showSideBar ? "show" : "notshow"} side-list `}>
          <li>
            <Link className="navbar-brand" to="#">
              MKB Game
            </Link>
          </li>
          <li>Main </li>
          <li>Rules</li>
          <li>About us</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
