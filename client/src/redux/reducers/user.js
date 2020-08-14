import { LOGIN, UPDATE, SET_USER, LOGOUT } from "../types/users"

const initialState = {
    user: {},
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case UPDATE:  
        case SET_USER:
            return {
                ...state,
                user: action.payload
            } 
        case LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}