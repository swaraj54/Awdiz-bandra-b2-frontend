import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const FakeProducts = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data, "response");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {products.map((singleProduct) => (
            <div
              onClick={() => router(`/fake-single-product/${singleProduct.id}`)}
              style={{
                width: "19%",
                border: "1px solid black",
                height: "350px",
                borderRadius: "10px",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <img
                style={{ height: "70%", width: "100%" }}
                src={singleProduct.image}
              />
              <h3>{singleProduct.title}</h3>
              <h3>{singleProduct.price}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FakeProducts;
