import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logoutFnc = () => {
    localStorage.removeItem("farmerlogin");
    navigate("/login");
    alert("Logged Out Successfully");
    window.location.reload()

  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary customnav sticky-top">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Farmers' Admin
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link   ">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/createfarmer" className="nav-link">
                Create Farmer
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="flexxrowbtnnav">
          <button onClick={logoutFnc} className="btn btn-primary btn-lg">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
