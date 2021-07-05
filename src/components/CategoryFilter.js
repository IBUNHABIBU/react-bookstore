import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { bookCategories } from '../constants/constants';
import myStyle from '../stylesheet/style';

const CategoryFilter = ({ handleFilter }) => {
  const classes = myStyle();
  const all = ['All'];
  const categories = all.concat(bookCategories);
  const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
  return (
    <div>
      <label htmlFor="Category">
        {/* Filter by Category
        <select name="category" id="category" onChange={handleFilter}>
          {cat}
        </select> */}
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={cat}
          onChange={handleFilter}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={cat}>{cat}</MenuItem>
        </Select>
        </FormControl>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
