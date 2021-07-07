import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const filter = useSelector((state) => state.filterReducer);
  const selectedBooks = (filter === 'All') ? books : books.filter((book) => book.category === filter);

  const dispatch = useDispatch();
  const removeSelectedBook = (book) => {
    dispatch(removeBook(book));
  };

  const bookList = selectedBooks.map((book) => (
    <Book
      key={book.id}
      book={book}
      handleRemoveBook={removeSelectedBook}
    />
  ));
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
