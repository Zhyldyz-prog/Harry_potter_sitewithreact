import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>Wizard</span>Books
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
