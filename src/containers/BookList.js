import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  const bookList = books.map((book) => <Book book={book} />);
  return (
    <div>
      <tr>
        <td>
          {bookList}
        </td>
      </tr>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.objectOf.isRequired,
};

export default BookList;
