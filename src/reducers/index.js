import { combineReducers } from 'redux';
import booksReducer from './book';

const reducer = combineReducers({
  booksReducer,
});

export default reducer;
