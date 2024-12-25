// // // // // // //src\frontend\components\TaskManager.js
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { supabase } from '../../services/supabaseClient'; // Assuming supabaseClient.js is already set up
// // // // // // import { motion } from 'framer-motion';

// // // // // // const TaskManager = () => {
// // // // // //   const [tasks, setTasks] = useState([]);
// // // // // //   const [taskTitle, setTaskTitle] = useState('');
// // // // // //   const [taskDescription, setTaskDescription] = useState('');
// // // // // //   const [taskDueDate, setTaskDueDate] = useState('');
// // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // //   const [editingTaskId, setEditingTaskId] = useState(null);
  
// // // // // //   // Fetch tasks from Supabase
// // // // // //   useEffect(() => {
// // // // // //     const fetchTasks = async () => {
// // // // // //       const { data, error } = await supabase
// // // // // //         .from('tasks')
// // // // // //         .select('*');
// // // // // //       if (error) {
// // // // // //         console.error(error);
// // // // // //       } else {
// // // // // //         setTasks(data);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchTasks();
// // // // // //   }, []);

// // // // // //   // Add a new task
// // // // // //   const addTask = async () => {
// // // // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // // // //       alert('Please fill in all fields');
// // // // // //       return;
// // // // // //     }

// // // // // //     const { data, error } = await supabase
// // // // // //       .from('tasks')
// // // // // //       .insert([
// // // // // //         {
// // // // // //           title: taskTitle,
// // // // // //           description: taskDescription,
// // // // // //           due_date: taskDueDate,
// // // // // //           completed: false,
// // // // // //         },
// // // // // //       ]);

// // // // // //     if (error) {
// // // // // //       console.error(error);
// // // // // //     } else {
// // // // // //       setTasks([...tasks, data[0]]);
// // // // // //       resetForm();
// // // // // //     }
// // // // // //   };

// // // // // //   // Edit an existing task
// // // // // //   const editTask = async () => {
// // // // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // // // //       alert('Please fill in all fields');
// // // // // //       return;
// // // // // //     }

// // // // // //     const { data, error } = await supabase
// // // // // //       .from('tasks')
// // // // // //       .update({
// // // // // //         title: taskTitle,
// // // // // //         description: taskDescription,
// // // // // //         due_date: taskDueDate,
// // // // // //       })
// // // // // //       .eq('id', editingTaskId);

// // // // // //     if (error) {
// // // // // //       console.error(error);
// // // // // //     } else {
// // // // // //       const updatedTasks = tasks.map((task) =>
// // // // // //         task.id === editingTaskId ? data[0] : task
// // // // // //       );
// // // // // //       setTasks(updatedTasks);
// // // // // //       resetForm();
// // // // // //     }
// // // // // //   };

// // // // // //   // Mark task as complete/incomplete
// // // // // //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// // // // // //     const { data, error } = await supabase
// // // // // //       .from('tasks')
// // // // // //       .update({ completed: !currentStatus })
// // // // // //       .eq('id', taskId);

// // // // // //     if (error) {
// // // // // //       console.error(error);
// // // // // //     } else {
// // // // // //       const updatedTasks = tasks.map((task) =>
// // // // // //         task.id === taskId ? data[0] : task
// // // // // //       );
// // // // // //       setTasks(updatedTasks);
// // // // // //     }
// // // // // //   };

// // // // // //   // Delete a task
// // // // // //   const deleteTask = async (taskId) => {
// // // // // //     const { error } = await supabase
// // // // // //       .from('tasks')
// // // // // //       .delete()
// // // // // //       .eq('id', taskId);

// // // // // //     if (error) {
// // // // // //       console.error(error);
// // // // // //     } else {
// // // // // //       setTasks(tasks.filter((task) => task.id !== taskId));
// // // // // //     }
// // // // // //   };

// // // // // //   // Reset form
// // // // // //   const resetForm = () => {
// // // // // //     setTaskTitle('');
// // // // // //     setTaskDescription('');
// // // // // //     setTaskDueDate('');
// // // // // //     setIsEditing(false);
// // // // // //     setEditingTaskId(null);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <h1 style={styles.heading}>Task Manager</h1>
// // // // // //       <div style={styles.formContainer}>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Task Title"
// // // // // //           value={taskTitle}
// // // // // //           onChange={(e) => setTaskTitle(e.target.value)}
// // // // // //           style={styles.input}
// // // // // //         />
// // // // // //         <textarea
// // // // // //           placeholder="Task Description"
// // // // // //           value={taskDescription}
// // // // // //           onChange={(e) => setTaskDescription(e.target.value)}
// // // // // //           style={styles.input}
// // // // // //         />
// // // // // //         <input
// // // // // //           type="date"
// // // // // //           value={taskDueDate}
// // // // // //           onChange={(e) => setTaskDueDate(e.target.value)}
// // // // // //           style={styles.input}
// // // // // //         />
// // // // // //         <button
// // // // // //           onClick={isEditing ? editTask : addTask}
// // // // // //           style={styles.button}
// // // // // //         >
// // // // // //           {isEditing ? 'Save Changes' : 'Add Task'}
// // // // // //         </button>
// // // // // //         {isEditing && (
// // // // // //           <button onClick={resetForm} style={styles.cancelButton}>
// // // // // //             Cancel
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>
      
