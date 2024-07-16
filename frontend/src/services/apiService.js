import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

export const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const accessProtected = (token) => {
    return axios.get(`${API_URL}/protected`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
