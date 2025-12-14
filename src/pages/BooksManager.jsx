import { useState } from "react";
import { books as initialBooks } from "../data/books";
import BooksList from "./BooksList";
import BookDetail from "./BookDetail";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

export default function BooksManager() {
  const [books, setBooks] = useState(initialBooks);
  const [editingBook, setEditingBook] = useState(null);

  // Добавление книги
  const addBook = (book) => {
    const newBook = { ...book, id: books.length + 1 };
    setBooks([...books, newBook]);
  };

  // Обновление книги
  const updateBook = (updatedBook) => {
    setBooks(books.map(b => b.id === updatedBook.id ? updatedBook : b));
    setEditingBook(null);
  };

  // Удаление книги
  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#d4af37" }}>Harry Potter Books</h2>
      <AddBook addBook={addBook} />
      <BooksList books={books} deleteBook={deleteBook} setEditingBook={setEditingBook} />
      {editingBook && (
        <EditBook book={editingBook} updateBook={updateBook} />
      )}
    </div>
  );
}
