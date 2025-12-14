import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import BooksManager from "./pages/BooksManager"; 

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BooksManager />} /> 
        <Route path="/book/:id" element={<BookDetail />} />
      </Route>
    </Routes>
  );
}
