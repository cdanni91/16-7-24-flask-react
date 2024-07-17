import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../services/apiService';
import Navbar from '../components/Navbar';

// Define una función de componente para la página de Login
function Login() {

    // Hook useState para manejar el estado del mensaje (setMessage permite cambiar el valor de message)
    const [message, setMessage] = useState('');
    
    // Hook useNavigate para navegar a otra página después del login
    const navigate = useNavigate();

    // Función que maneja la lógica del login
    // Recibe los datos del formulario (data) y ejecuta la función login de apiService enviando email y password
    // Si el login es exitoso (status 200), guarda el token en local storage y navega a la página protegida
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

    // Renderiza el componente Navbar y el componente LoginForm
    // El prop onLogin se pasa al componente LoginForm para manejar el evento de login
    return (
        <div>
            {/* Renderiza la Navbar */}
            <Navbar />

            {/* Renderiza el LoginForm y le pasa la función handleLogin como prop onLogin */}
            <LoginForm onLogin={handleLogin} />

            {/* Muestra el mensaje correspondiente */}
            <p>{message}</p>
        </div>
    );
}

export default Login;
