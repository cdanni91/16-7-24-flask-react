import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { accessProtected } from '../services/apiService';
import Navbar from '../components/Navbar';
import ExerciseSelector from '../components/ExerciseSelector';

function Protected() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    // 
    const [selectedExercise, setSelectedExercise] = useState('');


    // Verificación del token para ingresar a la ruta

    useEffect(() => {

        const checkProtectedRoute = async () => {

            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    redirect('/login');
                    return;

                }
                const response = await accessProtected(token);
                if (response.status !== 200) {
                    throw new Error('Invalid token');
                }
                setMessage('LOGUEADO');

            } catch (error) {
                setMessage('Access denied. Please log in.');
                navigate('/login');

            } finally {
                setLoading(false);
            }
        };

        checkProtectedRoute();
    }, [navigate]);








// Manejo del cambio de ejercicio

    const handleExerciseChange = (e) => {
        setSelectedExercise(e.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <h2>{message}</h2>
            <ExerciseSelector
                exercise={selectedExercise}
                handleExerciseChange={handleExerciseChange}
            />
        </div>
    );
}

export default Protected;
