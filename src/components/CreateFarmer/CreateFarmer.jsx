import React from "react";
import { useState, useEffect } from "react";
import "./createFarmer.css";
import { useNavigate } from "react-router-dom";

const CreateFarmer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("farmerlogin")) {
      navigate("/login");
    }
  }, []);
  const [farmerDetails, setFarmerDetails] = useState({
    name: "",
    vehicleNo: "",
    address: "",
    variety: "grade1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails({ ...farmerDetails, [name]: value });
  };
  const changeVariety = (e) => {
    setFarmerDetails({ ...farmerDetails, variety: e.target.value });
  };

  const createFarmerAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(farmerDetails),
      });
      console.log(response);
      if (response.status === 200) {
        const json = await response.json();

        console.log(json);
        alert("Farmer Created Successfully");
      } else {
        alert("Couldn't Create Farmer");
      }
    } catch (error) {
      alert("Couldn't Create Farmer");
      console.log(error);
    }
  };
  return (
    <div className="flexxrowcreatefarm">
      <div className="widthcreate">
        <h3 className="createfarmhead">Create New Farmer</h3>

        <form onSubmit={createFarmerAPI}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Farmer Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Vehicle No
            </label>
            <input
              onChange={handleChange}
              name="vehicleNo"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="variety" class="form-label">
              Variety
            </label>
            <div class="dropdown">
              <select
                onChange={changeVariety}
                className="variety-farmer"
                name="variety"
                id="variety"
              >
                <option value="grade1">Grade-1</option>
                <option value="grade2">Grade-2</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Farmer Address
            </label>
            <textarea
              onChange={handleChange}
              name="address"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Create Farmer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFarmer;
