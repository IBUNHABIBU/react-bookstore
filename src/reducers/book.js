import { ADD_BOOK, REMOVE_BOOK } from "../actions/constants";

initialState = {
    id: 1,
    Title: "Greg and the black Pirates",
    Category: "Story"
}
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