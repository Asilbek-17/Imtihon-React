import { GET_ATHOR } from "./AuthorTypes"

export const userSuccess = (authors) => {
    return {
        type: GET_ATHOR,
        payload: authors,
    }
}
