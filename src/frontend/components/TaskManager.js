// import React, { useState } from 'react';
// import { useTask } from '../hooks/useTask';

// function TaskManager() {
//   const { tasks, addTask, updateTask, deleteTask } = useTask();
//   const [newTask, setNewTask] = useState('');

//   const handleAddTask = () => {
//     if (newTask) {
//       addTask(newTask);
//       setNewTask('');
//     }
//   };

//   return (
//     <div>
//       <h2>Task Manager</h2>
//       <input 
//         type="text" 
//         value={newTask} 
//         onChange={(e) => setNewTask(e.target.value)} 
//         placeholder="New task" 
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             {task.title}
//             <button onClick={() => updateTask(task.id)}>Mark as Completed</button>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskManager;
