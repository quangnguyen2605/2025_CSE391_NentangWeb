import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([]);

  const [editingBook, setEditingBook] = useState(null);

  // Load dữ liệu từ localStorage khi app khởi động
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Lưu dữ liệu vào localStorage mỗi khi books thay đổi
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Thêm sách
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Bắt đầu sửa sách
  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  // Cập nhật sách
  const handleUpdateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setEditingBook(null);
  };

  // Xóa sách
  const handleDeleteBook = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sách này?");
    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Quản Lý Sách</h1>
      <BookForm
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
      />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;
