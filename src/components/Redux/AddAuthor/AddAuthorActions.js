import { ADD_AUTHOR } from "./AddAuthorTypes"

export const AddAuthorAction = (author) => {
    return{
        type: ADD_AUTHOR,
        payload: author,
    }
}

