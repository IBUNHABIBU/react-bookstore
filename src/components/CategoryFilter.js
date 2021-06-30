import React from 'react';
import { bookCategories } from '../constants/constants';

const cat = bookCategories.concat('All');
const CategoryFilter = () => (
  <div>
    <label htmlFor="Category">
      Filter by Category
      <select name="cat" id="cat" value={cat}>
        {cat}
      </select>
    </label>
  </div>
);

export default CategoryFilter;
