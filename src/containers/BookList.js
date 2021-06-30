import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeSelectedBook = (book) => {
    dispatch(removeBook(book));
  };
  const bookList = books.map((book) => (
    <Book
      key={book.id}
      book={book}
      handleRemoveBook={removeSelectedBook}
    />
  ));
  return (
    <div className="book-container">
      <CategoryFilter />
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
