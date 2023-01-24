import { GET_USER } from "./UserTypes"

const initialTodoState = {
    user: []
}

export const UserReducer = (state=initialTodoState, action) => {
    switch (action.type){
        case GET_USER: 
            return{
                ...state,
                user: action.payload
            }
        default : return state
    }
}