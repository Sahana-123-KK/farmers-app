import React, { useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();
  const[username,setUsername] = useState("")

  const getUser = async()=>{
    try {
      const response = await fetch("http://localhost:7000/dashboard",{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          token:localStorage.getItem("ftoken")
        }
      })
      console.log(response)
      const json = await response.json()
      console.log(json)
      setUsername(json?.user_name)
      localStorage.setItem("usernamef",json?.user_name)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (!localStorage.getItem("ftoken")) {
      navigate("/login");
    }
    else{
      getUser()
    }
  }, []);
  return (
    <div className="flexxrowhome">
        {/* <h2 className="namelogin"> {username}</h2> */}
      <div className="flexxrowlinks">
        <Link to="/createfarmer">Create Farmer</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
