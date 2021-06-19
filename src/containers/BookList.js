import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BookList({ books }) {
  const bookLists = books.map((book) => <Book book={book} />);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        {bookLists}
      </table>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.object.isRequired,
};

export default BookList;
