import { ADD_TOKEN } from "./RegisterTokenTypes"

const initialStateToken = {
    reToken: localStorage.getItem('reToken') || ""
}

export const TokebReducer = (state=initialStateToken, action) => {
    switch (action.type){
        case ADD_TOKEN: 
            return{
                ...state,
                reToken: action.payload
            }
        
        default : return state
    }
}