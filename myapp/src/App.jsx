import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import { useState } from "react";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tshirt",
      price: 20,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: 40,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 3,
      name: "Jacket",
      price: 60,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 4,
      name: "Sneakers",
      price: 80,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 5,
      name: "Hat",
      price: 15,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 6,
      name: "Socks",
      price: 5,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 7,
      name: "Belt",
      price: 10,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 8,
      name: "Scarf",
      price: 12,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 9,
      name: "Gloves",
      price: 18,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
    {
      id: 10,
      name: "Sunglasses",
      price: 25,
      imgUrl: "https://m.media-amazon.com/images/I/71Lgg+zrrgL._AC_UY1100_.jpg",
    },
  ]);
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/products" element={<Products products={products} />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
