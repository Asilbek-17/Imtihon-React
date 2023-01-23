import { GET_ATHOR } from "./AuthorTypes"

const userInitial = {
    authors: [],
}

export const AuthorReducer = (state = userInitial, action) => {
    switch (action.type) {
        case GET_ATHOR: return {
            ...state,
            authors: action.payload,
        }
        default:
            return state
    }
}