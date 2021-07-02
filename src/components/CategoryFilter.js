import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../constants/constants';

const CategoryFilter = ({ handleFilter }) => {
  const all = ['All'];
  const categories = all.concat(bookCategories);
  const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
  return (
    <div>
      <label htmlFor="Category">
        Filter by Category
        <select name="category" id="category" onChange={handleFilter}>
          {cat}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
