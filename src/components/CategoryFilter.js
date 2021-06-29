import React from 'react';

const cat = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const CategoryFilter = () => (
  <div>
    <label htmlFor="Category">
      Category
      <select name="cat" id="cat" value={book.category} onChange={handleCategoryChange}>
        {cat}
      </select>
    </label>
  </div>
);

export default CategoryFilter;
