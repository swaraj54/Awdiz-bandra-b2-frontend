import { useNavigate } from "react-router";

function Home() {
  const router = useNavigate();

  return (
    <div>
      <h1>Welcome to Home Page</h1>
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
