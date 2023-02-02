import React from "react";
import { useState, useEffect } from "react";
import "./createFarmer.css";
import { useNavigate } from "react-router-dom";

const CreateFarmer = () => {
  const [varieties,setVarieties] = useState([])
  const[loading,setLoading] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("ftoken")) {
      navigate("/login");
    }
    else{
      getVaritiesApi()
    }
  }, []);
  const [farmerDetails, setFarmerDetails] = useState({
    name: "",
    vno: "",
    address: "",
    variety: "others",
    datetime:""
  });

  useEffect(()=>{
    setFarmerDetails({...farmerDetails,variety:varieties[0]?.name})
  },[varieties])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails({ ...farmerDetails, [name]: value });
  };
  const changeVariety = (e) => {
    setFarmerDetails({ ...farmerDetails, variety: e.target.value });
  };

  const getVaritiesApi = async()=>{
    setLoading(true)
    try {
      const response = await fetch("http://localhost:7000/varieties/all",{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          token:localStorage.getItem("ftoken")
        },
        
      })
      console.log(response)
      const json = await response.json()
      setVarieties(json)
      console.log(json)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)

    }
  }
  const createFarmerAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/farmers/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:localStorage.getItem("ftoken")
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
            required
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
            required
              onChange={handleChange}
              name="vno"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="datetime" class="form-label">
             DateTime
            </label>
            
            <input
            required
              onChange={handleChange}
              name="datetime"
              type="datetime-local"
              class="form-control"
              id="datetime"
            />
          </div>
          <div class="mb-3">
            <label for="variety" class="form-label">
              Variety
            </label>
            <div class="dropdown">
              <select
              required
                onChange={changeVariety}
                className="variety-farmer"
                name="variety"
                id="variety"
              >
                {loading ?  <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div> :
                  varieties?.map((item,ind)=>{
                    return <option value={item?.name}>{item?.name}</option>
                  })
                }
                {/* <option value="hemapasadh">hemapasadh</option> */}
                {/* <option value="hemapasadh">hemapasadh</option> */}
               {!loading && <option value="others">others</option>}
                {/* <option value="rejected">Rejected</option> */}
              </select>
            </div>
          </div>
          
         {farmerDetails.variety === "others" && <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
             Other
            </label>
            <input
            required
            value={farmerDetails?.others}
              onChange={handleChange}
              name="others"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>}
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Farmer Address
            </label>
            <textarea
            required
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
