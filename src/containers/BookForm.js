import React from 'react';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = bookCategories.map((item) => <option value="" key={item}>{item}</option>);
  return (
    <div>
      <form action="add-book">
        <label htmlFor="Title">
          Title
          <input type="text" />
        </label>
        <select name="cat" id="cat">
          {category}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
