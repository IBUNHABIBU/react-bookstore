import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import { bookCategories } from '../constants/constants';
import myStyle from '../stylesheet/style';

const CategoryFilter = ({ handleFilter }) => {
  const classes = myStyle();
  const all = ['All'];
  const categories = all.concat(bookCategories);
  const cat = categories.map((item) => <MenuItem value={item} key={item}>{item}</MenuItem>);
  return (
    <div className={classes.cat}>
      <label htmlFor="Category" className={classes.label}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">CATEGORIES</InputLabel>
          <Select
            className={classes.catInput}
            labelId="demo-simple-select-outlined-label"
            id="category"
            onChange={handleFilter}
            label="Age"
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
