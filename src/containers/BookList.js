import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state);
  // console.log(books[0]);
  const bookList = books.map((book) => <Book key={book.id} book={book} />);
  console.log(bookList);
  return (
    <div>

      {bookList}

    </div>
  );
};

export default BookList;
