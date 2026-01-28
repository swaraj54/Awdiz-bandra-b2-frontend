import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../configs/axiosConfig";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router";

const Navbar = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  async function LogoutApiCall() {
    try {
      const reponse = await axiosInstance.get("/auth/logout");
      if (reponse.data.success) {
        dispatch(logout());
        alert(reponse.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderBottom: "2px solid black",
        height: "70px",
        alignItems: "center",
      }}
    >
      <h2 style={{ cursor: "pointer" }}>Home</h2>
      <h2 style={{ cursor: "pointer" }}>Products</h2>
      {user?.name ? (
        <h2 onClick={LogoutApiCall} style={{ cursor: "pointer" }}>
          Logout
        </h2>
      ) : (
        <>
          <h2 onClick={() => router("/register")} style={{ cursor: "pointer" }}>
            Register
          </h2>
          <h2 onClick={() => router("/login")} style={{ cursor: "pointer" }}>
            Login
          </h2>
        </>
      )}
    </div>
  );
};

export default Navbar;