// // // // // //       <motion.div 
// // // // // //         style={styles.taskList}
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ duration: 0.5 }}
// // // // // //       >
// // // // // //         {tasks.map((task) => (
// // // // // //           <motion.div
// // // // // //             key={task.id}
// // // // // //             style={styles.task}
// // // // // //             whileHover={{ scale: 1.05 }}
// // // // // //             whileTap={{ scale: 0.95 }}
// // // // // //           >
// // // // // //             <div style={styles.taskDetails}>
// // // // // //               <h3>{task.title}</h3>
// // // // // //               <p>{task.description}</p>
// // // // // //               <p><strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
// // // // // //             </div>
// // // // // //             <div style={styles.taskActions}>
// // // // // //               <button
// // // // // //                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
// // // // // //                 style={styles.completeButton}
// // // // // //               >
// // // // // //                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => {
// // // // // //                   setIsEditing(true);
// // // // // //                   setTaskTitle(task.title);
// // // // // //                   setTaskDescription(task.description);
// // // // // //                   setTaskDueDate(task.due_date);
// // // // // //                   setEditingTaskId(task.id);
// // // // // //                 }}
// // // // // //                 style={styles.editButton}
// // // // // //               >
// // // // // //                 Edit
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => deleteTask(task.id)}
// // // // // //                 style={styles.deleteButton}
// // // // // //               >
// // // // // //                 Delete
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </motion.div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const styles = {
// // // // // //   container: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     alignItems: 'center',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#f4f4f9',
// // // // // //     fontFamily: 'Arial, sans-serif',
// // // // // //   },
// // // // // //   heading: {
// // // // // //     fontSize: '32px',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#333',
// // // // // //     marginBottom: '20px',
// // // // // //   },
// // // // // //   formContainer: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     width: '400px',
// // // // // //     marginBottom: '20px',
// // // // // //   },
// // // // // //   input: {
// // // // // //     padding: '10px',
// // // // // //     margin: '10px 0',
// // // // // //     fontSize: '16px',
// // // // // //     border: '1px solid #ccc',
// // // // // //     borderRadius: '5px',
// // // // // //   },
// // // // // //   button: {
// // // // // //     padding: '10px',
// // // // // //     fontSize: '16px',
// // // // // //     backgroundColor: '#4CAF50',
// // // // // //     color: '#fff',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '5px',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'background-color 0.3s ease',
// // // // // //   },
// // // // // //   cancelButton: {
// // // // // //     padding: '10px',
// // // // // //     fontSize: '16px',
// // // // // //     backgroundColor: '#f44336',
// // // // // //     color: '#fff',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '5px',
// // // // // //     cursor: 'pointer',
// // // // // //     marginTop: '10px',
// // // // // //   },
// // // // // //   taskList: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     width: '400px',
// // // // // //     marginTop: '20px',
// // // // // //   },
// // // // // //   task: {
// // // // // //     backgroundColor: '#fff',
// // // // // //     padding: '15px',
// // // // // //     marginBottom: '10px',
// // // // // //     borderRadius: '8px',
// // // // // //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // // // // //   },
// // // // // //   taskDetails: {
// // // // // //     marginBottom: '10px',
// // // // // //   },
// // // // // //   taskActions: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //   },
// // // // // //   completeButton: {
// // // // // //     padding: '10px 20px',
// // // // // //     fontSize: '14px',
// // // // // //     backgroundColor: '#4CAF50',
// // // // // //     color: '#fff',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '5px',
// // // // // //     cursor: 'pointer',
// // // // // //   },
// // // // // //   editButton: {
// // // // // //     padding: '10px 20px',
// // // // // //     fontSize: '14px',
// // // // // //     backgroundColor: '#ff9800',
// // // // // //     color: '#fff',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '5px',
// // // // // //     cursor: 'pointer',
// // // // // //   },
// // // // // //   deleteButton: {
// // // // // //     padding: '10px 20px',
// // // // // //     fontSize: '14px',
// // // // // //     backgroundColor: '#f44336',
// // // // // //     color: '#fff',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '5px',
// // // // // //     cursor: 'pointer',
// // // // // //   },
// // // // // // };

// // // // // // export default TaskManager;

// // // import React, { useState, useEffect } from 'react';
// // // import { supabase } from '../../services/supabaseClient'; // Assuming supabaseClient.js is already set up


// // // import { motion } from 'framer-motion';

// // // const TaskManager = () => {
// // //   const [tasks, setTasks] = useState([]);
// // //   const [taskTitle, setTaskTitle] = useState('');
// // //   const [taskDescription, setTaskDescription] = useState('');
// // //   const [taskDueDate, setTaskDueDate] = useState('');
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [editingTaskId, setEditingTaskId] = useState(null);
// // //   const [notification, setNotification] = useState('');
  
// // //   // Fetch tasks from Supabase
// // //   useEffect(() => {
// // //     const fetchTasks = async () => {
// // //       const { data, error } = await supabase
// // //         .from('tasks')
// // //         .select('*');
// // //       if (error) {
// // //         console.error(error);
// // //         setNotification('Error fetching tasks');
// // //       } else {
// // //         setTasks(data);
// // //       }
// // //     };

// // //     fetchTasks();
// // //   }, []);

// // //   // Add a new task
// // //   const addTask = async () => {
// // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // //       alert('Please fill in all fields');
// // //       return;
// // //     }

// // //     const { data, error } = await supabase
// // //       .from('tasks')
// // //       .insert([
// // //         {
// // //           title: taskTitle,
// // //           description: taskDescription,
// // //           due_date: taskDueDate,
// // //           completed: false,
// // //         },
// // //       ]);

// // //     if (error) {
// // //       console.error(error);
// // //       setNotification('Error adding task');
// // //     } else {
// // //       setTasks([...tasks, data[0]]);
// // //       setNotification('Task added successfully');
// // //       resetForm();
// // //     }
// // //   };

// // //   // Edit an existing task
// // //   const editTask = async () => {
// // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // //       alert('Please fill in all fields');
// // //       return;
// // //     }

// // //     const { data, error } = await supabase
// // //       .from('tasks')
// // //       .update({
// // //         title: taskTitle,
// // //         description: taskDescription,
// // //         due_date: taskDueDate,
// // //       })
// // //       .eq('id', editingTaskId);

// // //     if (error) {
// // //       console.error(error);
// // //       setNotification('Error editing task');
// // //     } else {
// // //       const updatedTasks = tasks.map((task) =>
// // //         task.id === editingTaskId ? data[0] : task
// // //       );
// // //       setTasks(updatedTasks);
// // //       setNotification('Task updated successfully');
// // //       resetForm();
// // //     }
// // //   };

// // //   // Mark task as complete/incomplete
// // //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// // //     const { data, error } = await supabase
// // //       .from('tasks')
// // //       .update({ completed: !currentStatus })
// // //       .eq('id', taskId);

// // //     if (error) {
// // //       console.error(error);
// // //       setNotification('Error toggling task completion');
// // //     } else {
// // //       const updatedTasks = tasks.map((task) =>
// // //         task.id === taskId ? data[0] : task
// // //       );
// // //       setTasks(updatedTasks);
// // //       setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
// // //     }
// // //   };

// // //   // Delete a task
// // //   const deleteTask = async (taskId) => {
// // //     const { error } = await supabase
// // //       .from('tasks')
// // //       .delete()
// // //       .eq('id', taskId);

// // //     if (error) {
// // //       console.error(error);
// // //       setNotification('Error deleting task');
// // //     } else {
// // //       setTasks(tasks.filter((task) => task.id !== taskId));
// // //       setNotification('Task deleted successfully');
// // //     }
// // //   };

// // //   // Reset form
// // //   const resetForm = () => {
// // //     setTaskTitle('');
// // //     setTaskDescription('');
// // //     setTaskDueDate('');
// // //     setIsEditing(false);
// // //     setEditingTaskId(null);
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.heading}>Task Manager</h1>
      
