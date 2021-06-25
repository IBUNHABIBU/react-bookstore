import { CHANGE_FILTER } from '../actions/constants';
const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const initialState = {
    filter: "All"
}

const filterReducer = (state, action) => {
  switch (action.type) {
      case CHANGE_FILTER:
          
          break;
  
      default:
          break;
  }
}