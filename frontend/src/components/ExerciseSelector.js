
import React from 'react';


const availableExercises = ["Push-up", "Pull-up", "Squat", "Deadlift", "Bench Press", "Row"];


const ExerciseSelector = ({ exercise, handleExerciseChange }) => {
    return (
      <div className="exercise-selector">
        <label>Selecciona un ejercicio: </label>
        <select value={exercise} onChange={handleExerciseChange}>
          <option value="">--Seleccionar--</option>
          {availableExercises.map((exercise, index) => (
            <option key={index} value={exercise}>{exercise}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default ExerciseSelector;