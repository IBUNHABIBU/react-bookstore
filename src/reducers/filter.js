import { CHANGE_FILTER } from '../actions/constants';

const initialState = 'All';

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};
