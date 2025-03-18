import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p>Không có sách nào.</p>
      ) : (
        books.map((book) => (
          <div
            key={book.id}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{book.title}</h3>
              <p>Tác giả: {book.author}</p>
              <p>Năm xuất bản: {book.year}</p>
            </div>
            <div>
              <button onClick={() => onEdit(book)} style={{ marginRight: "10px" }}>
                Sửa
              </button>
              <button onClick={() => onDelete(book.id)} style={{ background: "red", color: "white" }}>
                Xóa
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
