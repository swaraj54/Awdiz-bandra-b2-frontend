import React from "react";
import { useNavigate } from "react-router";

const Products = ({ products }) => {
  const router = useNavigate();
  console.log(products, "props in products page");
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {products.map((singleProduct) => (
          <div
            style={{
              width: "18%",
              height: "200px",
              border: "1px solid black",
              marginBottom: "20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => router(`/single-product/${singleProduct.id}`)}
          >
            <img
              style={{ width: "100%", height: "160px", borderRadius: "10px" }}
              src={singleProduct.imgUrl}
            />
            <p style={{ fontSize: "12px" }}>{singleProduct.name}</p>
            <p style={{ fontSize: "12px" }}>{singleProduct.price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
