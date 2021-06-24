import { ADD_BOOK, REMOVE_BOOK } from '../actions/constants';

const generateId = (limit) => Math.floor(Math.random() * (limit + 1));

const initialState = [];
const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state,
        { id: generateId(100), title: payload.title, category: payload.category }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};

export default booksReducer;
