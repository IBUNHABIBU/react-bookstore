import { ADD_BOOK, CHANGE_FILTER, REMOVE_BOOK } from './constants';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export const changeFilter = () => ({
  type: CHANGE_FILTER,
});
