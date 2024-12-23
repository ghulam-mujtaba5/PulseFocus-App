
// // src/frontend/pages/FirstPage.js
// import React, { useEffect } from 'react';
// import HabitTracker from '../components/HabitTracker'; // Import the HabitTracker component

// const FirstPage = ({ onComplete }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onComplete(); // Call onComplete after a set duration (e.g., 3 seconds)
//     }, 3000); // Show FirstPage for 3 seconds

//     return () => clearTimeout(timer); // Clean up timer on component unmount
//   }, [onComplete]);

//   const handleTaskComplete = (taskName) => {
//     console.log(`${taskName} has been completed.`);
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Welcome to PulseFocus App</h1>
//       <p>We're getting things ready for you...</p>
//       <p>This page will transition to the main content shortly.</p>

//       {/* Render HabitTracker components */}
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         <HabitTracker
//           taskName="Morning Workout"
//           taskDescription="Start your day with some exercise to boost energy."
//           onComplete={handleTaskComplete}
//         />
//         <HabitTracker
//           taskName="Read a Book"
//           taskDescription="Spend 30 minutes reading a personal development book."
//           onComplete={handleTaskComplete}
//         />
//         <HabitTracker
//           taskName="Drink Water"
//           taskDescription="Drink a glass of water after waking up."
//           onComplete={handleTaskComplete}
//         />
//       </div>
//     </div>
//   );
// };

// export default FirstPage;
// src/frontend/pages/FirstPage.js
import React, { useEffect } from 'react';
import HabitTracker from '../components/HabitTracker'; // Import the HabitTracker component

const FirstPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Call onComplete after a set duration (e.g., 3 seconds)
    }, 3000); // Show FirstPage for 3 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [onComplete]);

  const handleTaskComplete = (taskName) => {
    console.log(`${taskName} has been completed.`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to PulseFocus App</h1>
      <p>We're getting things ready for you...</p>
      <p>This page will transition to the main content shortly.</p>

      {/* Render HabitTracker components */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <HabitTracker
          taskName="Morning Workout"
          taskDescription="Start your day with some exercise to boost energy."
          onComplete={handleTaskComplete}
        />
        <HabitTracker
          taskName="Read a Book"
          taskDescription="Spend 30 minutes reading a personal development book."
          onComplete={handleTaskComplete}
        />
        <HabitTracker
          taskName="Drink Water"
          taskDescription="Drink a glass of water after waking up."
          onComplete={handleTaskComplete}
        />
      </div>
    </div>
  );
};

export default FirstPage;
