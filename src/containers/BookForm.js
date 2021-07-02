import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';
import { bookCategories } from '../constants/constants';

function BookForm() {
  const cat = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.id === 'cat') {
      console.log('cat');
      setBook({ ...book, category: e.target.value });
    } else if (e.target.id === 'title') {
      setBook({ ...book, title: e.target.value, category: 'Action' });
    } else {
      setBook({ ...book, category: 'Action' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({ title: '', category: 'Action' });
  };
  return (
    <div>
      <form action="add-book" onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title
          <input type="text" value={book.title} onChange={handleChange} id="title" />
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
