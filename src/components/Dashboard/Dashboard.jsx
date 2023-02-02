import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FarmerData from "../FarmerData/FarmerData";
import { CSVLink } from "react-csv";
// This is to convert the data to csv file which is downloadable
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("ftoken")) {
      navigate("/login");
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [farmers, setFarmers] = useState([]);

  const getFarmersDataAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:7000/farmers/getfarmers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:localStorage.getItem("ftoken")
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
        <h3 className="headdash sticky-top">Farmers' Dashboard
       {!loading && <CSVLink data={farmers} className="btn btn-primary my-3" filename="FarmersData" >Download Data</CSVLink>}
        </h3>
       

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
