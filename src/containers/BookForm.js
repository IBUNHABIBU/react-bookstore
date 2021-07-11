/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, TextField, MenuItem } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import myStyle from '../stylesheet/style';
import { bookCategories } from '../constants/constants';
import { addBook } from '../actions';

function BookForm() {
  const classes = myStyle();
  const cat = bookCategories.map((item) => <option value={item} key={item}>{item}</option>);
  const [book, setBook] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log('handle', e.target.id);
    if (e.target.name === 'cat') {
      console.log(e.target.value);
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
        <div className="form-container">
          <TextField
            // id="outlined-full-width"
            className={classes.textInput}
            style={{ margin: 8 }}
            placeholder="Book Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={book.title}
            onChange={handleChange}
            id="title"
          />
          <br />
          <label htmlFor="Category">
            Category
            <select name="cat" id="cat" value={book.category} onChange={handleChange}>
              {cat}
            </select>
          </label>
          <br />
          <Button type="submit" variant="contained" color="primary" className={classes.bookBtn}>Add Book</Button>
        </div>
      </form>
      
    </div>
  );
}

export default BookForm;
