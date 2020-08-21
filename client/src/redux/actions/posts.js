import axios from 'axios';

import store from '../store.js';

import { CREATED_POST } from '../types/posts';

export const create = async (post) => {
    try {
        const res = await axios.post('post/create', post);

        store.dispatch({
            type: CREATED_POST
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