// // //       {/* Notification */}
// // //       {notification && <div style={styles.notification}>{notification}</div>}
      
// // //       <div style={styles.formContainer}>
// // //         <input
// // //           type="text"
// // //           placeholder="Task Title"
// // //           value={taskTitle}
// // //           onChange={(e) => setTaskTitle(e.target.value)}
// // //           style={styles.input}
// // //         />
// // //         <textarea
// // //           placeholder="Task Description"
// // //           value={taskDescription}
// // //           onChange={(e) => setTaskDescription(e.target.value)}
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="date"
// // //           value={taskDueDate}
// // //           onChange={(e) => setTaskDueDate(e.target.value)}
// // //           style={styles.input}
// // //         />
// // //         <button
// // //           onClick={isEditing ? editTask : addTask}
// // //           style={styles.button}
// // //         >
// // //           {isEditing ? 'Save Changes' : 'Add Task'}
// // //         </button>
// // //         {isEditing && (
// // //           <button onClick={resetForm} style={styles.cancelButton}>
// // //             Cancel
// // //           </button>
// // //         )}
// // //       </div>
      
// // //       <motion.div 
// // //         style={styles.taskList}
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         {tasks.map((task) => (
// // //           <motion.div
// // //             key={task.id}
// // //             style={styles.task}
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //           >
// // //             <div style={styles.taskDetails}>
// // //               <h3>{task.title}</h3>
// // //               <p>{task.description}</p>
// // //               <p><strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
// // //             </div>
// // //             <div style={styles.taskActions}>
// // //               <button
// // //                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
// // //                 style={styles.completeButton}
// // //               >
// // //                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
// // //               </button>
// // //               <button
// // //                 onClick={() => {
// // //                   setIsEditing(true);
// // //                   setTaskTitle(task.title);
// // //                   setTaskDescription(task.description);
// // //                   setTaskDueDate(task.due_date);
// // //                   setEditingTaskId(task.id);
// // //                 }}
// // //                 style={styles.editButton}
// // //               >
// // //                 Edit
// // //               </button>
// // //               <button
// // //                 onClick={() => deleteTask(task.id)}
// // //                 style={styles.deleteButton}
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '20px',
// // //     backgroundColor: '#f4f4f9',
// // //     fontFamily: 'Arial, sans-serif',
// // //   },
// // //   heading: {
// // //     fontSize: '32px',
// // //     fontWeight: '600',
// // //     color: '#333',
// // //     marginBottom: '20px',
// // //   },
// // //   notification: {
// // //     padding: '10px',
// // //     backgroundColor: '#4CAF50',
// // //     color: '#fff',
// // //     marginBottom: '20px',
// // //     borderRadius: '5px',
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //   },
// // //   formContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     width: '400px',
// // //     marginBottom: '20px',
// // //   },
// // //   input: {
// // //     padding: '10px',
// // //     margin: '10px 0',
// // //     fontSize: '16px',
// // //     border: '1px solid #ccc',
// // //     borderRadius: '5px',
// // //   },
// // //   button: {
// // //     padding: '10px',
// // //     fontSize: '16px',
// // //     backgroundColor: '#4CAF50',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // //   cancelButton: {
// // //     padding: '10px',
// // //     fontSize: '16px',
// // //     backgroundColor: '#f44336',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     marginTop: '10px',
// // //   },
// // //   taskList: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     width: '400px',
// // //     marginTop: '20px',
// // //   },
// // //   task: {
// // //     backgroundColor: '#fff',
// // //     padding: '15px',
// // //     marginBottom: '10px',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // //   },
// // //   taskDetails: {
// // //     marginBottom: '10px',
// // //   },
// // //   taskActions: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //   },
// // //   completeButton: {
// // //     padding: '10px 20px',
// // //     fontSize: '14px',
// // //     backgroundColor: '#4CAF50',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //   },
// // //   editButton: {
// // //     padding: '10px 20px',
// // //     fontSize: '14px',
// // //     backgroundColor: '#ff9800',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //   },
// // //   deleteButton: {
// // //     padding: '10px 20px',
// // //     fontSize: '14px',
// // //     backgroundColor: '#f44336',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //   },
// // // };

// // // export default TaskManager;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { supabase } from '../../services/supabaseClient'; // Assuming supabaseClient.js is already set up
// // // // import { motion } from 'framer-motion';

// // // // const TaskManager = () => {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [taskTitle, setTaskTitle] = useState('');
// // // //   const [taskDescription, setTaskDescription] = useState('');
// // // //   const [taskDueDate, setTaskDueDate] = useState('');
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editingTaskId, setEditingTaskId] = useState(null);
// // // //   const [notification, setNotification] = useState('');
// // // //   const [notificationType, setNotificationType] = useState('');  // 'success' or 'error'

// // // //   // Fetch tasks from Supabase
// // // //   useEffect(() => {
// // // //     const fetchTasks = async () => {
// // // //       const { data, error } = await supabase
// // // //         .from('tasks')
// // // //         .select('*');

// // // //       if (error) {
// // // //         console.error('Error fetching tasks:', error);
// // // //         setNotificationType('error');
// // // //         setNotification('Error fetching tasks: ' + error.message);
// // // //       } else {
// // // //         setTasks(data);
// // // //         setNotificationType('success');
// // // //         setNotification('Tasks fetched successfully');
// // // //       }
// // // //     };

// // // //     fetchTasks();
// // // //   }, []);

// // // //   // Add a new task
// // // //   const addTask = async () => {
// // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // //       alert('Please fill in all fields');
// // // //       return;
// // // //     }

// // // //     const { data, error } = await supabase
// // // //       .from('tasks')
// // // //       .insert([
// // // //         {
// // // //           title: taskTitle,
// // // //           description: taskDescription,
// // // //           due_date: taskDueDate,
// // // //           completed: false,
// // // //         },
// // // //       ]);

// // // //     if (error) {
// // // //       console.error('Error adding task:', error);
// // // //       setNotificationType('error');
// // // //       setNotification('Error adding task: ' + error.message);
// // // //     } else {
// // // //       setTasks([...tasks, data[0]]);
// // // //       setNotificationType('success');
// // // //       setNotification('Task added successfully');
// // // //       resetForm();
// // // //     }
// // // //   };

// // // //   // Edit an existing task
// // // //   const editTask = async () => {
// // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // //       alert('Please fill in all fields');
// // // //       return;
// // // //     }

// // // //     const { data, error } = await supabase
// // // //       .from('tasks')
// // // //       .update({
// // // //         title: taskTitle,
// // // //         description: taskDescription,
// // // //         due_date: taskDueDate,
// // // //       })
// // // //       .eq('id', editingTaskId);

// // // //     if (error) {
// // // //       console.error('Error editing task:', error);
// // // //       setNotificationType('error');
// // // //       setNotification('Error editing task: ' + error.message);
// // // //     } else {
// // // //       const updatedTasks = tasks.map((task) =>
// // // //         task.id === editingTaskId ? data[0] : task
// // // //       );
// // // //       setTasks(updatedTasks);
// // // //       setNotificationType('success');
// // // //       setNotification('Task updated successfully');
// // // //       resetForm();
// // // //     }
// // // //   };

// // // //   // Mark task as complete/incomplete
// // // //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// // // //     const { data, error } = await supabase
// // // //       .from('tasks')
// // // //       .update({ completed: !currentStatus })
// // // //       .eq('id', taskId);

// // // //     if (error) {
// // // //       console.error('Error toggling task completion:', error);
// // // //       setNotificationType('error');
// // // //       setNotification('Error toggling task completion: ' + error.message);
// // // //     } else {
// // // //       const updatedTasks = tasks.map((task) =>
// // // //         task.id === taskId ? data[0] : task
// // // //       );
// // // //       setTasks(updatedTasks);
// // // //       setNotificationType('success');
// // // //       setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
// // // //     }
// // // //   };

// // // //   // Delete a task
// // // //   const deleteTask = async (taskId) => {
// // // //     const { error } = await supabase
// // // //       .from('tasks')
// // // //       .delete()
// // // //       .eq('id', taskId);

// // // //     if (error) {
// // // //       console.error('Error deleting task:', error);
// // // //       setNotificationType('error');
// // // //       setNotification('Error deleting task: ' + error.message);
// // // //     } else {
// // // //       setTasks(tasks.filter((task) => task.id !== taskId));
// // // //       setNotificationType('success');
// // // //       setNotification('Task deleted successfully');
// // // //     }
// // // //   };

// // // //   // Reset form
// // // //   const resetForm = () => {
// // // //     setTaskTitle('');
// // // //     setTaskDescription('');
// // // //     setTaskDueDate('');
// // // //     setIsEditing(false);
// // // //     setEditingTaskId(null);
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.heading}>Task Manager</h1>

// // // //       {/* Notification */}
// // // //       {notification && (
// // // //         <div
// // // //           style={{
// // // //             ...styles.notification,
// // // //             backgroundColor: notificationType === 'success' ? '#4CAF50' : '#f44336',
// // // //           }}
// // // //         >
// // // //           {notification}
// // // //         </div>
// // // //       )}

// // // //       <div style={styles.formContainer}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Task Title"
// // // //           value={taskTitle}
// // // //           onChange={(e) => setTaskTitle(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <textarea
// // // //           placeholder="Task Description"
// // // //           value={taskDescription}
// // // //           onChange={(e) => setTaskDescription(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <input
// // // //           type="date"
// // // //           value={taskDueDate}
// // // //           onChange={(e) => setTaskDueDate(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <button
// // // //           onClick={isEditing ? editTask : addTask}
// // // //           style={styles.button}
// // // //         >
// // // //           {isEditing ? 'Save Changes' : 'Add Task'}
// // // //         </button>
// // // //         {isEditing && (
// // // //           <button onClick={resetForm} style={styles.cancelButton}>
// // // //             Cancel
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       <motion.div
// // // //         style={styles.taskList}
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //       >
// // // //         {tasks.map((task) => (
// // // //           <motion.div
// // // //             key={task.id}
// // // //             style={styles.task}
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //           >
// // // //             <div style={styles.taskDetails}>
// // // //               <h3>{task.title}</h3>
// // // //               <p>{task.description}</p>
// // // //               <p>
// // // //                 <strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}
// // // //               </p>
// // // //             </div>
// // // //             <div style={styles.taskActions}>
// // // //               <button
// // // //                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
// // // //                 style={styles.completeButton}
// // // //               >
// // // //                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => {
// // // //                   setIsEditing(true);
// // // //                   setTaskTitle(task.title);
// // // //                   setTaskDescription(task.description);
// // // //                   setTaskDueDate(task.due_date);
// // // //                   setEditingTaskId(task.id);
// // // //                 }}
// // // //                 style={styles.editButton}
// // // //               >
// // // //                 Edit
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => deleteTask(task.id)}
// // // //                 style={styles.deleteButton}
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     padding: '20px',
// // // //     backgroundColor: '#f4f4f9',
// // // //     fontFamily: 'Arial, sans-serif',
// // // //   },
// // // //   heading: {
// // // //     fontSize: '32px',
// // // //     fontWeight: '600',
// // // //     color: '#333',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   notification: {
// // // //     padding: '10px',
// // // //     color: '#fff',
// // // //     marginBottom: '20px',
// // // //     borderRadius: '5px',
// // // //     fontSize: '16px',
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   formContainer: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     width: '400px',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   input: {
// // // //     padding: '10px',
// // // //     margin: '10px 0',
// // // //     fontSize: '16px',
// // // //     border: '1px solid #ccc',
// // // //     borderRadius: '5px',
// // // //   },
// // // //   button: {
// // // //     padding: '10px',
// // // //     fontSize: '16px',
// // // //     backgroundColor: '#4CAF50',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // //   cancelButton: {
// // // //     padding: '10px',
// // // //     fontSize: '16px',
// // // //     backgroundColor: '#f44336',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     marginTop: '10px',
// // // //   },
// // // //   taskList: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     width: '400px',
// // // //     marginTop: '20px',
// // // //   },
// // // //   task: {
// // // //     backgroundColor: '#fff',
// // // //     padding: '15px',
// // // //     marginBottom: '10px',
// // // //     borderRadius: '8px',
// // // //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // // //   },
// // // //   taskDetails: {
// // // //     marginBottom: '10px',
// // // //   },
// // // //   taskActions: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   completeButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#4CAF50',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // //   editButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#ff9800',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // //   deleteButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#f44336',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // // };

// // // // export default TaskManager;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { supabase } from '../../services/supabaseClient'; // Assuming supabaseClient.js is already set up
// // // // import { motion } from 'framer-motion';

// // // // const TaskManager = () => {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [taskTitle, setTaskTitle] = useState('');
// // // //   const [taskDescription, setTaskDescription] = useState('');
// // // //   const [taskDueDate, setTaskDueDate] = useState('');
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editingTaskId, setEditingTaskId] = useState(null);
// // // //   const [notification, setNotification] = useState('');
// // // //   const [notificationType, setNotificationType] = useState('');  // 'success' or 'error'

