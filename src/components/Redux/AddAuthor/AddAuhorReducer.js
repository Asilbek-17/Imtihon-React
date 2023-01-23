import { ADD_AUTHOR } from "./AddAuthorTypes"

 export const InitialStateToken = {
    author: localStorage.getItem('token') || ""
}

export const AddAuthorReducer = (state = InitialStateToken, action) => {
    switch (action.type){
        case ADD_AUTHOR: 
            return{
                ...state,
                author: action.payload
            }
        default : return state
    }
}