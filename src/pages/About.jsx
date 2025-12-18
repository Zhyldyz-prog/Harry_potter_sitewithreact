import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Our Store</h1>
      <div className="about-content">
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            Welcome to the magical world of Harry Potter! We aim to bring the 
            magic of books to life and create a unique reading experience for all fans.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Collection</h3>
          <p>
            In our store, you'll find all the Harry Potter books, souvenirs, 
            collectible editions, and much more for true fans of the series.
          </p>
        </div>
        <div className="about-section">
          <h3>Why Choose Us</h3>
          <p>
            Enjoy a cozy atmosphere, magical products, and regular collection updates, 
            allowing every visitor to feel part of the wizarding world.
          </p>
        </div>
      </div>
    </div>
  );
}
