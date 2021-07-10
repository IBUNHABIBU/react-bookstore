import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  return (
    <div className="book-container">
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <div className="btns">
        <button type="submit" onClick={() => handleRemoveBook(book)}>Remove Book</button>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
        </div>
             </div>
      <div className="status-bar">
        <p>64%</p>
        <p>Completed</p>
      </div>
      <div className="chapter">
        <p>current chapter</p>
        <p>Chapter 17</p>
        <button type="submit">Update progress</button>
      </div>
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
