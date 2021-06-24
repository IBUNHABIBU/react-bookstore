import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('');
  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCat(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleChange());
  };
  return (
    <div>
      <form action="add-book" onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title
          <input type="text" value={title} onChange={handleChange} />
        </label>
        <select name="cat" id="cat" value={cat} onChange={handleChange}>
          {category}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
