import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  return (
    <div className="book-container">
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <div className="btns">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>Comment</Button>
            <Button onClick={() => handleRemoveBook(book)}>Remove</Button>
            <Button>Edit</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="status-bar">
        <div className="complete-bar">
          <div className="inner-bar" />
        </div>
        <div className="complete-parcent">
          <p>64%</p>
          <p>Completed</p>
        </div>
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
