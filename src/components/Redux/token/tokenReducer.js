import { ADD_TOKEN } from "./tokenTypes"

 export const InitialStateToken = {
    token: localStorage.getItem('token') || ""
}

export const TokenReducer = (state = InitialStateToken, action) => {
    switch (action.type){
        case ADD_TOKEN: 
            return{
                ...state,
                token: action.payload
            }
        default : return state
    }
}