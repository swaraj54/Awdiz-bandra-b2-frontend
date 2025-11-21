import React, { useRef, useState } from "react";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/auth/login",
        //   { userData }
        // );
        const response = {
          data: {
            success: true,
            userData: {
              username: "swaraj54",
              user: "Swaraj Jadhav",
              profileImgUrl: "htps;awdwadawdwadwa",
            },
          },
        };
        if (response.data.success) {
          dispatch(login(response.data.userData));
          setUserData({
            email: "",
            password: "",
          });
          alert("Login COmpleted.");
          router("/");
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
