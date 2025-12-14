import { useState } from "react";

export default function AddBook({ addBook }) {
  const [form, setForm] = useState({ title: "", price: "", image: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return;
    addBook(form);
    setForm({ title: "", price: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "30px" }}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}
