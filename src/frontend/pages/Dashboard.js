

// // import React, { useState, useEffect } from 'react';
// // import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client
// // import TaskManager from '../components/TaskManager.js'; // Import TaskManager
// // import ProgressChart from '../components/ProgressChart.js'; // Import ProgressChart
// // import HabitTracker from '../components/HabitTracker.js'; // Import HabitTracker
// // import AppUsageTracker from '../components/AppUsageTracker.js'; // Import AppUsageTracker

// // const Dashboard = () => {
// //   const [user, setUser] = useState(null); // Store user data
// //   const [loading, setLoading] = useState(true); // Track loading state
// //   const [refreshing, setRefreshing] = useState(false); // Track refreshing state

// //   // Inline styles for the dashboard layout
// //   const styles = {
// //     dashboard: {
// //       padding: '20px',
// //       fontFamily: 'Arial, sans-serif',
// //       textAlign: 'center',
// //     },
// //     habitTrackerContainer: {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       gap: '20px',
// //       flexWrap: 'wrap',
// //       margin: '20px 0',
// //     },
// //     habitTracker: {
// //       width: '300px',
// //       background: '#f3f3f3',
// //       padding: '15px',
// //       borderRadius: '10px',
// //       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// //       transition: 'all 0.3s ease',
// //     },
// //     dashboardMainContent: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '40px',
// //       marginTop: '20px',
// //     },
// //     loading: {
// //       fontSize: '18px',
// //       color: '#888',
// //     },
// //     loginPrompt: {
// //       fontSize: '18px',
// //       color: '#888',
// //     },
// //     dashboardTitle: {
// //       fontSize: '36px',
// //       color: '#333',
// //       marginBottom: '20px',
// //     },
// //     refreshButton: {
// //       padding: '10px 20px',
// //       fontSize: '16px',
// //       marginTop: '20px',
// //       backgroundColor: '#007bff',
// //       color: '#fff',
// //       border: 'none',
// //       borderRadius: '5px',
// //       cursor: 'pointer',
// //       transition: 'background-color 0.3s',
// //     },
// //     refreshButtonHover: {
// //       backgroundColor: '#0056b3',
// //     },
// //   };

// //   // Function to simulate refreshing the data (this would be your data fetch function)
// //   const refreshData = async () => {
// //     setRefreshing(true);
// //     console.log("Refreshing data...");
// //     // You can replace this with actual data fetching logic for TaskManager, ProgressChart, etc.
// //     // Example: await fetchTasks(); or setState({ data: fetchedData })
// //     setTimeout(() => {
// //       setRefreshing(false);  // Stop refreshing once data is fetched
// //     }, 2000);  // Simulate data fetching delay
// //   };

// //   // Check if the user is logged in when the component mounts
// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data: { session } } = await supabase.auth.getSession();  // Get current session asynchronously
// //       if (session) {
// //         setUser(session.user);  // Set user if logged in
// //       }
// //       setLoading(false);  // Stop loading once session is checked
// //     };

// //     getSession();

// //     // Set up automatic data refresh every 10 seconds
// //     const interval = setInterval(() => {
// //       refreshData();  // Refresh the data every 10 seconds
// //     }, 10000);  // 10 seconds

// //     // Cleanup function to clear interval when component unmounts
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Show a loading indicator while session is being checked
// //   if (loading) {
// //     return <div style={styles.loading}>Loading...</div>;
// //   }

// //   // If the user is not logged in, show a login prompt
// //   if (!user) {
// //     return <div style={styles.loginPrompt}>Please log in first.</div>;
// //   }

// //   // If the user is logged in, render the dashboard content
// //   return (
// //     <div style={styles.dashboard}>
// //       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

// //       {/* Add HabitTracker components for different tasks */}
// //       <div style={styles.habitTrackerContainer}>
// //         <div style={styles.habitTracker}>
// //           <HabitTracker
// //             taskName="Morning Workout"
// //             taskDescription="Start your day with some exercise to boost energy."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //         </div>
// //         <div style={styles.habitTracker}>
// //           <HabitTracker
// //             taskName="Read a Book"
// //             taskDescription="Spend 30 minutes reading a personal development book."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //         </div>
// //         <div style={styles.habitTracker}>
// //           <HabitTracker
// //             taskName="Drink Water"
// //             taskDescription="Drink a glass of water after waking up."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //         </div>
// //       </div>

