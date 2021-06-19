import React from 'react';

function Book(props) {
  return (
    <div>
      <table>
        <tr>
          {props.book}
        </tr>
      </table>
    </div>
  );
}

export default Book;
