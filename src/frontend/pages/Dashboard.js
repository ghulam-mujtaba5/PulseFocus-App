// // //src\frontend\pages\Dashboard.js

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// import TaskManager from './TaskManager';  // Import TaskManager
// import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Track loading state

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
//       if (session) {
//         setUser(session.user); // Set user if logged in
//       }
//       setLoading(false);  // Stop loading once session is checked
//     };

//     getSession();
//   }, []);

//   // Show a loading indicator while session is being checked
//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a loading spinner
//   }

//   // If the user is not logged in, show a signup component
//   if (!user) {
//     return <div>Please log in first.</div>;
//   }

//   // If the user is logged in, render the dashboard content
//   return (
//     <div className="dashboard">
//       <h1>Welcome to your Dashboard</h1>
      
//       {/* Add HabitTracker components for different tasks */}
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         <HabitTracker
//           taskName="Morning Workout"
//           taskDescription="Start your day with some exercise to boost energy."
//           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//         />
//         <HabitTracker
//           taskName="Read a Book"
//           taskDescription="Spend 30 minutes reading a personal development book."
//           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//         />
//         <HabitTracker
//           taskName="Drink Water"
//           taskDescription="Drink a glass of water after waking up."
//           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//         />
//       </div>
      
//       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
//       <ProgressChart />
//       <TaskManager />
//       <AppUsageTracker /> {/* Display the AppUsageTracker component */}
//     </div>
//   );
// };

// export default Dashboard;
// src/frontend/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient'; // Import Supabase client
import TaskManager from '../components/TaskManager';  // Import TaskManager
import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker


const Dashboard = () => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state

  // Inline styles
  const styles = {
    dashboard: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    habitTrackerContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      margin: '20px 0',
    },
    habitTracker: {
      width: '300px',
      background: '#f3f3f3',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    habitTrackerHover: {
      transform: 'scale(1.05)',
    },
    dashboardMainContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      marginTop: '20px',
    },
    loading: {
      fontSize: '18px',
      color: '#888',
    },
    loginPrompt: {
      fontSize: '18px',
      color: '#888',
    },
    dashboardTitle: {
      fontSize: '36px',
      color: '#333',
      marginBottom: '20px',
    },
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
      if (session) {
        setUser(session.user); // Set user if logged in
      }
      setLoading(false);  // Stop loading once session is checked
    };

    getSession();
  }, []);

  // Show a loading indicator while session is being checked
  if (loading) {
    return <div style={styles.loading}>Loading...</div>; // Replace with a loading spinner or animation
  }

  // If the user is not logged in, show a signup component
  if (!user) {
    return <div style={styles.loginPrompt}>Please log in first.</div>;
  }

  // If the user is logged in, render the dashboard content
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

      {/* Add HabitTracker components for different tasks */}
      <div style={styles.habitTrackerContainer}>
        <div style={styles.habitTracker}>
          <HabitTracker
            taskName="Morning Workout"
            taskDescription="Start your day with some exercise to boost energy."
            onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
          />
        </div>
        <div style={styles.habitTracker}>
          <HabitTracker
            taskName="Read a Book"
            taskDescription="Spend 30 minutes reading a personal development book."
            onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
          />
        </div>
        <div style={styles.habitTracker}>
          <HabitTracker
            taskName="Drink Water"
            taskDescription="Drink a glass of water after waking up."
            onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
          />
        </div>
      </div>

      {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
      <div style={styles.dashboardMainContent}>
        <ProgressChart />
        <TaskManager />
        <AppUsageTracker />
      </div>
    </div>
  );
};

export default Dashboard;
