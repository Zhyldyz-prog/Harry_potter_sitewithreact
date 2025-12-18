import { useEffect, useState } from "react";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

export default function BooksManager() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetch("/books.json")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(b => b.id === updatedBook.id ? updatedBook : b));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div className="container">
      <h2>Harry Potter Books</h2>
      <AddBook addBook={addBook} />
      <BooksList
        books={books}
        deleteBook={deleteBook}
        setEditingBook={setEditingBook}
      />
      {editingBook && (
        <EditBook book={editingBook} updateBook={updateBook} />
      )}
    </div>
  );
}
