import { useNavigate } from "react-router";

import { useSelector } from "react-redux";

function Home() {
  const router = useNavigate();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome to Home Page {user?.user}</h1>
      <button
        onClick={() => {
          router("/use-effect");
        }}
      >
        Go to UseEffect Page
      </button>
    </div>
  );
}

export default Home;
