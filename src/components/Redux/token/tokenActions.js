import { ADD_TOKEN } from "./tokenTypes"

export const loginToken = (token) => {
    return{
        type: ADD_TOKEN,
        payload: token,
    }
}

