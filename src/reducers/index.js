import { combineReducers } from 'redux';
import booksReducer from './book';
import filterReducer from './filter';

const rootReducer = combineReducers({
  booksReducer, filterReducer,
});

export default rootReducer;
