import { GET_BOOKS } from "./BooksTypes"

const userInitial = {
    books: [],
}

export const BooksReduser = (state = userInitial, action) => {
    switch (action.type) {
        case GET_BOOKS: return {
            ...state,
            books: action.payload,
        }
        default:
            return state
    }
}