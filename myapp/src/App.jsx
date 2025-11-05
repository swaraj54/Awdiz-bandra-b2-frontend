import { Route, Routes, useNavigate, useParams } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import { useState } from "react";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseRef from "./pages/UseRef";
import UseReducer from "./pages/UseReducer";
import ContextApi from "./pages/ContextApi";

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
      <Route path="/use-memo" element={<UseMemo />} />
      <Route path="/use-callback" element={<UseCallback />} />
      <Route path="/use-ref" element={<UseRef />} />
      <Route path="/use-reducer" element={<UseReducer />} />
      <Route path="/context-api" element={<ContextApi />} />
    </Routes>
  );
}

export default App;


// useState 
// useEffect 
// useNavigate
// useParams 
// useMemo 
// memo()
// useCallback
// useRef 
// useReducer 
// useContext 
// Context api 


// Redux - 1 lectrures
// Form handling - 1 lectures
// Deployment of frontend application 
// implement backend api into frontend application - 1 lecture


// Project 
// Repo - Amazon clone - 
// install react app 
// routing 
// redux setup 
// authentication - register login
// 2 roles - user , admin
// admin - add Project , edit Project, delete products 
// user - view products , add to cart , checkout ( mock payment )


// Friday - create repor 
// install react app 
// routing 
// login register page

