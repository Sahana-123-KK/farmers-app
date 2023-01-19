import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("farmerlogin")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flexxrowhome">
      <div className="flexxrowlinks">
        <Link to="/createfarmer">Create Farmer</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
