import React, { useEffect } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../configs/axiosConfig";

const SingleProductPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [productData, setProductData] = React.useState({});
  console.log(productData, "productData");
  const { id } = useParams();
  async function getSingleProductData() {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/common/view-single-product/${id}`,
      );
      if (response.data.success) {
        setProductData(response.data.product);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={productData.img} />
          <h2>{productData.name}</h2>
          <h2>{productData.price}/-</h2>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
