import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/protected" element={<Protected />} />
            </Routes>
        
    );
}

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error registering');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('token', response.data.access_token);
            setMessage('Logged in successfully');
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    const handleProtected = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/protected', {
                headers: { Authorization: `Bearer ${token}` },
            });
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

function Protected() {
    return (
        <div>
            <h2>LOGUEADO</h2>
        </div>
    );
}

export default App;
