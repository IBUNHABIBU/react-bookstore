import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
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
