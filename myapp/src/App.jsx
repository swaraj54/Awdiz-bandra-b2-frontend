import { Route, Routes, useNavigate, useParams } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import { useEffect, useState } from "react";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseRef from "./pages/UseRef";
import UseReducer from "./pages/UseReducer";
import ContextApi from "./pages/ContextApi";
import Todo from "./pages/Todo";
import FakeProducts from "./pages/FakeProducts";
import FakeSingleProduct from "./pages/FakeSingleProduct";
import ReduxCounter from "./pages/ReduxCounter";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./configs/axiosConfig";
import { login } from "./redux/slices/authSlice";
import AddProducts from "./pages/seller/AddProducts";
import ViewSellerProducts from "./pages/seller/ViewSellerProducts";
import ViewProducts from "./pages/user/ViewProducts";
import SingleProductPage from "./pages/user/SingleProductPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
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

  async function getUserData() {
    try {
      const res = await axiosInstance.get("/auth/get-current-user");
      if (res.data.success) {
        dispatch(login(res.data.user));
        console.log("Current User:", res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(user && !user?.name, user, !user?.name, "user && !user?.name");
    if (!user?.name) {
      getUserData();
    }
  }, [user]);
  return (
    <>
      <Navbar />
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
        <Route path="/todo" element={<Todo />} />
        <Route path="/fake-products" element={<FakeProducts />} />
        <Route
          path="/fake-single-product/:productId"
          element={<FakeSingleProduct />}
        />
        <Route path="/redux-counter" element={<ReduxCounter />} />

        {/* // seller routes  */}
        <Route path="/seller/add-products" element={<AddProducts />} />
        <Route path="/seller/view-products" element={<ViewSellerProducts />} />
        {/* <Route path="/view-orders" element={<ViewOrders />} /> */}

        {/* User Routes  */}
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/single-product-page/:id" element={<SingleProductPage />} />

        {/* // admin routes  */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;

// http://localhost:5137/login

// http://localhost:8000/login

// Completed Topics
// useState  -   ajwkdnwaokdmawmdk
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
// todo application
// Form handling - 1 lectures REGISTER LOGIN
// Deployment of frontend application
// implement backend api into frontend application - 1 lecture - fakestoreapi
// Redux - 1 lectrures

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
// Nykaa

// 14-11-2025 Navbar - 3 -
// 16-11-2025 Home Page- https://www.nykaa.com/ -
// 17-11-2025 Login Page- https://www.nykaa.com/auth
// 17-11-2025 Register Page- https://www.nykaa.com/auth
// 19-11-2025 Products Page- https://www.nykaa.com/mens/beard-care/beard-oil/c/2799
// 21-11-2025 Single Product page - https://www.nykaa.com/the-man-company-almond-thyme-beard-oil/p/40193?productId=40193&pps=1
// 23-11-2025 Cart Page -
// 26-11-2025 Orders Page
// 28-11-2025 Profile Page

// total 5.30 hour s daily

// 10 am - 11 am - do revision - theory - based on your notes / create notes

// 2-4 pm - practice coding - chatgpt - topics - send me interview questions - eg todo list

// 7-8pm MWF - 7-9pm TTSS - project work - html css

// 8-9 pm MWF - lecture

// 10.30 - 11 pm - go through youtube interview question videos  - important questions

// TEST

// 29-11 Pratical Test - eg - coding - create todo application with redux
// 2-12 Theory Test - What is usestate ?
// 3-12 Mock interview - Intro , educatiion, projects , questions
