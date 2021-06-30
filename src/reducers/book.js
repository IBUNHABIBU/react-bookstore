import { ADD_BOOK, REMOVE_BOOK } from '../constants/constants';

const generateId = (limit) => Math.floor(Math.random() * (limit + 1));

const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        { id: generateId(100), title: action.payload.title, category: action.payload.category }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
