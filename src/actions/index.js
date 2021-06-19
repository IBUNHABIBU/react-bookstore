import { ADD_BOOK, REMOVE_BOOK } from "./constants";
export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const removeBook = () => {
    return {
        type: REMOVE_BOOK,
    }
}