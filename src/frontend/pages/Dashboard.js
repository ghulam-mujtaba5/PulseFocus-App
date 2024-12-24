// // // // // // //src\frontend\pages\Dashboard.js

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // // // import TaskManager from '../components/TaskManager';  // Import TaskManager
// // // // // import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// // // // // import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// // // // // import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

// // // // // const Dashboard = () => {
// // // // //   const [user, setUser] = useState(null); // Store user data
// // // // //   const [loading, setLoading] = useState(true); // Track loading state

// // // // //   // Check if the user is logged in when the component mounts
// // // // //   useEffect(() => {
// // // // //     const getSession = async () => {
// // // // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // // // //       if (session) {
// // // // //         setUser(session.user); // Set user if logged in
// // // // //       }
// // // // //       setLoading(false);  // Stop loading once session is checked
// // // // //     };

// // // // //     getSession();
// // // // //   }, []);

// // // // //   // Show a loading indicator while session is being checked
// // // // //   if (loading) {
// // // // //     return <div>Loading...</div>; // You can replace this with a loading spinner
// // // // //   }

// // // // //   // If the user is not logged in, show a signup component
// // // // //   if (!user) {
// // // // //     return <div>Please log in first.</div>;
// // // // //   }

// // // // //   // If the user is logged in, render the dashboard content
// // // // //   return (
// // // // //     <div className="dashboard">
// // // // //       <h1>Welcome to your Dashboard</h1>
      
// // // // //       {/* Add HabitTracker components for different tasks */}
// // // // //       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
// // // // //         <HabitTracker
// // // // //           taskName="Morning Workout"
// // // // //           taskDescription="Start your day with some exercise to boost energy."
// // // // //           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //         />
// // // // //         <HabitTracker
// // // // //           taskName="Read a Book"
// // // // //           taskDescription="Spend 30 minutes reading a personal development book."
// // // // //           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //         />
// // // // //         <HabitTracker
// // // // //           taskName="Drink Water"
// // // // //           taskDescription="Drink a glass of water after waking up."
// // // // //           onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //         />
// // // // //       </div>
      
// // // // //       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
// // // // //       <ProgressChart />
// // // // //       <TaskManager />
// // // // //       <AppUsageTracker /> {/* Display the AppUsageTracker component */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;
// // // // // src/frontend/pages/Dashboard.js

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // // // import TaskManager from '../components/TaskManager';  // Import TaskManager
// // // // // import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// // // // // import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// // // // // import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker


// // // // // const Dashboard = () => {
// // // // //   const [user, setUser] = useState(null); // Store user data
// // // // //   const [loading, setLoading] = useState(true); // Track loading state

// // // // //   // Inline styles
// // // // //   const styles = {
// // // // //     dashboard: {
// // // // //       padding: '20px',
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       textAlign: 'center',
// // // // //     },
// // // // //     habitTrackerContainer: {
// // // // //       display: 'flex',
// // // // //       justifyContent: 'center',
// // // // //       gap: '20px',
// // // // //       flexWrap: 'wrap',
// // // // //       margin: '20px 0',
// // // // //     },
// // // // //     habitTracker: {
// // // // //       width: '300px',
// // // // //       background: '#f3f3f3',
// // // // //       padding: '15px',
// // // // //       borderRadius: '10px',
// // // // //       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // // // //       transition: 'all 0.3s ease',
// // // // //     },
// // // // //     habitTrackerHover: {
// // // // //       transform: 'scale(1.05)',
// // // // //     },
// // // // //     dashboardMainContent: {
// // // // //       display: 'flex',
// // // // //       flexDirection: 'column',
// // // // //       gap: '40px',
// // // // //       marginTop: '20px',
// // // // //     },
// // // // //     loading: {
// // // // //       fontSize: '18px',
// // // // //       color: '#888',
// // // // //     },
// // // // //     loginPrompt: {
// // // // //       fontSize: '18px',
// // // // //       color: '#888',
// // // // //     },
// // // // //     dashboardTitle: {
// // // // //       fontSize: '36px',
// // // // //       color: '#333',
// // // // //       marginBottom: '20px',
// // // // //     },
// // // // //   };

