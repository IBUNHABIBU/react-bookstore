import { ADD_BOOK, REMOVE_BOOK } from '../actions/constants';

const initialState = [{
  id: 1,
  title: 'Greg and the Black Pirates',
  category: 'Story',
}, {
  id: 2,
  title: 'The princes who wanted the moon',
  category: 'Fiction',
}, {
  id: 3,
  title: 'Mabala the farmer',
  category: 'Story',
}, {
  id: 4,
  title: 'Three suiters one husband',
  category: 'Poem',
},
];
const booksReducer = (state = initialState, { type }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, {
        id: 2,
        title: 'prince',
        category: 'Movie',
      }];
    case REMOVE_BOOK:
      return { };
    default:
      return state;
  }
};

export default booksReducer;
