// // import React from 'react';
// // import TaskManager from './TaskManager';
// // import HabitTracker from '../components/HabitTracker';
// // import ProgressChart from '../components/ProgressChart';

// // function Dashboard() {
// //   return (
// //     <div>
// //       <h1>Dashboard</h1>
// //       <TaskManager />
// //       <HabitTracker />
// //       <ProgressChart />
// //     </div>
// //   );
// // }

// // export default Dashboard;
// // src\frontend\pages\Dashboard.js
// import React from 'react';
// import TaskManager from './TaskManager';  // Import TaskManager
// import ProgressChart from '../components/ProgressChart';  // Import ProgressChart

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <ProgressChart />
//       <TaskManager />
//     </div>
//   );
// };

// export default Dashboard;
// src/frontend/pages/Dashboard.js
import React from 'react';
import TaskManager from './TaskManager';  // Import TaskManager
import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
import HabitTracker from '../components/HabitTracker'; // Import HabitTracker

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {/* Add HabitTracker here if it's part of the dashboard */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <HabitTracker
          taskName="Morning Workout"
          taskDescription="Start your day with some exercise to boost energy."
          onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
        />
        <HabitTracker
          taskName="Read a Book"
          taskDescription="Spend 30 minutes reading a personal development book."
          onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
        />
        <HabitTracker
          taskName="Drink Water"
          taskDescription="Drink a glass of water after waking up."
          onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
        />
      </div>
      
      {/* Display ProgressChart and TaskManager */}
      <ProgressChart />
      <TaskManager />
    </div>
  );
};

export default Dashboard;
