import React from 'react';

function BookList({ id, title, category }) {
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
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

BookList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string
};

export default BookList;
