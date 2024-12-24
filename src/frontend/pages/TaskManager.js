// //src\frontend\pages\TaskManager.js
// import React, { useState } from 'react';
// import { useTask } from '../hooks/useTask';  // Assuming you have a custom hook for task management
// import TaskCard from '../components/TaskCard';

// const TaskManager = () => {
//   const [taskName, setTaskName] = useState('');
//   const { tasks, addTask } = useTask();

//   const handleAddTask = () => {
//     if (taskName) {
//       addTask(taskName);
//       setTaskName('');
//     }
//   };

//   return (
//     <div className="task-manager">
//       <h1>Task Manager</h1>
//       <input
//         type="text"
//         value={taskName}
//         onChange={(e) => setTaskName(e.target.value)}
//         placeholder="Enter task name"
//       />
//       <button onClick={handleAddTask}>Add Task</button>

//       <div className="task-list">
//         {tasks.map((task, index) => (
//           <TaskCard key={index} task={task} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskManager;
// src/frontend/pages/TaskManager.js

import React, { useState } from 'react';
import { useTask } from '../hooks/useTask.js';  // Assuming you have a custom hook for task management
import TaskCard from '../components/TaskCard.js';

const TaskManager = () => {
  const [taskName, setTaskName] = useState('');
  const { tasks, addTask } = useTask();

  const handleAddTask = () => {
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
