import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import { useDispatch } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state);
  const bookList = books.map((book) => <Book key={book.id} book={book} />);
  const dispatch = useDispatch()
  return (
    <div className="book-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
