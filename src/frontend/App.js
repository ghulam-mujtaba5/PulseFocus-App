// // src/frontend/App.js

// import React, { useState } from 'react';
// import FirstPage from './pages/FirstPage'; // Assuming FirstPage component is defined
// import TaskCard from './components/TaskCard';
// import HabitTracker from './components/HabitTracker';

// function App() {
//   const [isFirstPage, setIsFirstPage] = useState(true);

//   const goToMainContent = () => {
//     setIsFirstPage(false); // Transition from FirstPage to main content
//   };

//   return (
//     <div>
//       {isFirstPage ? (
//         <FirstPage onComplete={goToMainContent} /> // Pass goToMainContent as a prop to FirstPage
//       ) : (
//         <>
//           <h1>Personal Productivity Manager</h1>
//           <TaskCard />
//           <HabitTracker />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import FirstPage from './pages/FirstPage'; 
// import TaskCard from './components/TaskCard'; 
// import HabitTracker from './components/HabitTracker';

// function App() {
//   const [isFirstPage, setIsFirstPage] = useState(true);

//   const goToMainContent = () => {
//     setIsFirstPage(false); // Transition from FirstPage to main content
//   };

//   return (
//     <div>
//       {isFirstPage ? (
//         <FirstPage onComplete={goToMainContent} /> // Pass goToMainContent as a prop to FirstPage
//       ) : (
//         <>
//           <h1>Personal Productivity Manager</h1>
//           <TaskCard />
//           <HabitTracker />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Dashboard from './pages/Dashboard';
import './styles/App.css'; // If the file is inside a styles folder


function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
