import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessProtected } from '../services/apiService';
import Navbar from '../components/Navbar';

function Protected() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const checkProtectedRoute = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }
                const response = await accessProtected(token);
                if (response.status !== 200) {
                    throw new Error('Invalid token');
                }
                setMessage('LOGUEADO');
            } catch (error) {
                setMessage('Access denied. Please log in.');
                navigate('/login');
            }
        };

        checkProtectedRoute();
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <h2>{message}</h2>

            <ExerciseSelector
            exercise={exercise.exercise}
            handleExerciseChange={(e) => handleExerciseChange(exerciseIndex, e)}
            />
            
        </div>
    );
}

export default Protected;
