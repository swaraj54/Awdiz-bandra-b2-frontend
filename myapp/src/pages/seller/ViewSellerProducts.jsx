import React, { useEffect } from "react";
import axiosInstance from "../../configs/axiosConfig";

const ViewSellerProducts = () => {
  const [products, setProducts] = React.useState([]);
  console.log(products, "products");
  async function getSellerProducts() {
    try {
      const response = await axiosInstance.get("/seller/view-added-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSellerProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <div
          style={{
            width: "19%",
            height: "350px",
            border: "1px solid gray",
            margin: "10px 0px",
            borderRadius: "10px",
          }}
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
            <p>Category: {product.category}</p>
            <p>Stock : {product.stock}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewSellerProducts;