// // // //   // Fetch tasks from Supabase
// // // //   useEffect(() => {
// // // //     const fetchTasks = async () => {
// // // //       try {
// // // //         const { data, error } = await supabase.from('tasks').select('*');

// // // //         if (error) {
// // // //           console.error('Error fetching tasks:', error);
// // // //           setNotificationType('error');
// // // //           setNotification('Error fetching tasks: ' + error.message);
// // // //         } else {
// // // //           setTasks(data);
// // // //           setNotificationType('success');
// // // //           setNotification('Tasks fetched successfully');
// // // //         }
// // // //       } catch (err) {
// // // //         console.error('Unexpected error:', err);
// // // //         setNotificationType('error');
// // // //         setNotification('Unexpected error occurred');
// // // //       }
// // // //     };

// // // //     fetchTasks();
// // // //   }, []);

// // // //   // Add a new task
// // // //   const addTask = async () => {
// // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // //       alert('Please fill in all fields');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const { data, error } = await supabase.from('tasks').insert([
// // // //         {
// // // //           title: taskTitle,
// // // //           description: taskDescription,
// // // //           due_date: taskDueDate,
// // // //           completed: false,
// // // //         },
// // // //       ]);

// // // //       if (error) {
// // // //         console.error('Error adding task:', error);
// // // //         setNotificationType('error');
// // // //         setNotification('Error adding task: ' + error.message);
// // // //       } else {
// // // //         if (data && data.length > 0) {
// // // //           setTasks([...tasks, data[0]]);
// // // //           setNotificationType('success');
// // // //           setNotification('Task added successfully');
// // // //           resetForm();
// // // //         } else {
// // // //           setNotificationType('error');
// // // //           setNotification('Error: No task data returned');
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Unexpected error:', err);
// // // //       setNotificationType('error');
// // // //       setNotification('Unexpected error occurred');
// // // //     }
// // // //   };

