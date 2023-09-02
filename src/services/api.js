// api.js
import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('URL_LOGIN', { username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (username, email, password) => {
    try {
        const response = await axios.post('URL_REGISTER', { username, email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};
