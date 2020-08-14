import axios from 'axios';

import store from '../store';

import { UPLOADED_FILE } from '../types/files';

export const upload = async (file) => {
    try {
        const res = await axios.post('upload', file);

        store.dispatch({
            type: UPLOADED_FILE
        });

        return res;

    } catch (error) {
        console.error(error);
    }
}