// //       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
// //       <div style={styles.dashboardMainContent}>
// //         <ProgressChart />
// //         <TaskManager />
// //         <AppUsageTracker />
// //       </div>

// //       {/* Refresh button */}
// //       <button
// //         style={refreshing ? { ...styles.refreshButton, ...styles.refreshButtonHover } : styles.refreshButton}
// //         onClick={refreshData}
// //         disabled={refreshing}
// //       >
// //         {refreshing ? 'Refreshing...' : 'Refresh Data'}
// //       </button>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client
// import TaskManager from '../components/TaskManager.js'; // Import TaskManager
// import ProgressChart from '../components/ProgressChart.js'; // Import ProgressChart
// import HabitTracker from '../components/HabitTracker.js'; // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker.js'; // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [refreshing, setRefreshing] = useState(false); // Track refreshing state
//   const [showTaskManager, setShowTaskManager] = useState(true);
//   const [showProgressChart, setShowProgressChart] = useState(true);
//   const [showAppUsageTracker, setShowAppUsageTracker] = useState(true);

//   // Inline styles for the dashboard layout
//   const styles = {
//     dashboard: {
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
//       background: 'linear-gradient(135deg, #4e73df, #1cc88a)',
//       minHeight: '100vh',
//     },
//     habitTrackerContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '20px',
//       flexWrap: 'wrap',
//       margin: '20px 0',
//     },
//     habitTracker: {
//       width: '300px',
//       background: '#f3f3f3',
//       padding: '15px',
//       borderRadius: '10px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//     },
//     dashboardMainContent: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//       gap: '20px',
//       marginTop: '20px',
//     },
//     loading: {
//       fontSize: '18px',
//       color: '#fff',
//     },
//     loginPrompt: {
//       fontSize: '18px',
//       color: '#fff',
//     },
//     dashboardTitle: {
//       fontSize: '36px',
//       color: '#fff',
//       marginBottom: '20px',
//       textTransform: 'uppercase',
//     },
//     refreshButton: {
//       padding: '12px 25px',
//       fontSize: '16px',
//       marginTop: '20px',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s, transform 0.3s',
//     },
//     refreshButtonHover: {
//       backgroundColor: '#0056b3',
//       transform: 'scale(1.05)',
//     },
//     toggleButton: {
//       padding: '10px 15px',
//       backgroundColor: '#28a745',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s, transform 0.3s',
//       marginBottom: '10px',
//     },
//     toggleButtonHover: {
//       backgroundColor: '#218838',
//       transform: 'scale(1.05)',
//     },
//   };

