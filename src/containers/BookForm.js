import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { addBook } from '../actions';
import { bookCategories } from '../constants/constants';
import myStyle from '../stylesheet/style';

function BookForm() {
  const classes = myStyle();
  const cat = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.id === 'cat') {
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
        <p>Add New book</p>
        <input type="text" value={book.title} onChange={handleChange} id="title" />
        <br />

        <label htmlFor="Category" className={classes.label}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">CATEGORIES</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
              value={book.category}
              onChange={handleChange}
            >
              {cat}
            </Select>
          </FormControl>
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
