import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
