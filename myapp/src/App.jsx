import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UseState from "./pages/UseState";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/use-state" element={<UseState />} />
      {/* <Route path="/use-effect" element={<UseEffect />} /> */}
    </Routes>
  );
}

export default App;
