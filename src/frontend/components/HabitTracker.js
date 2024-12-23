import React, { useState, useEffect } from 'react';
import { getHabits, addHabit, updateHabitStatus, deleteHabit } from '../../backend/services/taskService'; 

// Improved Styles for better UI/UX
const habitTrackerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f7f6',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: 'auto',
};

const habitHeaderStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
};

const habitFormStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const habitInputStyle = {
  padding: '8px 12px',
  width: '80%',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const habitButtonStyle = {
  padding: '8px 12px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

const habitListStyle = {
  listStyle: 'none',
  padding: '0',
};

const habitItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const habitCompletedStyle = {
  textDecoration: 'line-through',
  color: '#888',
};

const deleteButtonStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  padding: '5px 10px',
  fontSize: '12px',
};

const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
  const [habitStatus, setHabitStatus] = useState(false);
  const [habitList, setHabitList] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetching habits from the backend
  useEffect(() => {
    const fetchHabits = async () => {
      setLoading(true);
      try {
        const habits = await getHabits();
        setHabitList(habits);
        setError('');
      } catch (err) {
        setError('Error fetching habits.');
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  // Handle status change of a habit
  const handleHabitStatusChange = async (id, currentStatus) => {
    try {
      await updateHabitStatus(id, !currentStatus);
      const updatedHabits = habitList.map(habit =>
        habit.id === id ? { ...habit, status: !currentStatus } : habit
      );
      setHabitList(updatedHabits);
    } catch (err) {
      setError('Error updating habit status.');
    }
  };

  // Handle adding a new habit
  const handleAddHabit = async () => {
    if (!newHabit.trim()) return;
    setLoading(true);
    try {
      await addHabit(newHabit);
      setNewHabit('');
      const updatedHabits = await getHabits();
      setHabitList(updatedHabits);
      setError('');
    } catch (err) {
      setError('Error adding new habit.');
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a habit
  const handleDeleteHabit = async (id) => {
    try {
      await deleteHabit(id);
      const updatedHabits = habitList.filter(habit => habit.id !== id);
      setHabitList(updatedHabits);
      setError('');
    } catch (err) {
      setError('Error deleting habit.');
    }
  };

  return (
    <div style={habitTrackerStyle}>
      <h1 style={habitHeaderStyle}>Habit Tracker</h1>
      <div style={habitFormStyle}>
        <input
          type="text"
          placeholder="Enter new habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          style={habitInputStyle}
        />
        <button onClick={handleAddHabit} style={habitButtonStyle} disabled={loading}>
          {loading ? 'Adding...' : 'Add Habit'}
        </button>
      </div>

      {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      <ul style={habitListStyle}>
        {habitList.length === 0 && !loading && (
          <li style={{ textAlign: 'center', padding: '10px' }}>No habits found!</li>
        )}
        {habitList.map((habit) => (
          <li key={habit.id} style={habitItemStyle}>
            <span
              style={habit.status ? habitCompletedStyle : {}}
              onClick={() => handleHabitStatusChange(habit.id, habit.status)}
            >
              {habit.name}
            </span>
            <div>
              <button onClick={() => handleDeleteHabit(habit.id)} style={deleteButtonStyle}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
