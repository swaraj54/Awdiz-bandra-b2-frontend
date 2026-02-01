import axios from "axios";
import React, { useRef, useState } from "react";
import axiosInstance from "../configs/axiosConfig";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "user",
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
      if (
        !userData.name ||
        !userData.email ||
        !userData.password ||
        !userData.confirmPassword ||
        !userData.phone
      ) {
        alert("All fields are required.");
      } else {
        console.log("else");
        if (userData.password === userData.confirmPassword) {
          // api call
          const response = await axiosInstance.post("/auth/register", userData);
          // userData : {
          //   name: "",
          //   email: "",
          //   password: "",
          //   confirmPassword: "",}
          console.log(response, "response from register");
          if (response.data.success) {
            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "user",
              phone: "",
            });
            alert(response.data.message);
          }
        } else {
          alert("Password and Confirm password not matched,");
        }
      }
    } catch (error) {
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
      <h1>Register / Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          value={userData.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>Role:</label>
        <br />
        <select value={userData.role} name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <label>Email:</label>
        <br />
        <input
          value={userData.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          value={userData.phone}
          name="phone"
          type="number"
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
        <label>Confirm Password:</label>
        <br />
        <input
          value={userData.confirmPassword}
          name="confirmPassword"
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

export default Register;
