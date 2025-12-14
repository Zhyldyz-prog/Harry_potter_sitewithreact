import { useState } from "react";

export default function EditBook({ book, updateBook }) {
  const [form, setForm] = useState(book);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px 0" }}>
      <h3 style={{ color: "#d4af37" }}>Edit Book</h3>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
}
