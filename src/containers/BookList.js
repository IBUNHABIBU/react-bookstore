import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const filter = useSelector((state) => state.filterReducer);
  console.log(filter);
  const dispatch = useDispatch();
  const removeSelectedBook = (book) => {
    dispatch(removeBook(book));
  };
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
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
      <CategoryFilter handleFilter={handleCategoryChange} />
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
