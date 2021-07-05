import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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
        <FormControl className={classes.formControl}>
          <Select
            value="filter"
            onChange={handleFilter}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              Placeholder
            </MenuItem>
            {cat}
          </Select>
          <FormHelperText>placeholder</FormHelperText>
        </FormControl>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
