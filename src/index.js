import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import booksReducer from './reducers/book';

const store = createStore(booksReducer)

initialState = [{
  id: 1,
  Title: "Greg and the black Pirates",
  Category: "Story"
}, {
  id: 1,
  Title: "Greg and the black Pirates",
  Category: "Story"
}]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
