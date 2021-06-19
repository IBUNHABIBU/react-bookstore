import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const { id, title, category } = book;
  return (
    <div>
      <table>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{category}</td>
        </tr>
      </table>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;
