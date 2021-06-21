import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BookForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const category = bookCategories.map((item) => <option value="" key={item}>{item}</option>);
  const book = useSelector((state) => state);
  const dispatch = useDispatch();
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
        <button type="submit" onClick={() => dispatch(book)}>Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