// // // // //   // Check if the user is logged in when the component mounts
// // // // //   useEffect(() => {
// // // // //     const getSession = async () => {
// // // // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // // // //       if (session) {
// // // // //         setUser(session.user); // Set user if logged in
// // // // //       }
// // // // //       setLoading(false);  // Stop loading once session is checked
// // // // //     };

// // // // //     getSession();
// // // // //   }, []);

// // // // //   // Show a loading indicator while session is being checked
// // // // //   if (loading) {
// // // // //     return <div style={styles.loading}>Loading...</div>; // Replace with a loading spinner or animation
// // // // //   }

// // // // //   // If the user is not logged in, show a signup component
// // // // //   if (!user) {
// // // // //     return <div style={styles.loginPrompt}>Please log in first.</div>;
// // // // //   }

// // // // //   // If the user is logged in, render the dashboard content
// // // // //   return (
// // // // //     <div style={styles.dashboard}>
// // // // //       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

// // // // //       {/* Add HabitTracker components for different tasks */}
// // // // //       <div style={styles.habitTrackerContainer}>
// // // // //         <div style={styles.habitTracker}>
// // // // //           <HabitTracker
// // // // //             taskName="Morning Workout"
// // // // //             taskDescription="Start your day with some exercise to boost energy."
// // // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //           />
// // // // //         </div>
// // // // //         <div style={styles.habitTracker}>
// // // // //           <HabitTracker
// // // // //             taskName="Read a Book"
// // // // //             taskDescription="Spend 30 minutes reading a personal development book."
// // // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //           />
// // // // //         </div>
// // // // //         <div style={styles.habitTracker}>
// // // // //           <HabitTracker
// // // // //             taskName="Drink Water"
// // // // //             taskDescription="Drink a glass of water after waking up."
// // // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
// // // // //       <div style={styles.dashboardMainContent}>
// // // // //         <ProgressChart />
// // // // //         <TaskManager />
// // // // //         <AppUsageTracker />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // // import TaskManager from '../components/TaskManager';  // Import TaskManager
// // // // import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// // // // import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// // // // import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker


// // // // const Dashboard = () => {
// // // //   const [user, setUser] = useState(null); // Store user data
// // // //   const [loading, setLoading] = useState(true); // Track loading state

// // // //   // Inline styles
// // // //   const styles = {
// // // //     dashboard: {
// // // //       padding: '20px',
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       textAlign: 'center',
// // // //     },
// // // //     habitTrackerContainer: {
// // // //       display: 'flex',
// // // //       justifyContent: 'center',
// // // //       gap: '20px',
// // // //       flexWrap: 'wrap',
// // // //       margin: '20px 0',
// // // //     },
// // // //     habitTracker: {
// // // //       width: '300px',
// // // //       background: '#f3f3f3',
// // // //       padding: '15px',
// // // //       borderRadius: '10px',
// // // //       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// // // //       transition: 'all 0.3s ease',
// // // //     },
// // // //     habitTrackerHover: {
// // // //       transform: 'scale(1.05)',
// // // //     },
// // // //     dashboardMainContent: {
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       gap: '40px',
// // // //       marginTop: '20px',
// // // //     },
// // // //     loading: {
// // // //       fontSize: '18px',
// // // //       color: '#888',
// // // //     },
// // // //     loginPrompt: {
// // // //       fontSize: '18px',
// // // //       color: '#888',
// // // //     },
// // // //     dashboardTitle: {
// // // //       fontSize: '36px',
// // // //       color: '#333',
// // // //       marginBottom: '20px',
// // // //     },
// // // //   };

// // // //   // Check if the user is logged in when the component mounts
// // // //   useEffect(() => {
// // // //     const getSession = async () => {
// // // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // // //       if (session) {
// // // //         setUser(session.user); // Set user if logged in
// // // //       }
// // // //       setLoading(false);  // Stop loading once session is checked
// // // //     };

// // // //     getSession();
// // // //   }, []);

// // // //   // Show a loading indicator while session is being checked
// // // //   if (loading) {
// // // //     return <div style={styles.loading}>Loading...</div>; // Replace with a loading spinner or animation
// // // //   }

