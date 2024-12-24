// // // import React, { useState, useEffect } from 'react';
// // // import { getHabits, addHabit, updateHabitStatus, deleteHabit } from '../../backend/services/taskService'; 

// // // // Improved Styles for better UI/UX
// // // const habitTrackerStyle = {
// // //   padding: '20px',
// // //   fontFamily: 'Arial, sans-serif',
// // //   backgroundColor: '#f4f7f6',
// // //   borderRadius: '8px',
// // //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // //   maxWidth: '600px',
// // //   margin: 'auto',
// // // };

// // // const habitHeaderStyle = {
// // //   fontSize: '2rem',
// // //   textAlign: 'center',
// // //   marginBottom: '20px',
// // //   color: '#333',
// // // };

// // // const habitFormStyle = {
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   marginBottom: '20px',
// // // };

// // // const habitInputStyle = {
// // //   padding: '8px 12px',
// // //   width: '80%',
// // //   fontSize: '14px',
// // //   border: '1px solid #ccc',
// // //   borderRadius: '4px',
// // // };

// // // const habitButtonStyle = {
// // //   padding: '8px 12px',
// // //   backgroundColor: '#4CAF50',
// // //   color: 'white',
// // //   border: 'none',
// // //   borderRadius: '4px',
// // //   cursor: 'pointer',
// // //   fontWeight: 'bold',
// // //   transition: 'background-color 0.3s',
// // // };

// // // const habitListStyle = {
// // //   listStyle: 'none',
// // //   padding: '0',
// // // };

// // // const habitItemStyle = {
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   alignItems: 'center',
// // //   padding: '10px',
// // //   borderBottom: '1px solid #ddd',
// // // };

// // // const habitCompletedStyle = {
// // //   textDecoration: 'line-through',
// // //   color: '#888',
// // // };

// // // const deleteButtonStyle = {
// // //   backgroundColor: 'red',
// // //   color: 'white',
// // //   border: 'none',
// // //   borderRadius: '4px',
// // //   cursor: 'pointer',
// // //   padding: '5px 10px',
// // //   fontSize: '12px',
// // // };

// // // const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
// // //   const [habitStatus, setHabitStatus] = useState(false);
// // //   const [habitList, setHabitList] = useState([]);
// // //   const [newHabit, setNewHabit] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState('');

// // //   // Fetching habits from the backend
// // //   useEffect(() => {
// // //     const fetchHabits = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const habits = await getHabits();
// // //         setHabitList(habits);
// // //         setError('');
// // //       } catch (err) {
// // //         setError('Error fetching habits.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchHabits();
// // //   }, []);

// // //   // Handle status change of a habit
// // //   const handleHabitStatusChange = async (id, currentStatus) => {
// // //     try {
// // //       await updateHabitStatus(id, !currentStatus);
// // //       const updatedHabits = habitList.map(habit =>
// // //         habit.id === id ? { ...habit, status: !currentStatus } : habit
// // //       );
// // //       setHabitList(updatedHabits);
// // //     } catch (err) {
// // //       setError('Error updating habit status.');
// // //     }
// // //   };

// // //   // Handle adding a new habit
// // //   const handleAddHabit = async () => {
// // //     if (!newHabit.trim()) return;
// // //     setLoading(true);
// // //     try {
// // //       await addHabit(newHabit);
// // //       setNewHabit('');
// // //       const updatedHabits = await getHabits();
// // //       setHabitList(updatedHabits);
// // //       setError('');
// // //     } catch (err) {
// // //       setError('Error adding new habit.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Handle deleting a habit
// // //   const handleDeleteHabit = async (id) => {
// // //     try {
// // //       await deleteHabit(id);
// // //       const updatedHabits = habitList.filter(habit => habit.id !== id);
// // //       setHabitList(updatedHabits);
// // //       setError('');
// // //     } catch (err) {
// // //       setError('Error deleting habit.');
// // //     }
// // //   };

// // //   return (
// // //     <div style={habitTrackerStyle}>
// // //       <h1 style={habitHeaderStyle}>Habit Tracker</h1>
// // //       <div style={habitFormStyle}>
// // //         <input
// // //           type="text"
// // //           placeholder="Enter new habit"
// // //           value={newHabit}
// // //           onChange={(e) => setNewHabit(e.target.value)}
// // //           style={habitInputStyle}
// // //         />
// // //         <button onClick={handleAddHabit} style={habitButtonStyle} disabled={loading}>
// // //           {loading ? 'Adding...' : 'Add Habit'}
// // //         </button>
// // //       </div>

// // //       {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

