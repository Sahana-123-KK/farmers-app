import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("ftoken")) {
      navigate("/");
    }
  }, []);
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const loginAPI = async (e) => {
    e.preventDefault();
    // localStorage.setItem("farmerlogin", true);
    // window.location.reload()
    // navigate("/");
    try {
      const response = await fetch("http://localhost:7000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginCred),
      });
      console.log(response);

      if (response.status === 200) {
        alert("Logged In Successfully");
        const json = await response.json();
        console.log(json);
        localStorage.setItem("ftoken",json.token)
        // localStorage.setItem("farmerlogin",true)
        navigate("/")
        window.location.reload()
      } else {
        alert("Couldn't Login");
      }
    } catch (error) {
      console.log(error);
      alert("Couldn't Login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({ ...loginCred, [name]: value });
  };
  return (
    <div className="align-all">
      <div className="formlogin">
        <h4 className="headlogin">Farmers Admin Login</h4>
        <form onSubmit={loginAPI}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
