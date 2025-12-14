import { Link } from "react-router-dom";
import "./Books.css";

export default function BooksList({ books, deleteBook, setEditingBook }) {
  return (
    <div className="cards-grid">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.price}</p>
          <Link to={`/book/${book.id}`}>View details</Link>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setEditingBook(book)} style={{marginRight:"5px"}}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