// // // //   // Edit an existing task
// // // //   const editTask = async () => {
// // // //     if (!taskTitle || !taskDescription || !taskDueDate) {
// // // //       alert('Please fill in all fields');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const { data, error } = await supabase
// // // //         .from('tasks')
// // // //         .update({
// // // //           title: taskTitle,
// // // //           description: taskDescription,
// // // //           due_date: taskDueDate,
// // // //         })
// // // //         .eq('id', editingTaskId);

// // // //       if (error) {
// // // //         console.error('Error editing task:', error);
// // // //         setNotificationType('error');
// // // //         setNotification('Error editing task: ' + error.message);
// // // //       } else {
// // // //         if (data && data.length > 0) {
// // // //           const updatedTasks = tasks.map((task) =>
// // // //             task.id === editingTaskId ? data[0] : task
// // // //           );
// // // //           setTasks(updatedTasks);
// // // //           setNotificationType('success');
// // // //           setNotification('Task updated successfully');
// // // //           resetForm();
// // // //         } else {
// // // //           setNotificationType('error');
// // // //           setNotification('Error: No task data returned');
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Unexpected error:', err);
// // // //       setNotificationType('error');
// // // //       setNotification('Unexpected error occurred');
// // // //     }
// // // //   };

// // // //   // Mark task as complete/incomplete
// // // //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// // // //     try {
// // // //       const { data, error } = await supabase
// // // //         .from('tasks')
// // // //         .update({ completed: !currentStatus })
// // // //         .eq('id', taskId);

// // // //       if (error) {
// // // //         console.error('Error toggling task completion:', error);
// // // //         setNotificationType('error');
// // // //         setNotification('Error toggling task completion: ' + error.message);
// // // //       } else {
// // // //         if (data && data.length > 0) {
// // // //           const updatedTasks = tasks.map((task) =>
// // // //             task.id === taskId ? data[0] : task
// // // //           );
// // // //           setTasks(updatedTasks);
// // // //           setNotificationType('success');
// // // //           setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
// // // //         } else {
// // // //           setNotificationType('error');
// // // //           setNotification('Error: No task data returned');
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Unexpected error:', err);
// // // //       setNotificationType('error');
// // // //       setNotification('Unexpected error occurred');
// // // //     }
// // // //   };

// // // //   // Delete a task
// // // //   const deleteTask = async (taskId) => {
// // // //     try {
// // // //       const { error } = await supabase
// // // //         .from('tasks')
// // // //         .delete()
// // // //         .eq('id', taskId);

// // // //       if (error) {
// // // //         console.error('Error deleting task:', error);
// // // //         setNotificationType('error');
// // // //         setNotification('Error deleting task: ' + error.message);
// // // //       } else {
// // // //         setTasks(tasks.filter((task) => task.id !== taskId));
// // // //         setNotificationType('success');
// // // //         setNotification('Task deleted successfully');
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Unexpected error:', err);
// // // //       setNotificationType('error');
// // // //       setNotification('Unexpected error occurred');
// // // //     }
// // // //   };

// // // //   // Reset form
// // // //   const resetForm = () => {
// // // //     setTaskTitle('');
// // // //     setTaskDescription('');
// // // //     setTaskDueDate('');
// // // //     setIsEditing(false);
// // // //     setEditingTaskId(null);
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.heading}>Task Manager</h1>

// // // //       {/* Notification */}
// // // //       {notification && (
// // // //         <div
// // // //           style={{
// // // //             ...styles.notification,
// // // //             backgroundColor: notificationType === 'success' ? '#4CAF50' : '#f44336',
// // // //           }}
// // // //         >
// // // //           {notification}
// // // //         </div>
// // // //       )}

