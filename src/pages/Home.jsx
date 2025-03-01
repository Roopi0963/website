import { Link } from "react-router-dom";
import "../styles/styles.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <p>Navigate to login or signup:</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Home;
