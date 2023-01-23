import { ADD_TOKEN } from "./RegisterTokenTypes"

export const addToken = (reToken) => {
    return{
        type: ADD_TOKEN,
        payload: reToken,
    }
}
