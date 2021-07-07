import React from 'react';
import BookForm from './containers/BookForm';
import BookList from './containers/BookList';
import './stylesheet/App.css';
import Nav from './containers/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
