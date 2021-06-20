import { ADD_BOOK, REMOVE_BOOK } from '../actions/constants';

const initialState = [{
  id: 1,
  title: 'Pirates',
  category: 'Story',
},
{
  id: 2,
  title: ' princess ',
  category: 'Fiction',
},
];
const booksReducer = (state = initialState, { type }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, {
        id: 2,
        Title: 'To the street',
        Category: 'Hastling',
      }];
    case REMOVE_BOOK:
      return { };
    default:
      return state;
  }
};

export default booksReducer;
