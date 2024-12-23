// // // src/frontend/components/HabitTracker.js
// // import React, { useState } from 'react';

// // // Styles for the Habit Tracker card
// // const habitCardStyle = {
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'center',
// //   alignItems: 'center',
// //   backgroundColor: '#fff',
// //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //   borderRadius: '8px',
// //   padding: '20px',
// //   margin: '10px',
// //   width: '250px',
// //   transition: 'transform 0.3s ease',
// // };

// // const habitTitleStyle = {
// //   fontSize: '1.5rem',
// //   fontWeight: 'bold',
// //   marginBottom: '10px',
// // };

// // const habitDescriptionStyle = {
// //   fontSize: '1rem',
// //   color: '#555',
// //   marginBottom: '15px',
// //   textAlign: 'center',
// // };

// // const habitButtonStyle = {
// //   backgroundColor: '#4CAF50',
// //   color: 'white',
// //   padding: '10px 20px',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// //   fontWeight: 'bold',
// //   transition: 'background-color 0.3s',
// // };

// // const habitButtonDisabledStyle = {
// //   backgroundColor: '#ccc',
// //   cursor: 'not-allowed',
// // };

// // const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
// //   const [isCompleted, setIsCompleted] = useState(false);

// //   const handleComplete = () => {
// //     setIsCompleted(true);
// //     onComplete(taskName); // Callback to parent when task is marked complete
// //   };

// //   return (
// //     <div style={habitCardStyle}>
// //       <h2 style={habitTitleStyle}>{taskName}</h2>
// //       <p style={habitDescriptionStyle}>{taskDescription}</p>
// //       <button
// //         style={{ ...habitButtonStyle, ...(isCompleted && habitButtonDisabledStyle) }}
// //         onClick={handleComplete}
// //         disabled={isCompleted}
// //       >
// //         {isCompleted ? 'Completed' : 'Mark as Completed'}
// //       </button>
// //     </div>
// //   );
// // };

// // export default HabitTracker;
// import React, { useEffect, useState } from 'react';
// import { getHabits, addHabit, updateHabitStatus, deleteHabit } from '../../backend/services/taskService';

// function HabitTracker() {
//     const [habits, setHabits] = useState([]);
//     const [newHabit, setNewHabit] = useState('');

//     useEffect(() => {
//         async function fetchHabits() {
//             const fetchedHabits = await getHabits();
//             setHabits(fetchedHabits);
//         }
//         fetchHabits();
//     }, []);

//     const handleAddHabit = async () => {
//         if (!newHabit) return;
//         const addedHabit = await addHabit(newHabit);
//         if (addedHabit) {
//             setHabits([...habits, ...addedHabit]);
//             setNewHabit('');
//         }
//     };

//     const handleToggleStatus = async (id, currentStatus) => {
//         const updatedHabit = await updateHabitStatus(id, !currentStatus);
//         if (updatedHabit) {
//             setHabits(habits.map(habit => (habit.id === id ? { ...habit, status: !currentStatus } : habit)));
//         }
//     };

//     const handleDeleteHabit = async (id) => {
//         const deletedHabit = await deleteHabit(id);
//         if (deletedHabit) {
//             setHabits(habits.filter(habit => habit.id !== id));
//         }
//     };

//     return (
//         <div className="habit-tracker">
//             <h1>Habit Tracker</h1>
//             <div className="habit-form">
//                 <input
//                     type="text"
//                     placeholder="Enter new habit"
//                     value={newHabit}
//                     onChange={(e) => setNewHabit(e.target.value)}
//                 />
//                 <button onClick={handleAddHabit}>Add Habit</button>
//             </div>
//             <ul>
//                 {habits.map((habit) => (
//                     <li key={habit.id}>
//                         <span
//                             style={{ textDecoration: habit.status ? 'line-through' : 'none', cursor: 'pointer' }}
//                             onClick={() => handleToggleStatus(habit.id, habit.status)}
//                         >
//                             {habit.name}
//                         </span>
//                         <button onClick={() => handleDeleteHabit(habit.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default HabitTracker;
import React, { useEffect, useState } from 'react';
import { getHabits, addHabit, updateHabitStatus, deleteHabit } from '../../backend/services/taskService';

function HabitTracker() {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');

    useEffect(() => {
        async function fetchHabits() {
            const fetchedHabits = await getHabits();
            setHabits(fetchedHabits);
        }
        fetchHabits();
    }, []);

    const handleAddHabit = async () => {
        if (!newHabit) return;
        const addedHabit = await addHabit(newHabit);
        if (addedHabit) {
            setHabits([...habits, ...addedHabit]);
            setNewHabit('');
        }
    };

    const handleToggleStatus = async (id, currentStatus) => {
        const updatedHabit = await updateHabitStatus(id, !currentStatus);
        if (updatedHabit) {
            setHabits(habits.map(habit => (habit.id === id ? { ...habit, status: !currentStatus } : habit)));
        }
    };

    const handleDeleteHabit = async (id) => {
        const deletedHabit = await deleteHabit(id);
        if (deletedHabit) {
            setHabits(habits.filter(habit => habit.id !== id));
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Habit Tracker</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter new habit"
                    value={newHabit}
                    onChange={(e) => setNewHabit(e.target.value)}
                    style={{ padding: '8px', fontSize: '14px', marginRight: '10px' }}
                />
                <button onClick={handleAddHabit} style={{ padding: '8px', fontSize: '14px' }}>
                    Add Habit
                </button>
            </div>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {habits.map((habit) => (
                    <li key={habit.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                            style={{
                                textDecoration: habit.status ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleToggleStatus(habit.id, habit.status)}
                        >
                            {habit.name}
                        </span>
                        <button
                            onClick={() => handleDeleteHabit(habit.id)}
                            style={{
                                padding: '5px 10px',
                                fontSize: '12px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '4px',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HabitTracker;
