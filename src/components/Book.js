import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  return (
    <div className="book-container">
      <p>{category}</p>
      <h2>{title}</h2>
      <button type="submit" onClick={() => handleRemoveBook(book)}>Remove Book</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
