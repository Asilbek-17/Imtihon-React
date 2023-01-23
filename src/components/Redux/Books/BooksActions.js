import { GET_BOOKS } from "./BooksTypes"

export const booksSuccess = (books) => {
    return {
        type: GET_BOOKS,
        payload: books,
    }
}
