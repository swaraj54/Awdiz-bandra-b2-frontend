import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import ViewProducts from "./user/ViewProducts";

function Home() {
  const router = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user, "user in home page");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Home Page {user?.name}</h1>
      <ViewProducts />
    </div>
  );
}

export default Home;
