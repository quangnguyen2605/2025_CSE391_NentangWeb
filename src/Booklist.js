import React from 'react';
function BookList({ books }) {
 return (
 <div>
 <h2>Danh sách sách</h2>
 <ul>
 {books.map(book => (
 <li key={book.id}>
 <strong>{book.title}</strong> - {book.author} ({book.year})
 </li>
 ))}
 </ul>
 </div>
 );
}
export default BookList;