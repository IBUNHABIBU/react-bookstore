import { combineReducers } from 'redux';
import booksReducer from './book';

const rootReducer = combineReducers({
  booksReducer,
});

export default rootReducer;
