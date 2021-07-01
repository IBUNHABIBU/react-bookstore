import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../constants/constants';

const categories = bookCategories.concat('All');
const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
const CategoryFilter = ({ handleFilter }) => (
  <div>
    <label htmlFor="Category">
      Filter by Category
      <select name="category" id="catFilter" value={cat} onChange={handleFilter}>
        {cat}
      </select>
    </label>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