// // //       <ul style={habitListStyle}>
// // //         {habitList.length === 0 && !loading && (
// // //           <li style={{ textAlign: 'center', padding: '10px' }}>No habits found!</li>
// // //         )}
// // //         {habitList.map((habit) => (
// // //           <li key={habit.id} style={habitItemStyle}>
// // //             <span
// // //               style={habit.status ? habitCompletedStyle : {}}
// // //               onClick={() => handleHabitStatusChange(habit.id, habit.status)}
// // //             >
// // //               {habit.name}
// // //             </span>
// // //             <div>
// // //               <button onClick={() => handleDeleteHabit(habit.id)} style={deleteButtonStyle}>
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default HabitTracker;

// // import React, { useState, useEffect } from 'react';
// // import { supabase } from '../../services/supabaseClient'; // Assuming supabaseClient.js is already set up
// // import { motion } from 'framer-motion';

// // const TaskManager = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [taskTitle, setTaskTitle] = useState('');
// //   const [taskDescription, setTaskDescription] = useState('');
// //   const [taskDueDate, setTaskDueDate] = useState('');
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editingTaskId, setEditingTaskId] = useState(null);
  
// //   // Fetch tasks from Supabase
// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       const { data, error } = await supabase
// //         .from('tasks')
// //         .select('*');
// //       if (error) {
// //         console.error(error);
// //       } else {
// //         setTasks(data);
// //       }
// //     };

// //     fetchTasks();
// //   }, []);

// //   // Add a new task
// //   const addTask = async () => {
// //     if (!taskTitle || !taskDescription || !taskDueDate) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     console.log('Task to be added:', taskTitle, taskDescription, taskDueDate); // Debugging

// //     const { data, error } = await supabase
// //       .from('tasks')
// //       .insert([
// //         {
// //           title: taskTitle,
// //           description: taskDescription,
// //           due_date: taskDueDate,
// //           completed: false,
// //         },
// //       ]);

// //     if (error) {
// //       console.error('Error adding task:', error.message);
// //       alert('Error adding task: ' + error.message); // Show in UI
// //     } else {
// //       console.log('Task added successfully:', data);
// //       setTasks([...tasks, data[0]]);
// //       resetForm();
// //     }
// //   };

// //   // Edit an existing task
// //   const editTask = async () => {
// //     if (!taskTitle || !taskDescription || !taskDueDate) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     const { data, error } = await supabase
// //       .from('tasks')
// //       .update({
// //         title: taskTitle,
// //         description: taskDescription,
// //         due_date: taskDueDate,
// //       })
// //       .eq('id', editingTaskId);

// //     if (error) {
// //       console.error('Error updating task:', error.message);
// //     } else {
// //       const updatedTasks = tasks.map((task) =>
// //         task.id === editingTaskId ? data[0] : task
// //       );
// //       setTasks(updatedTasks);
// //       resetForm();
// //     }
// //   };

// //   // Mark task as complete/incomplete
// //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// //     const { data, error } = await supabase
// //       .from('tasks')
// //       .update({ completed: !currentStatus })
// //       .eq('id', taskId);

// //     if (error) {
// //       console.error('Error updating task:', error.message);
// //     } else {
// //       const updatedTasks = tasks.map((task) =>
// //         task.id === taskId ? data[0] : task
// //       );
// //       setTasks(updatedTasks);
// //     }
// //   };

// //   // Delete a task
// //   const deleteTask = async (taskId) => {
// //     const { error } = await supabase
// //       .from('tasks')
// //       .delete()
// //       .eq('id', taskId);

// //     if (error) {
// //       console.error('Error deleting task:', error.message);
// //     } else {
// //       setTasks(tasks.filter((task) => task.id !== taskId));
// //     }
// //   };

// //   // Reset form
// //   const resetForm = () => {
// //     setTaskTitle('');
// //     setTaskDescription('');
// //     setTaskDueDate('');
// //     setIsEditing(false);
// //     setEditingTaskId(null);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Task Manager</h1>
// //       <div style={styles.formContainer}>
// //         <input
// //           type="text"
// //           placeholder="Task Title"
// //           value={taskTitle}
// //           onChange={(e) => setTaskTitle(e.target.value)}
// //           style={styles.input}
// //         />
// //         <textarea
// //           placeholder="Task Description"
// //           value={taskDescription}
// //           onChange={(e) => setTaskDescription(e.target.value)}
// //           style={styles.input}
// //         />
// //         <input
// //           type="date"
// //           value={taskDueDate}
// //           onChange={(e) => setTaskDueDate(e.target.value)}
// //           style={styles.input}
// //         />
// //         <button
// //           onClick={isEditing ? editTask : addTask}
// //           style={styles.button}
// //         >
// //           {isEditing ? 'Save Changes' : 'Add Task'}
// //         </button>
// //         {isEditing && (
// //           <button onClick={resetForm} style={styles.cancelButton}>
// //             Cancel
// //           </button>
// //         )}
// //       </div>
      
