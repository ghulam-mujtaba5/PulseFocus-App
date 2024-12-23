
// // // //src\frontend\pages\Dashboard.js
// // // import React, { useState, useEffect } from 'react';
// // // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // // import Signup from '../components/Signup'; // Update path based on actual location

// // // const Dashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);  // Track loading state

// // //   // Check if the user is logged in when the component mounts
// // //   useEffect(() => {
// // //     const getSession = async () => {
// // //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// // //       console.log('Session:', session); // Debug the session state
// // //       if (session) {
// // //         setUser(session.user); // Set user if logged in
// // //       }
// // //       setLoading(false);  // Stop loading once session is checked
// // //     };
    
// // //     getSession();
// // //   }, []);

// // //   // Show a loading indicator or signup component until session is ready
// // //   if (loading) {
// // //     return <div>Loading...</div>; // You can replace this with a loading spinner
// // //   }

// // //   // Show Signup component if user is not logged in
// // //   if (!user) {
// // //     return <Signup />;
// // //   }

// // //   // If the user is logged in, render the dashboard content
// // //   return (
// // //     <div className="dashboard">
// // //       <h1>Dashboard</h1>
// // //       {/* Add your dashboard content here */}
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // // src/frontend/pages/Dashboard.js

// // import React, { useState, useEffect } from 'react';
// // import { supabase } from '../../services/supabaseClient'; // Import Supabase client
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// // const Dashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true); // Track loading state
// //   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

// //   // Check if the user is logged in when the component mounts
// //   useEffect(() => {
// //     const getSession = async () => {
// //       const { data: { session } } = await supabase.auth.getSession(); // Get current session asynchronously
// //       if (session) {
// //         setUser(session.user); // Set user if logged in
// //       } else {
// //         navigate('/login'); // Redirect to login if not logged in
// //       }
// //       setLoading(false); // Stop loading once session is checked
// //     };

// //     getSession();
// //   }, [navigate]);

// //   // Show a loading indicator until session is checked
// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   // Render dashboard content if user is logged in
// //   if (user) {
// //     return (
// //       <div className="dashboard">
// //         <h1>Welcome to your Dashboard</h1>
// //         {/* Add your dashboard content here */}
// //       </div>
// //     );
// //   }

// //   // If user is not logged in, do not render the dashboard
// //   return null;
// // };

// // export default Dashboard;

// // src/frontend/pages/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient'; // Import Supabase client

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);  // Track loading state

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

//   // Show a loading indicator or signup component until session is ready
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
//       {/* Add your dashboard content here */}
//     </div>
//   );
// };

// export default Dashboard;

// src/frontend/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient'; // Import Supabase client
import TaskManager from './TaskManager';  // Import TaskManager
import ProgressChart from '../components/ProgressChart';  // Import ProgressChart
import HabitTracker from '../components/HabitTracker'; // Import HabitTracker

const Dashboard = () => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state

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
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  // If the user is not logged in, show a signup component
  if (!user) {
    return <div>Please log in first.</div>;
  }

  // If the user is logged in, render the dashboard content
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      
      {/* Add HabitTracker components for different tasks */}
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
