// src/frontend/components/HabitTracker.js
import React, { useState } from 'react';

// Styles for the Habit Tracker card
const habitCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  width: '250px',
  transition: 'transform 0.3s ease',
};

const habitTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const habitDescriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  marginBottom: '15px',
  textAlign: 'center',
};

const habitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

const habitButtonDisabledStyle = {
  backgroundColor: '#ccc',
  cursor: 'not-allowed',
};

const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete(taskName); // Callback to parent when task is marked complete
  };

  return (
    <div style={habitCardStyle}>
      <h2 style={habitTitleStyle}>{taskName}</h2>
      <p style={habitDescriptionStyle}>{taskDescription}</p>
      <button
        style={{ ...habitButtonStyle, ...(isCompleted && habitButtonDisabledStyle) }}
        onClick={handleComplete}
        disabled={isCompleted}
      >
        {isCompleted ? 'Completed' : 'Mark as Completed'}
      </button>
    </div>
  );
};

export default HabitTracker;
