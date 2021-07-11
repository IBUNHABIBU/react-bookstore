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
  const cat = bookCategories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
  const [book, setBook] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log('handle', e.target.id);
    if (e.target.name === 'cat') {
      console.log(e.target.name);
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
    <div className="form-main">
      <h2 className="form-title">ADD BOOK</h2>
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
          <div className={classes.catInput}>
            <label htmlFor="Category" className={classes.label2}>
              <FormControl variant="outlined" className={classes.formControl2}>
                <InputLabel id="demo-simple-select-outlined-label">CATEGORIES</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="cat"
                  name="cat"
                  onChange={handleChange}
                  label="Category"
                >
                  {cat}
                </Select>
              </FormControl>
            </label>
          </div>
          <br />
          <Button type="submit" variant="contained" color="primary" className={classes.bookBtn}>Add Book</Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
