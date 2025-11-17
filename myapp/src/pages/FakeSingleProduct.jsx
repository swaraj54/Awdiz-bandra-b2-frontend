import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const FakeSingleProduct = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({});
  const { productId } = useParams();
  const getSingleProductData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (productId) {
      getSingleProductData();
    }
  }, [productId]);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={productData.image} />
          <h2>{productData.title}</h2>
          <h2>{productData.price}/-</h2>
        </div>
      )}
    </div>
  );
};

export default FakeSingleProduct;