// // // //   // If the user is not logged in, show a signup component
// // // //   if (!user) {
// // // //     return <div style={styles.loginPrompt}>Please log in first.</div>;
// // // //   }

// // // //   // If the user is logged in, render the dashboard content
// // // //   return (
// // // //     <div style={styles.dashboard}>
// // // //       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

// // // //       {/* Add HabitTracker components for different tasks */}
// // // //       <div style={styles.habitTrackerContainer}>
// // // //         <div style={styles.habitTracker}>
// // // //           <HabitTracker
// // // //             taskName="Morning Workout"
// // // //             taskDescription="Start your day with some exercise to boost energy."
// // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // //           />
// // // //         </div>
// // // //         <div style={styles.habitTracker}>
// // // //           <HabitTracker
// // // //             taskName="Read a Book"
// // // //             taskDescription="Spend 30 minutes reading a personal development book."
// // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // //           />
// // // //         </div>
// // // //         <div style={styles.habitTracker}>
// // // //           <HabitTracker
// // // //             taskName="Drink Water"
// // // //             taskDescription="Drink a glass of water after waking up."
// // // //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
// // // //       <div style={styles.dashboardMainContent}>
// // // //         <ProgressChart />
// // // //         <TaskManager />
// // // //         <AppUsageTracker />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // import React, { useState, useEffect } from 'react';
// // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // import TaskManager from '../components/TaskManager';  // Import TaskManager
// // // import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// // // import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// // // import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

// // // const Dashboard = () => {
// // //   const [user, setUser] = useState(null); // Store user data
// // //   const [loading, setLoading] = useState(true); // Track loading state

// // //   // Inline styles for better structure
// // //   const styles = {
// // //     dashboard: {
// // //       padding: '20px',
// // //       fontFamily: 'Arial, sans-serif',
// // //       textAlign: 'center',
// // //       backgroundColor: '#f7f7f7',
// // //     },
// // //     habitTrackerContainer: {
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
// // //       gap: '20px',
// // //       margin: '20px 0',
// // //       justifyItems: 'center',
// // //     },
// // //     habitTracker: {
// // //       background: '#fff',
// // //       padding: '15px',
// // //       borderRadius: '15px',
// // //       boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
// // //       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // //       ':hover': {
// // //         transform: 'scale(1.05)',
// // //         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
// // //       },
// // //     },
// // //     dashboardMainContent: {
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       gap: '40px',
// // //       marginTop: '20px',
// // //     },
// // //     loading: {
// // //       fontSize: '18px',
// // //       color: '#888',
// // //     },
// // //     loginPrompt: {
// // //       fontSize: '18px',
// // //       color: '#888',
// // //     },
// // //     dashboardTitle: {
// // //       fontSize: '36px',
// // //       fontWeight: '600',
// // //       color: '#333',
// // //       marginBottom: '20px',
// // //       animation: 'fadeIn 1s ease-out',
// // //     },
// // //     dashboardContainer: {
// // //       margin: '0 auto',
// // //       maxWidth: '1200px',
// // //     },
// // //     '@keyframes fadeIn': {
// // //       '0%': { opacity: 0 },
// // //       '100%': { opacity: 1 },
// // //     },
// // //   };

// // //   // Check if the user is logged in when the component mounts
// // //   useEffect(() => {
// // //     const getSession = async () => {
// // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // //       if (session) {
// // //         setUser(session.user); // Set user if logged in
// // //       }
// // //       setLoading(false);  // Stop loading once session is checked
// // //     };

// // //     getSession();
// // //   }, []);

// // //   // Show a loading indicator while session is being checked
// // //   if (loading) {
// // //     return <div style={styles.loading}>Loading...</div>; // Replace with a loading spinner or animation
// // //   }

// // //   // If the user is not logged in, show a login prompt
// // //   if (!user) {
// // //     return <div style={styles.loginPrompt}>Please log in first.</div>;
// // //   }

