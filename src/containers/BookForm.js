import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../actions';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState({ title: '', category: '' });
  const bookSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    setBook({ ...book, title: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setBook({ ...book, category: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    console.log(bookSelector);
    setBook({ ...book, id: book.id + 1, category: e.target.value });
  };
  return (
    <div>
      <form action="add-book" onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title
          <input type="text" value={book.title} onChange={handleTitleChange} />
        </label>
        <select name="cat" id="cat" value={book.category} onChange={handleCategoryChange}>
          {category}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
