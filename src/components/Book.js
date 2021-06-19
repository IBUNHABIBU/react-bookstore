import React from 'react';

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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
