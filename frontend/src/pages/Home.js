import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login, accessProtected } from '../services/apiService';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();



    const handleRegister = async () => {
        try {
            const response = await register(email, password);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error registering');
        }
    };




    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            localStorage.setItem('token', response.data.access_token);
            setMessage('Logged in successfully');
        } catch (error) {
            setMessage('Error logging in');
        }
    };


    
    const handleProtected = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await accessProtected(token);
            if (response.status === 200) {
                navigate('/protected');
            }
        } catch (error) {
            setMessage('Error accessing protected route');
        }
    };

    return (
        <div className="App">
            <h2>Register</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>

            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>

            <h2>Protected Route</h2>
            <button onClick={handleProtected}>Access Protected Route</button>

            <p>{message}</p>
        </div>
    );
}

export default Home;
