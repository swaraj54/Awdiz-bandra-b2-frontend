import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../configs/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setLastVisitedUrl } from "../../redux/slices/authSlice";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const user = useSelector((state) => state.auth.user);
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
  async function addToCart() {
    if (user && user?.id) {
      try {
        const response = await axiosInstance.get(`/user/add-cart/${id}`);
        if (response.data.success) {
          alert("Product added to cart successfully.");
          router("/view-cart");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please login to add product to cart.");
      dispatch(setLastVisitedUrl(`/single-product-page/${id}`));
      router("/login");
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
        <div
          style={{
            textAlign: "center",
            height: "100vh",
            width: "50%",
            margin: "auto",
          }}
        >
          <img
            style={{ height: "400px", width: "100%" }}
            src={productData.img}
          />
          <h2>{productData.name}</h2>
          <h2>{productData.price}/-</h2>
          <button onClick={addToCart}>Add Cart</button>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
