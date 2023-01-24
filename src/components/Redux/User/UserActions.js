import { GET_USER } from "./UserTypes"

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user,
    }
}