// //       <motion.div 
// //         style={styles.taskList}
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         {tasks.map((task) => (
// //           <motion.div
// //             key={task.id}
// //             style={styles.task}
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <div style={styles.taskDetails}>
// //               <h3>{task.title}</h3>
// //               <p>{task.description}</p>
// //               <p><strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
// //             </div>
// //             <div style={styles.taskActions}>
// //               <button
// //                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
// //                 style={styles.completeButton}
// //               >
// //                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   setIsEditing(true);
// //                   setTaskTitle(task.title);
// //                   setTaskDescription(task.description);
// //                   setTaskDueDate(task.due_date);
// //                   setEditingTaskId(task.id);
// //                 }}
// //                 style={styles.editButton}
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteTask(task.id)}
// //                 style={styles.deleteButton}
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '20px',
// //     backgroundColor: '#f4f4f9',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   heading: {
// //     fontSize: '32px',
// //     fontWeight: '600',
// //     color: '#333',
// //     marginBottom: '20px',
// //   },
// //   formContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     width: '400px',
// //     marginBottom: '20px',
// //   },
// //   input: {
// //     padding: '10px',
// //     margin: '10px 0',
// //     fontSize: '16px',
// //     border: '1px solid #ccc',
// //     borderRadius: '5px',
// //   },
// //   button: {
// //     padding: '10px',
// //     fontSize: '16px',
// //     backgroundColor: '#4CAF50',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   cancelButton: {
// //     padding: '10px',
// //     fontSize: '16px',
// //     backgroundColor: '#f44336',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     marginTop: '10px',
// //   },
// //   taskList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     width: '400px',
// //     marginTop: '20px',
// //   },
// //   task: {
// //     backgroundColor: '#fff',
// //     padding: '15px',
// //     marginBottom: '10px',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// //   },
// //   taskDetails: {
// //     marginBottom: '10px',
// //   },
// //   taskActions: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //   },
// //   completeButton: {
// //     padding: '10px 20px',
// //     fontSize: '14px',
// //     backgroundColor: '#4CAF50',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //   },
// //   editButton: {
// //     padding: '10px 20px',
// //     fontSize: '14px',
// //     backgroundColor: '#ff9800',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //   },
// //   deleteButton: {
// //     padding: '10px 20px',
// //     fontSize: '14px',
// //     backgroundColor: '#f44336',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //   },
// // };

// // export default TaskManager;
// import React, { useState } from 'react';

// const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
//   const [completed, setCompleted] = useState(false);

//   const handleCompletion = () => {
//     setCompleted(!completed);
//     onComplete(taskName);
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       textAlign: 'center',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease'
//     }} onClick={handleCompletion}>
//       <h3>{taskName}</h3>
//       <p>{taskDescription}</p>
//       <button style={{
//         backgroundColor: completed ? '#4caf50' : '#ff7043',
//         color: '#fff',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         cursor: 'pointer',
//       }}>
//         {completed ? 'Completed' : 'Mark as Complete'}
//       </button>
//     </div>
//   );
// };

// export default HabitTracker;

import React, { useState } from 'react';

// HabitTracker component with animation and interactivity
const HabitTracker = ({ taskName, taskDescription, onComplete }) => {
  const [completed, setCompleted] = useState(false); // Track completion status

  const handleComplete = () => {
    setCompleted(!completed);
    if (onComplete) onComplete(taskName);
  };

  const styles = {
    habitCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    },
    habitCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    },
    habitTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '10px',
    },
    habitDescription: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '20px',
    },
    habitButton: {
      padding: '10px 20px',
      backgroundColor: completed ? '#4caf50' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    habitButtonText: {
      fontWeight: 'bold',
    },
    checkMark: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      color: completed ? '#4caf50' : '#ccc',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <div
      style={{
        ...styles.habitCard,
        ...(completed && styles.habitCardHover),
      }}
      onClick={handleComplete}
    >
      <div style={styles.checkMark}>{completed ? '✔️' : ''}</div>
      <h3 style={styles.habitTitle}>{taskName}</h3>
      <p style={styles.habitDescription}>{taskDescription}</p>
      <button style={styles.habitButton}>
        <span style={styles.habitButtonText}>
          {completed ? 'Completed' : 'Mark as Done'}
        </span>
      </button>
    </div>
  );
};

export default HabitTracker;
