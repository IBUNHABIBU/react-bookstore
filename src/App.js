import React from 'react';
import BookForm from './containers/BookForm';
import BookList from './containers/BookList';
import './stylesheet/App.css';
import Nav from './containers/Nav';
// import Bar from './containers/Bar';

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