// // // //       <div style={styles.formContainer}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Task Title"
// // // //           value={taskTitle}
// // // //           onChange={(e) => setTaskTitle(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <textarea
// // // //           placeholder="Task Description"
// // // //           value={taskDescription}
// // // //           onChange={(e) => setTaskDescription(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <input
// // // //           type="date"
// // // //           value={taskDueDate}
// // // //           onChange={(e) => setTaskDueDate(e.target.value)}
// // // //           style={styles.input}
// // // //         />
// // // //         <button
// // // //           onClick={isEditing ? editTask : addTask}
// // // //           style={styles.button}
// // // //         >
// // // //           {isEditing ? 'Save Changes' : 'Add Task'}
// // // //         </button>
// // // //         {isEditing && (
// // // //           <button onClick={resetForm} style={styles.cancelButton}>
// // // //             Cancel
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       <motion.div
// // // //         style={styles.taskList}
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ duration: 0.5 }}
// // // //       >
// // // //         {tasks.map((task) => (
// // // //           <motion.div
// // // //             key={task.id}
// // // //             style={styles.task}
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //           >
// // // //             <div style={styles.taskDetails}>
// // // //               <h3>{task.title}</h3>
// // // //               <p>{task.description}</p>
// // // //               <p>
// // // //                 <strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}
// // // //               </p>
// // // //             </div>
// // // //             <div style={styles.taskActions}>
// // // //               <button
// // // //                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
// // // //                 style={styles.completeButton}
// // // //               >
// // // //                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => {
// // // //                   setIsEditing(true);
// // // //                   setTaskTitle(task.title);
// // // //                   setTaskDescription(task.description);
// // // //                   setTaskDueDate(task.due_date);
// // // //                   setEditingTaskId(task.id);
// // // //                 }}
// // // //                 style={styles.editButton}
// // // //               >
// // // //                 Edit
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => deleteTask(task.id)}
// // // //                 style={styles.deleteButton}
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     padding: '20px',
// // // //     backgroundColor: '#f4f4f9',
// // // //     fontFamily: 'Arial, sans-serif',
// // // //   },
// // // //   heading: {
// // // //     fontSize: '32px',
// // // //     fontWeight: '600',
// // // //     color: '#333',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   notification: {
// // // //     padding: '10px',
// // // //     color: '#fff',
// // // //     marginBottom: '20px',
// // // //     borderRadius: '5px',
// // // //     fontSize: '16px',
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   formContainer: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     width: '400px',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   input: {
// // // //     padding: '10px',
// // // //     margin: '10px 0',
// // // //     fontSize: '16px',
// // // //     border: '1px solid #ccc',
// // // //     borderRadius: '5px',
// // // //   },
// // // //   button: {
// // // //     padding: '10px',
// // // //     fontSize: '16px',
// // // //     backgroundColor: '#4CAF50',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // //   cancelButton: {
// // // //     padding: '10px',
// // // //     fontSize: '16px',
// // // //     backgroundColor: '#f44336',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     marginTop: '10px',
// // // //   },
// // // //   taskList: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     width: '400px',
// // // //     marginTop: '20px',
// // // //   },
// // // //   task: {
// // // //     backgroundColor: '#fff',
// // // //     padding: '15px',
// // // //     marginBottom: '10px',
// // // //     borderRadius: '8px',
// // // //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // // //   },
// // // //   taskDetails: {
// // // //     marginBottom: '10px',
// // // //   },
// // // //   taskActions: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   completeButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#4CAF50',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // //   editButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#ff9800',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // //   deleteButton: {
// // // //     padding: '10px 20px',
// // // //     fontSize: '14px',
// // // //     backgroundColor: '#f44336',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // // };

// // // // export default TaskManager;


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
// //   const [notification, setNotification] = useState('');
// //   const [notificationType, setNotificationType] = useState('');  // 'success' or 'error'

// //   // Fetch tasks from Supabase
// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       try {
// //         const { data, error } = await supabase.from('tasks').select('*');

// //         if (error) {
// //           console.error('Error fetching tasks:', error);
// //           setNotificationType('error');
// //           setNotification('Error fetching tasks: ' + error.message);
// //         } else {
// //           setTasks(data);
// //           setNotificationType('success');
// //           setNotification('Tasks fetched successfully');
// //         }
// //       } catch (err) {
// //         console.error('Unexpected error:', err);
// //         setNotificationType('error');
// //         setNotification('Unexpected error occurred');
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

// //     try {
// //       const { data, error } = await supabase.from('tasks').insert([
// //         {
// //           title: taskTitle,
// //           description: taskDescription,
// //           due_date: taskDueDate,
// //           completed: false,
// //         },
// //       ]);

// //       if (error) {
// //         console.error('Error adding task:', error);
// //         setNotificationType('error');
// //         setNotification('Error adding task: ' + error.message);
// //       } else {
// //         if (data && data.length > 0) {
// //           setTasks([...tasks, data[0]]);
// //           setNotificationType('success');
// //           setNotification('Task added successfully');
// //           resetForm();
// //         } else {
// //           setNotificationType('error');
// //           setNotification('Error: No task data returned');
// //         }
// //       }
// //     } catch (err) {
// //       console.error('Unexpected error:', err);
// //       setNotificationType('error');
// //       setNotification('Unexpected error occurred');
// //     }
// //   };

// //   // Edit an existing task
// //   const editTask = async () => {
// //     if (!taskTitle || !taskDescription || !taskDueDate) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     try {
// //       const { data, error } = await supabase
// //         .from('tasks')
// //         .update({
// //           title: taskTitle,
// //           description: taskDescription,
// //           due_date: taskDueDate,
// //         })
// //         .eq('id', editingTaskId);

// //       if (error) {
// //         console.error('Error editing task:', error);
// //         setNotificationType('error');
// //         setNotification('Error editing task: ' + error.message);
// //       } else {
// //         if (data && data.length > 0) {
// //           const updatedTasks = tasks.map((task) =>
// //             task.id === editingTaskId ? data[0] : task
// //           );
// //           setTasks(updatedTasks);
// //           setNotificationType('success');
// //           setNotification('Task updated successfully');
// //           resetForm();
// //         } else {
// //           setNotificationType('error');
// //           setNotification('Error: No task data returned');
// //         }
// //       }
// //     } catch (err) {
// //       console.error('Unexpected error:', err);
// //       setNotificationType('error');
// //       setNotification('Unexpected error occurred');
// //     }
// //   };

// //   // Mark task as complete/incomplete
// //   const toggleTaskCompletion = async (taskId, currentStatus) => {
// //     try {
// //       const { data, error } = await supabase
// //         .from('tasks')
// //         .update({ completed: !currentStatus })
// //         .eq('id', taskId);

// //       if (error) {
// //         console.error('Error toggling task completion:', error);
// //         setNotificationType('error');
// //         setNotification('Error toggling task completion: ' + error.message);
// //       } else {
// //         if (data && data.length > 0) {
// //           const updatedTasks = tasks.map((task) =>
// //             task.id === taskId ? data[0] : task
// //           );
// //           setTasks(updatedTasks);
// //           setNotificationType('success');
// //           setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
// //         } else {
// //           setNotificationType('error');
// //           setNotification('Error: No task data returned');
// //         }
// //       }
// //     } catch (err) {
// //       console.error('Unexpected error:', err);
// //       setNotificationType('error');
// //       setNotification('Unexpected error occurred');
// //     }
// //   };

// //   // Delete a task
// //   const deleteTask = async (taskId) => {
// //     try {
// //       const { error } = await supabase
// //         .from('tasks')
// //         .delete()
// //         .eq('id', taskId);

// //       if (error) {
// //         console.error('Error deleting task:', error);
// //         setNotificationType('error');
// //         setNotification('Error deleting task: ' + error.message);
// //       } else {
// //         setTasks(tasks.filter((task) => task.id !== taskId));
// //         setNotificationType('success');
// //         setNotification('Task deleted successfully');
// //       }
// //     } catch (err) {
// //       console.error('Unexpected error:', err);
// //       setNotificationType('error');
// //       setNotification('Unexpected error occurred');
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

// //       {/* Notification */}
// //       {notification && (
// //         <div
// //           style={{
// //             ...styles.notification,
// //             backgroundColor: notificationType === 'success' ? '#4CAF50' : '#f44336',
// //           }}
// //         >
// //           {notification}
// //         </div>
// //       )}

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
// //               <p>
// //                 <strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}
// //               </p>
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
// //   notification: {
// //     padding: '10px',
// //     color: '#fff',
// //     marginBottom: '20px',
// //     borderRadius: '5px',
// //     fontSize: '16px',
// //     fontWeight: 'bold',
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

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient.js'; // Assuming supabaseClient.js is already set up
// import { motion } from 'framer-motion';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskDueDate, setTaskDueDate] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [notification, setNotification] = useState('');
//   const [notificationType, setNotificationType] = useState('');  // 'success' or 'error'

//   // Fetch tasks from Supabase
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const { data, error } = await supabase.from('tasks').select('*');

//         if (error) {
//           console.error('Error fetching tasks:', error);
//           setNotificationType('error');
//           setNotification('Error fetching tasks: ' + error.message);
//         } else {
//           setTasks(data);
//           setNotificationType('success');
//           setNotification('Tasks fetched successfully');
//         }
//       } catch (err) {
//         console.error('Unexpected error:', err);
//         setNotificationType('error');
//         setNotification('Unexpected error occurred');
//       }
//     };

//     fetchTasks();
//   }, []);

//   // Add a new task
//   const addTask = async () => {
//     if (!taskTitle || !taskDescription || !taskDueDate) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const { data, error } = await supabase.from('tasks').insert([
//         {
//           title: taskTitle,
//           description: taskDescription,
//           due_date: taskDueDate,
//           completed: false,
//         },
//       ]);

//       if (error) {
//         console.error('Error adding task:', error);
//         setNotificationType('error');
//         setNotification('Error adding task: ' + error.message);
//       } else {
//         if (data && data.length > 0) {
//           setTasks([...tasks, data[0]]);
//           setNotificationType('success');
//           setNotification('Task added successfully');
//           resetForm();
//         } else {
//           setNotificationType('error');
//           setNotification('Please wait while the data is refreshing...');
//         }
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       setNotificationType('error');
//       setNotification('Unexpected error occurred');
//     }
//   };

//   // Edit an existing task
//   const editTask = async () => {
//     if (!taskTitle || !taskDescription || !taskDueDate) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const { data, error } = await supabase
//         .from('tasks')
//         .update({
//           title: taskTitle,
//           description: taskDescription,
//           due_date: taskDueDate,
//         })
//         .eq('id', editingTaskId);

//       if (error) {
//         console.error('Error editing task:', error);
//         setNotificationType('error');
//         setNotification('Error editing task: ' + error.message);
//       } else {
//         if (data && data.length > 0) {
//           const updatedTasks = tasks.map((task) =>
//             task.id === editingTaskId ? data[0] : task
//           );
//           setTasks(updatedTasks);
//           setNotificationType('success');
//           setNotification('Task updated successfully');
//           resetForm();
//         } else {
//           setNotificationType('error');
//           setNotification('Please wait while the data is refreshing...');
//         }
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       setNotificationType('error');
//       setNotification('Unexpected error occurred');
//     }
//   };

//   // Mark task as complete/incomplete
//   const toggleTaskCompletion = async (taskId, currentStatus) => {
//     try {
//       const { data, error } = await supabase
//         .from('tasks')
//         .update({ completed: !currentStatus })
//         .eq('id', taskId);

//       if (error) {
//         console.error('Error toggling task completion:', error);
//         setNotificationType('error');
//         setNotification('Error toggling task completion: ' + error.message);
//       } else {
//         if (data && data.length > 0) {
//           const updatedTasks = tasks.map((task) =>
//             task.id === taskId ? data[0] : task
//           );
//           setTasks(updatedTasks);
//           setNotificationType('success');
//           setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
//         } else {
//           setNotificationType('error');
//           setNotification('Please wait while the data is refreshing...');
//         }
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       setNotificationType('error');
//       setNotification('Unexpected error occurred');
//     }
//   };

//   // Delete a task
//   const deleteTask = async (taskId) => {
//     try {
//       const { error } = await supabase
//         .from('tasks')
//         .delete()
//         .eq('id', taskId);

//       if (error) {
//         console.error('Error deleting task:', error);
//         setNotificationType('error');
//         setNotification('Error deleting task: ' + error.message);
//       } else {
//         setTasks(tasks.filter((task) => task.id !== taskId));
//         setNotificationType('success');
//         setNotification('Task deleted successfully');
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       setNotificationType('error');
//       setNotification('Unexpected error occurred');
//     }
//   };

//   // Reset form
//   const resetForm = () => {
//     setTaskTitle('');
//     setTaskDescription('');
//     setTaskDueDate('');
//     setIsEditing(false);
//     setEditingTaskId(null);
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Task Manager</h1>

//       {/* Notification */}
//       {notification && (
//         <div
//           style={{
//             ...styles.notification,
//             backgroundColor: notificationType === 'success' ? '#4CAF50' : '#f44336',
//           }}
//         >
//           {notification}
//         </div>
//       )}

//       <div style={styles.formContainer}>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={taskTitle}
//           onChange={(e) => setTaskTitle(e.target.value)}
//           style={styles.input}
//         />
//         <textarea
//           placeholder="Task Description"
//           value={taskDescription}
//           onChange={(e) => setTaskDescription(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="date"
//           value={taskDueDate}
//           onChange={(e) => setTaskDueDate(e.target.value)}
//           style={styles.input}
//         />
//         <button
//           onClick={isEditing ? editTask : addTask}
//           style={styles.button}
//         >
//           {isEditing ? 'Save Changes' : 'Add Task'}
//         </button>
//         {isEditing && (
//           <button onClick={resetForm} style={styles.cancelButton}>
//             Cancel
//           </button>
//         )}
//       </div>

//       <motion.div
//         style={styles.taskList}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {tasks.map((task) => (
//           <motion.div
//             key={task.id}
//             style={styles.task}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div style={styles.taskDetails}>
//               <h3>{task.title}</h3>
//               <p>{task.description}</p>
//               <p>
//                 <strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}
//               </p>
//             </div>
//             <div style={styles.taskActions}>
//               <button
//                 onClick={() => toggleTaskCompletion(task.id, task.completed)}
//                 style={styles.completeButton}
//               >
//                 {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
//               </button>
//               <button
//                 onClick={() => {
//                   setIsEditing(true);
//                   setTaskTitle(task.title);
//                   setTaskDescription(task.description);
//                   setTaskDueDate(task.due_date);
//                   setEditingTaskId(task.id);
//                 }}
//                 style={styles.editButton}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteTask(task.id)}
//                 style={styles.deleteButton}
//               >
//                 Delete
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#f4f4f9',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     fontSize: '32px',
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   notification: {
//     padding: '10px',
//     color: '#fff',
//     marginBottom: '20px',
//     borderRadius: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '400px',
//     marginBottom: '20px',
//   },
//   input: {
//     padding: '10px',
//     margin: '10px 0',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   cancelButton: {
//     padding: '10px',
//     backgroundColor: '#f44336',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginTop: '10px',
//   },
//   taskList: {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '20px',
//   },
//   task: {
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '15px',
//     marginBottom: '15px',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//   },
//   taskDetails: {
//     marginBottom: '15px',
//   },
//   taskActions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   completeButton: {
//     padding: '10px',
//     backgroundColor: '#2196F3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   editButton: {
//     padding: '10px',
//     backgroundColor: '#FFC107',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   deleteButton: {
//     padding: '10px',
//     backgroundColor: '#f44336',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default TaskManager;
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient.js';
import { motion } from 'framer-motion';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState(''); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) {
          setNotificationType('error');
          setNotification('Error fetching tasks: ' + error.message);
        } else {
          setTasks(data);
          setNotificationType('success');
          setNotification('Tasks fetched successfully');
        }
      } catch (err) {
        setNotificationType('error');
        setNotification('Unexpected error occurred');
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!taskTitle || !taskDescription || !taskDueDate) {
      setNotificationType('error');
      setNotification('Please fill in all fields');
      return;
    }

    try {
      const { data, error } = await supabase.from('tasks').insert([{
        title: taskTitle,
        description: taskDescription,
        due_date: taskDueDate,
        completed: false,
      }]);

      if (error) {
        setNotificationType('error');
        setNotification('Error adding task: ' + error.message);
      } else {
        setTasks([...tasks, data[0]]);
        setNotificationType('success');
        setNotification('Task added successfully');
        resetForm();
      }
    } catch (err) {
      setNotificationType('error');
      setNotification('Unexpected error occurred');
    }
  };

  const editTask = async () => {
    if (!taskTitle || !taskDescription || !taskDueDate) {
      setNotificationType('error');
      setNotification('Please fill in all fields');
      return;
    }

    try {
      const { data, error } = await supabase.from('tasks').update({
        title: taskTitle,
        description: taskDescription,
        due_date: taskDueDate,
      }).eq('id', editingTaskId);

      if (error) {
        setNotificationType('error');
        setNotification('Error editing task: ' + error.message);
      } else {
        const updatedTasks = tasks.map(task => 
          task.id === editingTaskId ? data[0] : task
        );
        setTasks(updatedTasks);
        setNotificationType('success');
        setNotification('Task updated successfully');
        resetForm();
      }
    } catch (err) {
      setNotificationType('error');
      setNotification('Unexpected error occurred');
    }
  };

  const toggleTaskCompletion = async (taskId, currentStatus) => {
    try {
      const { data, error } = await supabase.from('tasks').update({
        completed: !currentStatus,
      }).eq('id', taskId);

      if (error) {
        setNotificationType('error');
        setNotification('Error toggling task completion: ' + error.message);
      } else {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? data[0] : task
        );
        setTasks(updatedTasks);
        setNotificationType('success');
        setNotification(`Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`);
      }
    } catch (err) {
      setNotificationType('error');
      setNotification('Unexpected error occurred');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const { error } = await supabase.from('tasks').delete().eq('id', taskId);

      if (error) {
        setNotificationType('error');
        setNotification('Error deleting task: ' + error.message);
      } else {
        setTasks(tasks.filter(task => task.id !== taskId));
        setNotificationType('success');
        setNotification('Task deleted successfully');
      }
    } catch (err) {
      setNotificationType('error');
      setNotification('Unexpected error occurred');
    }
  };

  const resetForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskDueDate('');
    setIsEditing(false);
    setEditingTaskId(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Manager</h1>

      {notification && (
        <div style={{
          ...styles.notification,
          backgroundColor: notificationType === 'success' ? '#4CAF50' : '#f44336',
        }}>
          {notification}
        </div>
      )}

      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          style={styles.input}
        />
        <button onClick={isEditing ? editTask : addTask} style={styles.button}>
          {isEditing ? 'Save Changes' : 'Add Task'}
        </button>
        {isEditing && (
          <button onClick={resetForm} style={styles.cancelButton}>
            Cancel
          </button>
        )}
      </div>

      <motion.div
        style={styles.taskList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            style={styles.task}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={styles.taskDetails}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}</p>
            </div>
            <div style={styles.taskActions}>
              <button
                onClick={() => toggleTaskCompletion(task.id, task.completed)}
                style={styles.completeButton}
              >
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setTaskTitle(task.title);
                  setTaskDescription(task.description);
                  setTaskDueDate(task.due_date);
                  setEditingTaskId(task.id);
                }}
                style={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    // backgroundColor: '#f4f4f9',
    fontFamily: 'Roboto, Arial, sans-serif',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  notification: {
    padding: '15px',
    color: '#fff',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  cancelButton: {
    padding: '12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  taskList: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '20px',
  },
  task: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  taskDetails: {
    marginBottom: '15px',
  },
  taskActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  completeButton: {
    padding: '12px',
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  editButton: {
    padding: '12px',
    backgroundColor: '#FFC107',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    padding: '12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default TaskManager;
