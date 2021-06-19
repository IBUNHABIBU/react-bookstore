import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './containers/BookForm';
import BookList from './containers/BookList';
import './App.css';

function App() {
  const book = useSelector((state) => state.book);

  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
