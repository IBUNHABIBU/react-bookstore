import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {
  InputBase, Paper, Button, TextField,
} from '@material-ui/core';
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
        <Paper component="form">
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
        <TextField
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Book Title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br />

        <label htmlFor="Category" className={classes.label}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="cat"
              label="Age"
              value={book.category}
              onChange={handleChange}
            >
              {cat}
            </Select>
          </FormControl>
        </label>
        <br />
        <Button type="submit" variant="contained" color="primary">Add Book</Button>
      </form>
    </div>
  );
}

export default BookForm;
