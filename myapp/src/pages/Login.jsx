import React, { useRef, useState } from "react";
import { login } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import axiosInstance from "../configs/axiosConfig";

const Login = () => {
  const urlData = useSelector((state) => state.auth.lastVisitedUrl);
  const router = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [userData, setUserData] = useState({
    email: "user5@gmail.com",
    password: "a",
  });
  console.log(userData, "userData");
  const handleChange = (event) => {
    console.log("value: ", event.target.value);
    console.log("name: ", event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userData.email || !userData.password) {
        alert("All fields are required.");
      } else {
        // api call
        const response = await axiosInstance.post("/auth/login", userData);
        if (response.data.success) {
          dispatch(login(response.data.userData));
          setUserData({
            email: "",
            password: "",
          });
          alert(response.data.message);
          if (urlData) {
            router(urlData);
            dispatch(clearLastVisitedUrl());
          } else {
            router("/");
          }
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const handleView = (event) => {
    event.preventDefault();
    setPasswordType("text");
    setTimeout(() => {
      setPasswordType("password");
    }, 2000);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Login / Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input
          value={userData.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          value={userData.password}
          name="password"
          type={passwordType}
          onChange={handleChange}
        />
        <button onClick={handleView}>View</button>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
