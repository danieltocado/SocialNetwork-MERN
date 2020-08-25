import axios from 'axios';
import getHistory from '../../history'; 

import store from '../store';

import { SIGN_UP, LOGIN, UPDATE, SET_USER, LOGOUT } from '../types/users';

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

export const update = async (id) => {
    try {
        
        const res = await axios.put('users/update/' + id);

        store.dispatch({
            type: UPDATE
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