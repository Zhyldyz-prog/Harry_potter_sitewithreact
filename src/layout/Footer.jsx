import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>WizardBooks</h3>
          <p>
            Enter the magical world of Harry Potter.  
            Discover books, stories, and legendary adventures.
          </p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/about">About</a>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WizardBooks — All Rights Reserved
      </div>
    </footer>
  );
}
