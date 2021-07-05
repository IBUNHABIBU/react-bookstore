import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { bookCategories } from '../constants/constants';
import myStyle from '../stylesheet/style';

const CategoryFilter = ({ handleFilter }) => {
  const classes = myStyle();
  const all = ['All'];
  const categories = all.concat(bookCategories);
  const cat = categories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
  return (
    <div>
      <label htmlFor="Category">
        {/* Filter by Category
        <select name="category" id="category" onChange={handleFilter}>
          {cat}
        </select> */}
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            onChange={handleFilter}
          >
            {cat}
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
