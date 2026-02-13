import React, { useEffect } from "react";
import axiosInstance from "../../configs/axiosConfig";
import { useNavigate } from "react-router";

const Viewcart = () => {
  const router = useNavigate();
  const [products, setProducts] = React.useState([]);
  console.log(products, "products");
  async function getCartProducts() {
    try {
      const response = await axiosInstance.get("/user/get-cart-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function PlaceOrder() {
    try {
      const response = await axiosInstance.get("/user/place-order");
      if (response.data.success) {
        alert(response.data.message);
        router("/orders");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCartProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "75%",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            style={{
              width: "19%",
              height: "450px",
              border: "1px solid gray",
              margin: "10px 0px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => router(`/single-product-page/${product._id}`)}
          >
            <img
              style={{ height: "70%", width: "100%", borderRadius: "10px" }}
              src={
                product.img ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScTRb_HQr0nNuaGsg7TAI-llef79uoF1UHA&s"
              }
              alt="No Image found"
            />
            <div style={{ padding: "4px 20px" }}>
              <h3>{product.name}</h3>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", width: "60%" }}>
                  <button style={{ width: "20px", textAlign: "center" }}>
                    +
                  </button>
                  <input
                    style={{
                      width: "20px",
                      textAlign: "center",
                      margin: "0px 6px",
                    }}
                    value={1}
                  />
                  <button style={{ width: "20px", textAlign: "center" }}>
                    -
                  </button>
                </div>
                <div style={{ display: "flex", width: "30%" }}>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "15%",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2>Order Details</h2>
        <p>Coupon : </p> <input />
        <button>Apply</button>
        <p>Total Price : </p>
        <button onClick={PlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Viewcart;
