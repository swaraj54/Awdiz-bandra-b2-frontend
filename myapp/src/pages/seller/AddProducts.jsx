import { useState } from "react";
import axiosInstance from "../../configs/axiosConfig";
import { useNavigate } from "react-router";

const AddProducts = () => {
  const router = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "clothing",
    stock: "",
    img: "",
  });
  console.log(productData, "productData");
  const handleChange = (event) => {
    console.log("value: ", event.target.value);
    console.log("name: ", event.target.name);
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        !productData.name ||
        !productData.description ||
        !productData.price ||
        !productData.category ||
        !productData.stock ||
        !productData.img
      ) {
        alert("All fields are required.");
      } else {
        const response = await axiosInstance.post(
          "/seller/add-products",
          productData,
        );
        if (response.data.success) {
          setProductData({
            name: "",
            description: "",
            price: "",
            category: "clothing",
            stock: "",
            img: "",
          });
          alert(response.data.message);
          router("/seller/view-products");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Add New Products </h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          value={productData.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <br />
        <input
          value={productData.description}
          name="description"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>price:</label>
        <br />
        <input
          value={productData.price}
          name="price"
          type="number"
          onChange={handleChange}
        />
        <br />

        <label>Category:</label>
        <br />
        <select
          value={productData.category}
          name="category"
          onChange={handleChange}
        >
          <option value="clothing">Clothing</option>
          <option value="footwear">Footwear</option>
          <option value="electronics">Electronics</option>
        </select>
        <br />
        <label>Image:</label>
        <br />
        <input
          value={productData.img}
          type="url"
          name="img"
          onChange={handleChange}
        />
        <br />

        <label>Stock:</label>
        <br />
        <input
          value={productData.stock}
          type="number"
          name="stock"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
