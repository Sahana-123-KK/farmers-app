import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FarmerData from "../FarmerData/FarmerData";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("farmerlogin")) {
      navigate("/login");
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [farmers, setFarmers] = useState([
    {
      name: "Anubhav Singh",
      vehicleNo: "23432",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis delectus maxime cupiditate porro dignissimos? Eius excepturi molestiae nesciun",
    },
    {
      name: "Haseena Malik",
      vehicleNo: "232354432",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis delectus maxime cupiditate porro dignissimos? Eius excepturi molestiae nesciun",
    },
    {
      name: "Shivaay Singh Oberoi",
      vehicleNo: "23423532",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis delectus maxime cupiditate porro dignissimos? Eius excepturi molestiae nesciun",
    },
  ]);

  const getFarmersDataAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setFarmers(json);
        setLoading(false);
      } else {
        console.log("Couldn't get Details");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFarmersDataAPI();
  }, []);
  return (
    <div className="flexxrowdash">
      <div className="flexxdashcol">
        <h3 className="headdash sticky-top">Farmers' Dashboard</h3>
        <div className="flexxcolallfarmers">
          {loading ? (
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : farmers.length === 0 ? (
            "No Farmers To Display Data"
          ) : (
            farmers?.map((item, ind) => {
              return <FarmerData data={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
