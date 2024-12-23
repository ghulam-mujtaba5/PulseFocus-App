// // // // // // // // src/frontend/App.js

// // // // // // // import React, { useState } from 'react';
// // // // // // // import FirstPage from './pages/FirstPage'; // Assuming FirstPage component is defined
// // // // // // // import TaskCard from './components/TaskCard';
// // // // // // // import HabitTracker from './components/HabitTracker';

// // // // // // // function App() {
// // // // // // //   const [isFirstPage, setIsFirstPage] = useState(true);

// // // // // // //   const goToMainContent = () => {
// // // // // // //     setIsFirstPage(false); // Transition from FirstPage to main content
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {isFirstPage ? (
// // // // // // //         <FirstPage onComplete={goToMainContent} /> // Pass goToMainContent as a prop to FirstPage
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           <h1>Personal Productivity Manager</h1>
// // // // // // //           <TaskCard />
// // // // // // //           <HabitTracker />
// // // // // // //         </>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import FirstPage from './pages/FirstPage'; 
// // // // // // // import TaskCard from './components/TaskCard'; 
// // // // // // // import HabitTracker from './components/HabitTracker';

// // // // // // // function App() {
// // // // // // //   const [isFirstPage, setIsFirstPage] = useState(true);

// // // // // // //   const goToMainContent = () => {
// // // // // // //     setIsFirstPage(false); // Transition from FirstPage to main content
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {isFirstPage ? (
// // // // // // //         <FirstPage onComplete={goToMainContent} /> // Pass goToMainContent as a prop to FirstPage
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           <h1>Personal Productivity Manager</h1>
// // // // // // //           <TaskCard />
// // // // // // //           <HabitTracker />
// // // // // // //         </>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;

// // // // // // import React from 'react';
// // // // // // import Dashboard from './pages/Dashboard';
// // // // // // import './styles/App.css'; // If the file is inside a styles folder


// // // // // // function App() {
// // // // // //   return (
// // // // // //     <div className="App">
// // // // // //       <Dashboard />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;



// // // // // //src\frontend\App.js
// // // // // import React from 'react';
// // // // // import LoginSignupPage from './pages/Signup_Page'; // Import the LoginSignupPage
// // // // // import './styles/App.css'; // If the file is inside a styles folder

// // // // // function App() {
// // // // //   return (
// // // // //     <div className="App">
// // // // //       <LoginSignupPage />  {/* Render the LoginSignupPage component */}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // // src/frontend/App.js

// // // import React from 'react';
// // // import SignupPage from './pages/Signup_Page'; // Import the SignupPage component
// // // import './styles/App.css'; // Import the styles

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <SignupPage /> {/* Render the SignupPage component */}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // // import React from 'react';
// // // // import LoginPage from './pages/Login_Page'; // Import the LoginPage component
// // // // import './styles/App.css'; // Import the styles

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <LoginPage /> {/* Render the LoginPage component */}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;



// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import SignupPage from './pages/Signup_Page';
// // import LoginPage from './pages/Login_Page';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Default route */}
// //         <Route path="/" element={<Navigate to="/Signup_Page" />} />
        
// //         {/* Specific routes */}
// //         <Route path="/Signup_Page" element={<SignupPage />} />
// //         <Route path="/Login_Page" element={<LoginPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// //src\frontend\App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import SignupPage from './pages/Signup_Page';
// import LoginPage from './pages/Login_Page';
// import Dashboard from './pages/Dashboard'; // Import Dashboard or any other page

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Default route */}
//         <Route path="/" element={<Navigate to="/Signup_Page" />} />
        
//         {/* Specific routes */}
//         <Route path="/Signup_Page" element={<SignupPage />} />
//         <Route path="/Login_Page" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/frontend/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupPage from './pages/Signup_Page';
import LoginPage from './pages/Login_Page';
import Dashboard from './pages/Dashboard'; // Import Dashboard or any other page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/Signup_Page" />} />

        {/* Specific routes */}
        <Route path="/Signup_Page" element={<SignupPage />} />
        <Route path="/Login_Page" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;
