import React from 'react';

function BookForm() {
  return (
    <div>
      <form action="add-book">
        <label htmlFor="Title">
          Title
          <input type="text" />
        </label>
        <select name="Category" id="">
          
        </select>
      </form>
    </div>
  );
}

export default BookForm;
