import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import myStyle from '../stylesheet/style';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  const classes = myStyle();

  return (
    <div className={classes.root}>
     
            <div>
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
