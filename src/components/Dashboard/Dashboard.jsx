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
      variety: "grade1",
      date: "12-04-2022",
    },
    {
      name: "Haseena Malik",
      vehicleNo: "232354432",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis delectus maxime cupiditate porro dignissimos? Eius excepturi molestiae nesciun",
      variety: "grade2",
      date: "22-11-2022",
    },
    {
      name: "Shivaay Singh Oberoi",
      vehicleNo: "23423532",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis delectus maxime cupiditate porro dignissimos? Eius excepturi molestiae nesciun",
      variety: "rejected",
      date: "12-09-2022",
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
            <div className="flexxcol">
              <div className="flexxrowdatafarm2">
                <p className="fname">Farmer Name</p>
                <p className="fvno">Vehicle No</p>
                <p className="faddress">Address </p>
                <p className="fvariety">Variety </p>
                <p className="fdate">Date</p>
              </div>

              {farmers?.map((item, ind) => {
                return <FarmerData data={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
