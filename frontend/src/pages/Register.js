import React, { useState } from 'react';
import RegisterForm from '../forms/RegisterForm';
import { register } from '../services/apiService';
import Navbar from '../components/Navbar';

function Register() {
    const [message, setMessage] = useState('');


    // Maneja la solicitud a la apiService de register
    const handleRegister = async (data) => {
        try {
            const response = await register(data.email, data.password);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error registering');
        }
    };

    return (
        <div>
            <Navbar />
            <RegisterForm onRegister={handleRegister} />
            <p>{message}</p>
        </div>
    );
}

export default Register;
