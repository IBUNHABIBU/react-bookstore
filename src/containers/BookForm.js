import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const cat = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setBook({ ...book, title: e.target.value, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({ title: '', category: '' });
  };
  return (
    <div>
      <form action="add-book" onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title
          <input type="text" value={book.title} onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="Category">
          Category
          <select name="cat" id="cat" value={book.category} onChange={handleChange}>
            {cat}
          </select>
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
