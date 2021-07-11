import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, TextField, MenuItem } from '@material-ui/core';
import { addBook } from '../actions';
import { bookCategories } from '../constants/constants';
import myStyle from '../stylesheet/style';

function BookForm() {
  const classes = myStyle();
  const cat = bookCategories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
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
      <form className="form-container" action="add-book" onSubmit={handleSubmit}>
        {/* <input type="text" value={book.title} onChange={handleChange} id="title" /> */}

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

        <br />
        <div className={classes.cat}>
          <label htmlFor="Category" className={classes.label}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">CATEGORIES</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                name="cat"
                id="cat"
                onChange={handleChange}
                label="Age"
              >
                {cat}
              </Select>
            </FormControl>
          </label>
        </div>
        <Button type="submit" variant="contained" color="primary">Add Book</Button>
      </form>
    </div>
  );
}

export default BookForm;
