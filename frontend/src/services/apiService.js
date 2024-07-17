import axios from 'axios';

// Definimos la URL donde se va a ejecutar el backend de flask

const API_URL = 'http://localhost:5000';



// Aca se definen las funciones de que interactuan con la API de Flask en el backend



export const register = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

export const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};


// Protected routes

export const accessProtected = (token) => {
    return axios.get(`${API_URL}/protected`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
