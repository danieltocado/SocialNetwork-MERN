import axios from 'axios';
import getHistory from '../../history'; 

import store from '../store';

import { SIGN_UP, FOLLOW, UNFOLLOW, LOGIN, UPDATE, SET_USER, LOGOUT } from '../types/users';


export const register = async (user) => {
    try {
        const res = await axios.post('users/register', user);

        store.dispatch({
            type: SIGN_UP
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

export const follow = async (user) => {
    try {
        const res = await axios.post('users/follow', user);

        store.dispatch({
            type: FOLLOW
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

export const unfollow = async (user) => {
    try {
        const res = await axios.delete(`users/follow` + user._id);

        store.dispatch({
            type: UNFOLLOW
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

export const login = async (credentials) => {
    try {
        const res = await axios.post('users/login', credentials);

        store.dispatch({
            type: LOGIN,
            payload: res.data.user
        });

        localStorage.setItem('authToken', res.data.token);
        return res;

    } catch (error) {
        console.error(error)
    }
}



export const update = async (id, body) => {
    try {

        const token = localStorage.getItem('authToken')
        const res = await axios.put('users/update/' + id, body, {
        headers: {
            'authorization': token
        }
    });
        store.dispatch({
            type: UPDATE,
            payload: res.data
        });
        
        
        return res;
        
    } catch (error) {
        console.error(error)
    }
}


                        

export const getInfo = async () => {
    try {
        const res = await axios.get('users/info');
    
        store.dispatch({
            type: SET_USER,
            payload: res.data
        })
    
        return res;
        
    } catch (error) {
        console.error(error);
    }
}

export const logout = async () => {
    try {
        const res = await axios.post('users/logout');

        store.dispatch({
            type: LOGOUT
        });

        localStorage.removeItem('authToken');

        getHistory().push('/');
        
        return res;

    } catch (error) {
        console.error(error);
    }
}