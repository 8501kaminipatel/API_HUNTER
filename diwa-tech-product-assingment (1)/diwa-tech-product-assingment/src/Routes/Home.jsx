import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <nav>

        <Link to="/login">
          <h3 data-testid="login-link">Login Page</h3>
        </Link>
        <Link to="/dashboard">
          <h3 data-testid="home-link">Dashboard</h3>
        </Link>
      </nav>
      <h1 style={{ width: "100%", alignItems: "center" }}>This is Home Page !!</h1>
    </div>
  );
}
export default Home;
