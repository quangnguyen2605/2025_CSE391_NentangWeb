import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  // Mỗi khi editingBook thay đổi, cập nhật dữ liệu vào form
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year.toString()); // Đảm bảo year là string để input nhận đúng giá trị
    } else {
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editingBook) {
      // Chế độ chỉnh sửa
      onUpdate({
        ...editingBook,
        title,
        author,
        year: parseInt(year, 10),
      });
    } else {
      // Chế độ thêm mới
      onAdd({
        id: Date.now(),
        title,
        author,
        year: parseInt(year, 10),
      });
    }

    // Xóa dữ liệu trong form sau khi submit
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>

      <div>
        <label>Tiêu đề: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Tác giả: </label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div>
        <label>Năm XB: </label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <button type="submit">{editingBook ? "Cập nhật" : "Thêm"}</button>
    </form>
  );
}

export default BookForm;
