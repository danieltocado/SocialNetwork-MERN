import { LOGIN, UPDATE, SET_USER, LOGOUT } from "../types/users"
import {defineState} from 'redux-localstore'


const defaultState = {
    user: null
  }

const initialState = defineState(defaultState)('usersReducer')

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                
                user: action.payload
               
            }
        case UPDATE:  
            return {
                
            user: action.payload
           
        }
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