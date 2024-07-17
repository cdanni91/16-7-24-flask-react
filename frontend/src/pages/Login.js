import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../services/apiService';
import Navbar from '../components/Navbar';

function Login() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            const response = await login(data.email, data.password);
            localStorage.setItem('token', response.data.access_token);
            setMessage('Logged in successfully');
            navigate('/protected');
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    return (
        <div>
            <Navbar />
            <LoginForm onLogin={handleLogin} />
            <p>{message}</p>
        </div>
    );
}

export default Login;