// // //   // If the user is logged in, render the dashboard content
// // //   return (
// // //     <div style={styles.dashboard}>
// // //       <div style={styles.dashboardContainer}>
// // //         <h1 style={styles.dashboardTitle}>Welcome to Your Dashboard</h1>

// // //         {/* Habit Tracker */}
// // //         <div style={styles.habitTrackerContainer}>
// // //           <div style={styles.habitTracker}>
// // //             <HabitTracker
// // //               taskName="Morning Workout"
// // //               taskDescription="Start your day with some exercise to boost energy."
// // //               onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // //             />
// // //           </div>
// // //           <div style={styles.habitTracker}>
// // //             <HabitTracker
// // //               taskName="Read a Book"
// // //               taskDescription="Spend 30 minutes reading a personal development book."
// // //               onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // //             />
// // //           </div>
// // //           <div style={styles.habitTracker}>
// // //             <HabitTracker
// // //               taskName="Drink Water"
// // //               taskDescription="Drink a glass of water after waking up."
// // //               onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Main Dashboard Content */}
// // //         <div style={styles.dashboardMainContent}>
// // //           <ProgressChart />
// // //           <TaskManager />
// // //           <AppUsageTracker />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React, { useState, useEffect } from 'react';
// // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // import TaskManager from '../components/TaskManager';  // Import TaskManager
// // import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// // import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// // import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

// // const Dashboard = () => {
// //   const [user, setUser] = useState(null); // Store user data
// //   const [loading, setLoading] = useState(true); // Track loading state

// //   // Inline styles for better structure and UX improvements
// //   const styles = {
// //     dashboard: {
// //       padding: '20px',
// //       fontFamily: 'Arial, sans-serif',
// //       textAlign: 'center',
// //       backgroundColor: '#f0f4f8', // Light background for a modern look
// //       minHeight: '100vh',
// //     },
// //     dashboardContainer: {
// //       margin: '0 auto',
// //       maxWidth: '1200px',
// //       padding: '20px',
// //       backgroundColor: '#fff', // White background for the main content
// //       borderRadius: '10px',
// //       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// //       overflow: 'hidden',
// //     },
// //     dashboardTitle: {
// //       fontSize: '36px',
// //       fontWeight: '600',
// //       color: '#333',
// //       marginBottom: '30px',
// //       animation: 'fadeIn 1s ease-out',
// //     },
// //     habitTrackerContainer: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
// //       gap: '20px',
// //       marginBottom: '30px',
// //       justifyItems: 'center',
// //     },
// //     dashboardMainContent: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
// //       gap: '30px',
// //       marginTop: '40px',
// //     },
// //     loading: {
// //       fontSize: '18px',
// //       color: '#888',
// //     },
// //     loginPrompt: {
// //       fontSize: '18px',
// //       color: '#888',
// //     },
// //     '@keyframes fadeIn': {
// //       '0%': { opacity: 0 },
// //       '100%': { opacity: 1 },
// //     },
// //   };

// //   // Check if the user is logged in when the component mounts
// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// //       if (session) {
// //         setUser(session.user); // Set user if logged in
// //       }
// //       setLoading(false);  // Stop loading once session is checked
// //     };

// //     getSession();
// //   }, []);

// //   // Show a loading indicator while session is being checked
// //   if (loading) {
// //     return <div style={styles.loading}>Loading...</div>; // Replace with a loading spinner or animation
// //   }

// //   // If the user is not logged in, show a login prompt
// //   if (!user) {
// //     return <div style={styles.loginPrompt}>Please log in first.</div>;
// //   }

// //   // If the user is logged in, render the dashboard content
// //   return (
// //     <div style={styles.dashboard}>
// //       <div style={styles.dashboardContainer}>
// //         <h1 style={styles.dashboardTitle}>Welcome to Your Dashboard</h1>

// //         {/* Habit Tracker */}
// //         <div style={styles.habitTrackerContainer}>
// //           <HabitTracker
// //             taskName="Morning Workout"
// //             taskDescription="Start your day with some exercise to boost energy."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //           <HabitTracker
// //             taskName="Read a Book"
// //             taskDescription="Spend 30 minutes reading a personal development book."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //           <HabitTracker
// //             taskName="Drink Water"
// //             taskDescription="Drink a glass of water after waking up."
// //             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
// //           />
// //         </div>

