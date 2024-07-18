import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessProtected } from '../services/apiService';
import Navbar from '../components/Navbar';
import ExerciseSelector from '../components/ExerciseSelector';

function Protected() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [selectedExercise, setSelectedExercise] = useState('');

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

    const handleExerciseChange = (e) => {
        setSelectedExercise(e.target.value);
    };



    
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
