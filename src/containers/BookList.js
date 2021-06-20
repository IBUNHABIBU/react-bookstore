import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { addBook } from '../actions';

const BookList = ({ books }) => (
  books.map(
    (book) => <tr key={book.id}><Book book={book} /></tr>,
  )
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });
const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
