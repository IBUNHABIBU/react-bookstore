import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState({title: '', category:''});
  
  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    setBook({ ...book, title: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setBook({ ...book, category: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book))
  };
  return (
    <div>
      <form action="add-book" onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <select name="cat" id="cat" value={cat} onChange={handleCategoryChange}>
          {category}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
