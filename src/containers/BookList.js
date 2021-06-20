import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state);
  // console.log(books[0]);
  const bookList = books.map((book) => <Book book={book} />);
  console.log(bookList);
  return (
    <div>
      <tr>
        <td>
          {bookList}
        </td>
      </tr>
    </div>
  );
};

export default BookList;
