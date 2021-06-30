import React from 'react';
import { bookCategories } from '../constants/constants';

const categories = bookCategories.concat('All');
const cat = categories.map((item) => <option value={item} key={item}>{item}</option>);
const CategoryFilter = () => (
  <div>
    <label htmlFor="Category">
      Filter by Category
      <select name="category" id="catFilter" value={cat}>
        {cat}
      </select>
    </label>
  </div>
);

export default CategoryFilter;
