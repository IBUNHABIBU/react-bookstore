import { ADD_BOOK, REMOVE_BOOK } from "../actions/constants";

const booksReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_BOOK:
            return {
                ...state, payload
            };
        case REMOVE_BOOK:
            return { }
        default:
            return state;
    }
}

export default booksReducer;