import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Books.css";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/books.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(b => b.id === Number(id));
        setBook(found);
      });
  }, [id]);

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="container character-detail">
      <Link to="/books" className="back-link">⬅ Back to books</Link>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <h3>{book.price}</h3>
      <p>{book.description}</p>
      <button className="buy-btn">Buy now</button>
    </div>
  );
}
