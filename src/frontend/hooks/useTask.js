// //src\frontend\hooks\useTask.js
// import { useState, useEffect } from 'react';
// import { addTaskService, updateTaskService, deleteTaskService, fetchTasksService } from '../../backend/services/taskService'; // Ensure fetchTasksService is available for initial loading of tasks

// export function useTask() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true); // To track loading state
//   const [error, setError] = useState(null); // For error handling

//   // Fetch tasks when the component mounts (if needed)
//   useEffect(() => {
//     fetchTasksService()
//       .then(fetchedTasks => {
//         setTasks(fetchedTasks);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to load tasks');
//         setLoading(false);
//       });
//   }, []);

//   const addTask = (taskTitle) => {
//     setLoading(true); // Indicate loading state while adding
//     addTaskService(taskTitle)
//       .then(newTask => {
//         setTasks(prevTasks => [...prevTasks, newTask]);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to add task');
//         setLoading(false);
//       });
//   };

//   const updateTask = (taskId, updatedData) => {
//     setLoading(true); // Indicate loading state while updating
//     updateTaskService(taskId, updatedData)
//       .then(updatedTask => {
//         setTasks(prevTasks =>
//           prevTasks.map(task => (task.id === taskId ? updatedTask : task))
//         );
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to update task');
//         setLoading(false);
//       });
//   };

//   const deleteTask = (taskId) => {
//     setLoading(true); // Indicate loading state while deleting
//     deleteTaskService(taskId)
//       .then(() => {
//         setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to delete task');
//         setLoading(false);
//       });
//   };

//   return { tasks, addTask, updateTask, deleteTask, loading, error };
// }
import { useState, useEffect } from 'react';
import { addTask, updateTaskStatus, deleteTask, getTasks } from '../../backend/services/taskService'; // Use the correct function names

export function useTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch tasks when the component mounts
  useEffect(() => {
    getTasks() // Fetch tasks using the correct function
      .then(fetchedTasks => {
        setTasks(fetchedTasks);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load tasks');
        setLoading(false);
      });
  }, []); // Empty array means it runs once on mount

  const addNewTask = (taskTitle) => {
    setLoading(true); // Indicate loading state while adding
    addTask(taskTitle) // Add task using the correct function
      .then(newTask => {
        setTasks(prevTasks => [...prevTasks, newTask]); // Add new task to the list
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to add task');
        setLoading(false);
      });
  };

  const updateTaskStatusById = (taskId, updatedData) => {
    setLoading(true); // Indicate loading state while updating
    updateTaskStatus(taskId, updatedData) // Update task status using the correct function
      .then(updatedTask => {
        setTasks(prevTasks =>
          prevTasks.map(task => (task.id === taskId ? updatedTask : task)) // Update the task in the list
        );
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to update task');
        setLoading(false);
      });
  };

  const deleteTaskById = (taskId) => {
    setLoading(true); // Indicate loading state while deleting
    deleteTask(taskId) // Delete task using the correct function
      .then(() => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId)); // Remove deleted task from list
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to delete task');
        setLoading(false);
      });
  };

  return { tasks, addNewTask, updateTaskStatusById, deleteTaskById, loading, error };
}
