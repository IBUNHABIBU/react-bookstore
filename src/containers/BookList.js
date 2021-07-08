import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {bookList}
        </Grid>
      </Grid>
    </div>
  );
};

export default BookList;
