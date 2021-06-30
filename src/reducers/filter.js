import { CHANGE_FILTER } from '../actions/constants';

const cat = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const initialState = 'All';

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};