// //         {/* Main Dashboard Content */}
// //         <div style={styles.dashboardMainContent}>
// //           <ProgressChart />
// //           <TaskManager />
// //           <AppUsageTracker />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// // src/frontend/pages/Dashboard.js

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient';  // Import Supabase client
// import TaskManager from '../components/TaskManager';  // Import TaskManager
// import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// import HabitTracker from '../components/HabitTracker';  // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker';  // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null);  // Store user data
//   const [loading, setLoading] = useState(true);  // Track loading state

//   // Inline styles for the dashboard layout
//   const styles = {
//     dashboard: {
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
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
//     habitTrackerHover: {
//       transform: 'scale(1.05)',
//     },
//     dashboardMainContent: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '40px',
//       marginTop: '20px',
//     },
//     loading: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     loginPrompt: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     dashboardTitle: {
//       fontSize: '36px',
//       color: '#333',
//       marginBottom: '20px',
//     },
//   };

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();  // Get current session asynchronously
//       if (session) {
//         setUser(session.user);  // Set user if logged in
//       }
//       setLoading(false);  // Stop loading once session is checked
//     };

//     getSession();
//   }, []);

//   // Show a loading indicator while session is being checked
//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   // If the user is not logged in, show a login prompt
//   if (!user) {
//     return <div style={styles.loginPrompt}>Please log in first.</div>;
//   }

//   // If the user is logged in, render the dashboard content
//   return (
//     <div style={styles.dashboard}>
//       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

//       {/* Add HabitTracker components for different tasks */}
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

//       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
//       <div style={styles.dashboardMainContent}>
//         <ProgressChart />
//         <TaskManager />
//         <AppUsageTracker />
//       </div>
//     </div>
//   );
// };

// // export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient';  // Import Supabase client
// import TaskManager from '../components/TaskManager';  // Import TaskManager
// import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
// import HabitTracker from '../components/HabitTracker';  // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker';  // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null);  // Store user data
//   const [loading, setLoading] = useState(true);  // Track loading state
//   const [refreshing, setRefreshing] = useState(false);  // Track refreshing state

//   // Inline styles for the dashboard layout
//   const styles = {
//     dashboard: {
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
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
//     habitTrackerHover: {
//       transform: 'scale(1.05)',
//     },
//     dashboardMainContent: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '40px',
//       marginTop: '20px',
//     },
//     loading: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     loginPrompt: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     dashboardTitle: {
//       fontSize: '36px',
//       color: '#333',
//       marginBottom: '20px',
//     },
//     refreshButton: {
//       padding: '10px 20px',
//       fontSize: '16px',
//       marginTop: '20px',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     },
//     refreshButtonHover: {
//       backgroundColor: '#0056b3',
//     },
//   };

//   // Function to simulate refreshing the data (this would be your data fetch function)
//   const refreshData = async () => {
//     setRefreshing(true);
//     console.log("Refreshing data...");
//     // You can replace this with actual data fetching logic for TaskManager, ProgressChart, etc.
//     // Example: await fetchTasks(); or setState({ data: fetchedData })
//     setTimeout(() => {
//       setRefreshing(false);  // Stop refreshing once data is fetched
//     }, 2000);  // Simulate data fetching delay
//   };

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();  // Get current session asynchronously
//       if (session) {
//         setUser(session.user);  // Set user if logged in
//       }
//       setLoading(false);  // Stop loading once session is checked
//     };

//     getSession();

//     // Set up automatic data refresh every 10 seconds
//     const interval = setInterval(() => {
//       refreshData();  // Refresh the data every 10 seconds
//     }, 10000);  // 10 seconds

//     // Cleanup function to clear interval when component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Show a loading indicator while session is being checked
//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   // If the user is not logged in, show a login prompt
//   if (!user) {
//     return <div style={styles.loginPrompt}>Please log in first.</div>;
//   }

//   // If the user is logged in, render the dashboard content
//   return (
//     <div style={styles.dashboard}>
//       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

