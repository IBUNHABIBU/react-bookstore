import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  return (
    <div className="book-container">
      <div className="book-details">
        <p className="book-cat">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="author">Suzzan Colins</p>
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
        <div className="content" />
        <div className="complete-parcent">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <Divider orientation="vertical" />
      <div className="chapter">
        <p className="current">current chapter</p>
        <p className="c-number">Chapter 17</p>
        <Button variant="contained" color="primary" className="progress-btn">Update progress</Button>
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