//   // Function to simulate refreshing the data
//   const refreshData = async () => {
//     setRefreshing(true);
//     console.log("Refreshing data...");
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   };

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (session) {
//         setUser(session.user);
//       }
//       setLoading(false);
//     };

//     getSession();

//     const interval = setInterval(() => {
//       refreshData();
//     }, 10000); 

//     return () => clearInterval(interval);
//   }, []);

//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   if (!user) {
//     return <div style={styles.loginPrompt}>Please log in first.</div>;
//   }

//   return (
//     <div style={styles.dashboard}>
//       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

//       {/* Habit Tracker Section */}
//       <div style={styles.habitTrackerContainer}>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Morning Workout"
//             taskDescription="Start your day with some exercise to boost energy."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Read a Book"
//             taskDescription="Spend 30 minutes reading a personal development book."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Drink Water"
//             taskDescription="Drink a glass of water after waking up."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//       </div>

//       {/* Toggle buttons for displaying components */}
//       <div>
//         <button
//           style={showTaskManager ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowTaskManager(prevState => !prevState)}
//         >
//           {showTaskManager ? 'Hide Task Manager' : 'Show Task Manager'}
//         </button>
//         <button
//           style={showProgressChart ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowProgressChart(prevState => !prevState)}
//         >
//           {showProgressChart ? 'Hide Progress Chart' : 'Show Progress Chart'}
//         </button>
//         <button
//           style={showAppUsageTracker ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowAppUsageTracker(prevState => !prevState)}
//         >
//           {showAppUsageTracker ? 'Hide App Usage Tracker' : 'Show App Usage Tracker'}
//         </button>
//       </div>

//       {/* Conditionally render components based on state */}
//       <div style={styles.dashboardMainContent}>
//         {showProgressChart && <ProgressChart />}
//         {showTaskManager && <TaskManager />}
//         {showAppUsageTracker && <AppUsageTracker />}
//       </div>

//       {/* Refresh button */}
//       <button
//         style={refreshing ? { ...styles.refreshButton, ...styles.refreshButtonHover } : styles.refreshButton}
//         onClick={refreshData}
//         disabled={refreshing}
//       >
//         {refreshing ? 'Refreshing...' : 'Refresh Data'}
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client
import TaskManager from '../components/TaskManager.js'; // Import TaskManager
import ProgressChart from '../components/ProgressChart.js'; // Import ProgressChart
import HabitTracker from '../components/HabitTracker.js'; // Import HabitTracker
import AppUsageTracker from '../components/AppUsageTracker.js'; // Import AppUsageTracker

const Dashboard = () => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state
  const [refreshing, setRefreshing] = useState(false); // Track refreshing state
  const [showTaskManager, setShowTaskManager] = useState(true);
  const [showProgressChart, setShowProgressChart] = useState(true);
  const [showAppUsageTracker, setShowAppUsageTracker] = useState(true);

  // Inline styles for the dashboard layout
  const styles = {
    dashboard: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #4e73df, #1cc88a)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'space-between',
    },
    habitTrackerContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      margin: '20px 0',
      flexGrow: 1,
      overflow: 'hidden',
    },
    habitTracker: {
      width: '300px',
      background: '#f3f3f3',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      maxHeight: '400px',
      overflow: 'auto',
    },
    dashboardMainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginTop: '20px',
      flexGrow: 1,
      overflow: 'hidden',
    },
    loading: {
      fontSize: '18px',
      color: '#fff',
    },
    loginPrompt: {
      fontSize: '18px',
      color: '#fff',
    },
    dashboardTitle: {
      fontSize: '36px',
      color: '#fff',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    refreshButton: {
      padding: '12px 25px',
      fontSize: '16px',
      marginTop: '20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      marginBottom: '20px',
    },
    refreshButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    toggleButton: {
      padding: '10px 15px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      marginBottom: '10px',
    },
    toggleButtonHover: {
      backgroundColor: '#218838',
      transform: 'scale(1.05)',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
    },
  };

  // Function to simulate refreshing the data
  const refreshData = async () => {
    setRefreshing(true);
    console.log("Refreshing data...");
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      }
      setLoading(false);
    };

    getSession();

    const interval = setInterval(() => {
      refreshData();
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!user) {
    return <div style={styles.loginPrompt}>Please log in first.</div>;
  }

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

      {/* Habit Tracker Section */}
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

      {/* Toggle buttons for displaying components */}
      <div style={styles.buttonContainer}>
        <button
          style={showTaskManager ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
          onClick={() => setShowTaskManager(prevState => !prevState)}
        >
          {showTaskManager ? 'Hide Task Manager' : 'Show Task Manager'}
        </button>
        <button
          style={showProgressChart ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
          onClick={() => setShowProgressChart(prevState => !prevState)}
        >
          {showProgressChart ? 'Hide Progress Chart' : 'Show Progress Chart'}
        </button>
        <button
          style={showAppUsageTracker ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
          onClick={() => setShowAppUsageTracker(prevState => !prevState)}
        >
          {showAppUsageTracker ? 'Hide App Usage Tracker' : 'Show App Usage Tracker'}
        </button>
      </div>

      {/* Conditionally render components based on state */}
      <div style={styles.dashboardMainContent}>
        {showProgressChart && <ProgressChart />}
        {showTaskManager && <TaskManager />}
        {showAppUsageTracker && <AppUsageTracker />}
      </div>

      {/* Refresh button */}
      <button
        style={refreshing ? { ...styles.refreshButton, ...styles.refreshButtonHover } : styles.refreshButton}
        onClick={refreshData}
        disabled={refreshing}
      >
        {refreshing ? 'Refreshing...' : 'Refresh Data'}
      </button>
    </div>
  );
};

export default Dashboard;