//       {/* Add HabitTracker components for different tasks */}
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

//       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
//       <div style={styles.dashboardMainContent}>
//         <ProgressChart />
//         <TaskManager />
//         <AppUsageTracker />
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


// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// import TaskManager from '../components/TaskManager'; // Import TaskManager
// import ProgressChart from '../components/ProgressChart'; // Import ProgressChart
// import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [refreshing, setRefreshing] = useState(false); // Track refreshing state

//   // Inline styles for the dashboard layout
//   const styles = {
//     dashboard: {
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
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
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '40px',
//       marginTop: '20px',
//     },
//     loading: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     loginPrompt: {
//       fontSize: '18px',
//       color: '#888',
//     },
//     dashboardTitle: {
//       fontSize: '36px',
//       color: '#333',
//       marginBottom: '20px',
//     },
//     refreshButton: {
//       padding: '10px 20px',
//       fontSize: '16px',
//       marginTop: '20px',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     },
//     refreshButtonHover: {
//       backgroundColor: '#0056b3',
//     },
//   };

//   // Function to simulate refreshing the data (this would be your data fetch function)
//   const refreshData = async () => {
//     setRefreshing(true);
//     console.log("Refreshing data...");
//     // You can replace this with actual data fetching logic for TaskManager, ProgressChart, etc.
//     // Example: await fetchTasks(); or setState({ data: fetchedData })
//     setTimeout(() => {
//       setRefreshing(false);  // Stop refreshing once data is fetched
//     }, 2000);  // Simulate data fetching delay
//   };

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();  // Get current session asynchronously
//       if (session) {
//         setUser(session.user);  // Set user if logged in
//       }
//       setLoading(false);  // Stop loading once session is checked
//     };

//     getSession();

//     // Set up automatic data refresh every 10 seconds
//     const interval = setInterval(() => {
//       refreshData();  // Refresh the data every 10 seconds
//     }, 10000);  // 10 seconds

//     // Cleanup function to clear interval when component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Show a loading indicator while session is being checked
//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   // If the user is not logged in, show a login prompt
//   if (!user) {
//     return <div style={styles.loginPrompt}>Please log in first.</div>;
//   }

//   // If the user is logged in, render the dashboard content
//   return (
//     <div style={styles.dashboard}>
//       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

//       {/* Add HabitTracker components for different tasks */}
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

//       {/* Display ProgressChart, TaskManager, and AppUsageTracker */}
//       <div style={styles.dashboardMainContent}>
//         <ProgressChart />
//         <TaskManager />
//         <AppUsageTracker />
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
import { supabase } from '../../services/supabaseClient'; // Import Supabase client
import TaskManager from '../components/TaskManager'; // Import TaskManager
import ProgressChart from '../components/ProgressChart'; // Import ProgressChart
import HabitTracker from '../components/HabitTracker'; // Import HabitTracker
import AppUsageTracker from '../components/AppUsageTracker'; // Import AppUsageTracker

const Dashboard = () => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state
  const [refreshing, setRefreshing] = useState(false); // Track refreshing state

  // Inline styles for the dashboard layout
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
    refreshButton: {
      padding: '10px 20px',
      fontSize: '16px',
      marginTop: '20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    refreshButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  // Function to simulate refreshing the data (this would be your data fetch function)
  const refreshData = async () => {
    setRefreshing(true);
    console.log("Refreshing data...");
    // You can replace this with actual data fetching logic for TaskManager, ProgressChart, etc.
    // Example: await fetchTasks(); or setState({ data: fetchedData })
    setTimeout(() => {
      setRefreshing(false);  // Stop refreshing once data is fetched
    }, 2000);  // Simulate data fetching delay
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();  // Get current session asynchronously
      if (session) {
        setUser(session.user);  // Set user if logged in
      }
      setLoading(false);  // Stop loading once session is checked
    };

    getSession();

    // Set up automatic data refresh every 10 seconds
    const interval = setInterval(() => {
      refreshData();  // Refresh the data every 10 seconds
    }, 10000);  // 10 seconds

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Show a loading indicator while session is being checked
  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  // If the user is not logged in, show a login prompt
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
