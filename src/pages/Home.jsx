import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-overlay">
        <h1>Welcome to the Wizarding World</h1>
        <p>
          Discover the legendary Harry Potter book series.  
          Magic, friendship, and adventure await you.
        </p>

        <Link to="/books" className="home-btn">
          Explore Books
        </Link>
      </div>
    </section>
  );
}
