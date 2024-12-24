// // // src/frontend/index.js
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App';

// // // Create a root container and render the App component inside it
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);


// // // src/frontend/index.js

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App';

// // // Create a root container and render the App component inside it
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);

// // src/frontend/index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.js';  // Add the .js extension here

// // Create a root container and render the App component inside it
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import App from './App.js';

// Create a root container and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
